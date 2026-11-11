// Arma el Reel «Ya abrimos» (1080×1920, sin audio) a partir de 4 clips de la tienda.
// Uso: node bloque5/reel.mjs <panoramica> <anaqueles> <copas> <tabla>
//   → bloque5/disenos/reel-ya-abrimos.mp4 y reel-portada.jpg  (requiere ffmpeg)
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
const { chromium } = createRequire(import.meta.url)('playwright');

const clips = process.argv.slice(2);
if (clips.length !== 4) { console.error('Se necesitan 4 clips'); process.exit(1); }
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');
const TMP = mkdtempSync(path.join(tmpdir(), 'reel-'));
const W = 1080, H = 1920;

const star = (s) => `<svg width="${s}" height="${s}" viewBox="-22 -22 44 44"><path fill="#C9A24C" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/></svg>`;
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;background:transparent}
body{color:#F4ECD8;font-family:'Jost',sans-serif;text-align:center;position:relative;overflow:hidden}
.shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(17,28,61,.78) 0%,rgba(17,28,61,0) 24%,rgba(17,28,61,0) 42%,rgba(17,28,61,.84) 60%,rgba(17,28,61,.95) 100%)}
.solid{position:absolute;inset:0;background:radial-gradient(90% 70% at 50% 42%,#17265A 0%,#101C45 55%,#0A1230 100%)}
.c{position:absolute;width:64px;height:64px;border:1.5px solid rgba(201,162,76,.6)}.c.tl{top:72px;left:72px;border-right:0;border-bottom:0}.c.tr{top:72px;right:72px;border-left:0;border-bottom:0}.c.bl{bottom:72px;left:72px;border-right:0;border-top:0}.c.br{bottom:72px;right:72px;border-left:0;border-top:0}
.top{position:absolute;top:210px;left:0;right:0;color:#C9A24C;display:flex;justify-content:center;align-items:center;gap:16px}
.name{font-family:'Cinzel',serif;font-weight:500;font-size:52px;letter-spacing:.06em;line-height:1}
.sub{font-family:'Cinzel',serif;font-size:19px;letter-spacing:.42em;padding-left:.42em;margin-top:10px}
.bottom{position:absolute;left:70px;right:70px;bottom:400px}
.eyebrow{font-weight:500;font-size:23px;letter-spacing:.34em;padding-left:.34em;text-transform:uppercase;color:#C9A24C}
.big{font-family:'Cormorant Garamond',serif;font-weight:500;line-height:1.04;text-shadow:0 4px 30px rgba(0,0,0,.45)}.big i{font-weight:400;color:#C9A24C;display:block}
.it{font-family:'Cormorant Garamond',serif;font-size:68px;line-height:1.12;text-shadow:0 3px 24px rgba(0,0,0,.5)}.it i{color:#C9A24C;display:block}
.gold{color:#C9A24C}
.info{font-weight:500;font-size:22px;letter-spacing:.3em;text-transform:uppercase;line-height:2;color:rgba(244,236,216,.8)}
.info b{display:block;font-weight:500;color:#C9A24C}
.center{position:absolute;inset:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:44px;padding:0 60px 120px}
.chip{font-family:'Cormorant Garamond',serif;font-size:44px}.chip span{font-style:italic}
`;
const head = `<div class="top">${star(34)}<div class="name">V612</div></div>`;
const overlays = {
  o1: `<div class="shade"></div>${head}<div class="bottom"><div class="eyebrow">La Paz · BCS</div><div class="big" style="font-size:128px;margin-top:26px">La espera terminó.<i>Ya abrimos.</i></div></div>`,
  o2: `<div class="shade"></div>${head}<div class="bottom"><div class="it">Vinos de México y del mundo,<i>elegidos uno por uno.</i></div></div>`,
  o3: `<div class="shade"></div>${head}<div class="bottom"><div class="it">Un pequeño planeta de vino<i>en el Centro de La Paz.</i></div></div>`,
  o4: `<div class="shade"></div>${head}<div class="bottom"><div class="eyebrow">La casa · Horario</div><div class="big" style="font-size:104px;margin-top:26px">Lunes a sábado<i>10:00 — 20:00</i></div></div>`,
  end: `<div class="solid"></div><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i><div class="center">
    <div style="color:#C9A24C;display:flex;align-items:center;gap:20px">${star(44)}<div class="name" style="font-size:72px">V612</div></div>
    <div class="big" style="font-size:112px">Ven a<i>conocernos.</i></div>
    <div class="info">Héroes de Independencia esq. Independencia<br>Centro · La Paz, BCS<b>Lunes a sábado · 10:00 — 20:00</b></div>
    <div class="chip">Google Maps · <span class="gold">V612 Wine Boutique</span></div></div>`,
};

const browser = await chromium.launch();
for (const [k, body] of Object.entries(overlays)) {
  const pg = await browser.newPage({ viewport: { width: W, height: H } });
  await pg.setContent(`<!doctype html><meta charset="utf-8"><style>${css}</style><body>${body}</body>`, { waitUntil: 'networkidle' });
  await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(TMP, `${k}.png`), omitBackground: true });
  await pg.close();
}
await browser.close();

// [clip, inicio, duración, overlay]
const cuts = [[0, 0.3, 5.2, 'o1'], [1, 0.2, 2.8, 'o2'], [2, 1.0, 3.2, 'o3'], [3, 0.2, 3.0, 'o4']];
const END = 3.6;
const args = ['-v', 'error', '-y'];
clips.forEach((c) => args.push('-i', c));
['o1', 'o2', 'o3', 'o4'].forEach((o) => args.push('-i', path.join(TMP, `${o}.png`)));
args.push('-loop', '1', '-t', String(END), '-i', path.join(TMP, 'end.png'));
let f = '';
cuts.forEach(([i, ss, d, o], n) => {
  f += `[${i}:v]trim=start=${ss}:duration=${d},setpts=PTS-STARTPTS,fps=30,scale=${W}:${H}:force_original_aspect_ratio=increase:flags=lanczos,crop=${W}:${H},unsharp=5:5:0.6,eq=contrast=1.04:saturation=1.06[b${n}];`;
  f += `[b${n}][${4 + n}:v]overlay=0:0,format=yuv420p[s${n}];`;
});
f += `[8:v]fps=30,format=yuv420p,fade=t=in:st=0:d=0.4[s4];[s0][s1][s2][s3][s4]concat=n=5:v=1:a=0,fade=t=in:st=0:d=0.3[v]`;
const mp4 = path.join(OUT, 'reel-ya-abrimos.mp4');
args.push('-filter_complex', f, '-map', '[v]', '-an', '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', mp4);
execFileSync('ffmpeg', args, { stdio: 'inherit' });
execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', '2.5', '-i', mp4, '-frames:v', '1', '-q:v', '2', path.join(OUT, 'reel-portada.jpg')]);
console.log('ok', mp4);
