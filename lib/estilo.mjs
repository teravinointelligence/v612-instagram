// Plantilla común de V612 para feed (4:5) y stories (9:16). Implementa GUIA-ESTILO.md:
// navy #1A2954, dorado #C9A24C, marfil #F4ECD8; Cormorant Garamond + Jost; logo oficial en Cinzel.
// Los bloques nuevos importan de aquí; bloque5/build.mjs es anterior y trae su propia copia.
import { createRequire } from 'node:module';
import path from 'node:path';
const { chromium } = createRequire(import.meta.url)('playwright'); // en local: npm i playwright

export const P = [1080, 1350], S = [1080, 1920];
export const TIENDA = {
  direccion: 'Héroes de Independencia esq. Independencia',
  horario: 'Lunes a sábado · 10:00 — 20:00',
  sitio: 'v612.mx',
  ig: '@v612wineboutique',
};

export const star = (size, inner = true) => `
<svg width="${size}" height="${size}" viewBox="-22 -22 44 44">
  <path fill="#C9A24C" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/>
  ${inner ? '<path fill="#1A2954" d="M0 -10 L1.5 -1.5 L10 0 L1.5 1.5 L0 10 L-1.5 1.5 L-10 0 L-1.5 -1.5Z"/>' : ''}
</svg>`;

// Logo oficial: estrella arriba a la derecha, V612 y WINE BOUTIQUE
export const lock = `<div class="lock"><span class="ls">${star(30)}</span><span class="ln">V612</span><span class="lw">WINE BOUTIQUE</span></div>`;
export const rule = `<div class="rule"><i></i>${star(20, false)}<i></i></div>`;
const corners = `<i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>`;

const css = (w, h) => `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${w}px;height:${h}px}
body{background:radial-gradient(95% 75% at 50% 42%,#1E2F60 0%,#1A2954 55%,#16234A 100%);color:#F4ECD8;font-family:'Cormorant Garamond',serif;font-variant-numeric:lining-nums;position:relative;overflow:hidden}
.c{position:absolute;width:64px;height:64px;border:1.5px solid rgba(201,162,76,.6)}
.c.tl{top:72px;left:72px;border-right:0;border-bottom:0}.c.tr{top:72px;right:72px;border-left:0;border-bottom:0}
.c.bl{bottom:72px;left:72px;border-right:0;border-top:0}.c.br{bottom:72px;right:72px;border-left:0;border-top:0}
.wrap{position:absolute;inset:72px;display:flex;flex-direction:column;padding:78px 84px 70px}
.wrap.mid{align-items:center;text-align:center}
.wrap.mid .lock{align-self:center}
.lock{align-self:flex-start;display:inline-flex;flex-direction:column;align-items:center;color:#C9A24C;font-family:'Cinzel',serif;line-height:1}
.lock .ls{align-self:flex-end;margin:0 -22px -8px 0;line-height:0}
.lock .ln{font-weight:500;font-size:62px;letter-spacing:.04em}
.lock .lw{font-size:14px;letter-spacing:.42em;padding-left:.42em;margin-top:8px}
.eyebrow{font-family:'Jost',sans-serif;font-weight:500;font-size:21px;letter-spacing:.34em;text-transform:uppercase;color:#C9A24C}
.h{font-weight:500;line-height:1.04;letter-spacing:-.005em}
.h i{font-weight:400;color:#C9A24C;display:block}
.h em{font-style:italic;font-weight:400;color:#C9A24C}
.p{font-size:46px;line-height:1.3;color:rgba(244,236,216,.92)}
.q{font-size:36px;line-height:1.35;font-style:italic;color:rgba(244,236,216,.8)}
.rule{display:flex;align-items:center;gap:20px}.rule i{height:1px;width:96px;background:rgba(201,162,76,.6)}
.grow{flex:1}
.foot{font-family:'Jost',sans-serif;font-weight:500;font-size:19px;letter-spacing:.3em;text-transform:uppercase;color:rgba(244,236,216,.7);line-height:1.9;display:flex;justify-content:space-between;align-items:flex-end;width:100%}
.foot b{color:#C9A24C;font-weight:500}
`;

export const page = (size, cls, body) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>${css(...size)}</style></head><body>${corners}<div class="wrap ${cls}">${body}</div></body></html>`;

/** designs: { nombre: [tamaño, html] } → escribe <dir>/<nombre>.jpg */
export async function render(designs, dir) {
  const browser = await chromium.launch();
  for (const [name, [size, html]] of Object.entries(designs)) {
    const pg = await browser.newPage({ viewport: { width: size[0], height: size[1] }, deviceScaleFactor: 1 });
    await pg.setContent(html, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    const over = await pg.evaluate(() => { const e = document.querySelector('.wrap'); return e.scrollHeight - e.clientHeight; });
    if (over > 0) console.warn(`${name}: desborde ${over}px`);
    await pg.screenshot({ path: path.join(dir, `${name}.jpg`), type: 'jpeg', quality: 95 });
    await pg.close();
    console.log('ok', name);
  }
  await browser.close();
}
