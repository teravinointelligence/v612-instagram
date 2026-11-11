// Genera los diseños del Bloque 5 (Ya abrimos) con los colores del logo V612.
// Uso: node bloque5/build.mjs  → escribe bloque5/disenos/*.jpg
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // global en el entorno; en local: npm i playwright
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');

// Datos de tienda (fuente: v612.mx)
const T = {
  calle: 'Héroes de Independencia',
  esquina: 'esq. Independencia',
  colonia: 'Centro · La Paz, BCS',
  dias: 'Lunes a Sábado',
  horas: '10:00 — 20:00',
  cerrado: 'Domingo cerrado',
  maps: 'V612 Wine Boutique',
  wa: '624 159 9437',
  ig: '@v612wineboutique',
};

// Estrella del logo (logo-v612.svg)
const star = (size, inner = true) => `
<svg class="star" width="${size}" height="${size}" viewBox="-22 -22 44 44">
  <path fill="#C9A24C" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/>
  ${inner ? '<path fill="#1A2954" d="M0 -10 L1.5 -1.5 L10 0 L1.5 1.5 L0 10 L-1.5 1.5 L-10 0 L-1.5 -1.5Z"/>' : ''}
</svg>`;

const logo = (scale = 1) => `
<div class="logo" style="--s:${scale}">
  <div class="logo-star">${star(54 * scale)}</div>
  <div class="logo-name">V612</div>
  <div class="logo-sub">WINE BOUTIQUE</div>
</div>`;

// Cielo de estrellas determinista
function sky(w, h, n, seed) {
  let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  let out = '';
  for (let i = 0; i < n; i++) {
    const x = r() * w, y = r() * h, big = r() > 0.88, o = 0.12 + r() * 0.35;
    out += big
      ? `<g transform="translate(${x} ${y}) scale(${0.25 + r() * 0.3})" opacity="${o + 0.15}"><path fill="#C9A24C" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/></g>`
      : `<circle cx="${x}" cy="${y}" r="${1 + r() * 1.6}" fill="#F4ECD8" opacity="${o}"/>`;
  }
  return `<svg class="sky" width="${w}" height="${h}">${out}</svg>`;
}

const pin = `<svg width="40" height="52" viewBox="0 0 40 52"><path d="M20 1C9.5 1 1 9.4 1 19.8 1 33.5 20 51 20 51s19-17.500 19-31.200C39 9.400 30.500 1 20 1z" fill="none" stroke="#C9A24C" stroke-width="2"/><circle cx="20" cy="20" r="6.500" fill="#C9A24C"/></svg>`;

const css = (w, h) => `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@400;500&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${w}px;height:${h}px}
body{background:radial-gradient(95% 75% at 50% 42%,#1E2F60 0%,#1A2954 55%,#16234A 100%);color:#F4ECD8;font-family:'Cormorant Garamond',serif;position:relative;overflow:hidden}
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
.sub{font-style:italic;font-size:44px;color:#C9A24C;line-height:1.2}
.p{font-size:42px;line-height:1.3;color:rgba(244,236,216,.92)}
.rule{display:flex;align-items:center;gap:20px}.rule i{height:1px;width:96px;background:rgba(201,162,76,.6)}
.grow{flex:1}
.tbl{width:100%}
.tr{display:flex;justify-content:space-between;align-items:baseline;gap:30px;padding:30px 0;border-bottom:1px solid rgba(201,162,76,.28)}
.tr:first-child{border-top:1px solid rgba(201,162,76,.28)}
.tr .k{font-family:'Jost',sans-serif;font-weight:500;font-size:19px;letter-spacing:.3em;text-transform:uppercase;color:#C9A24C;white-space:nowrap}
.tr .v{font-size:44px;text-align:right;line-height:1.15}
.tr .n{font-size:50px}.tr .g{font-size:50px;color:#C9A24C;font-style:italic}
.tr .off{font-family:'Jost',sans-serif;font-size:21px;letter-spacing:.3em;color:rgba(244,236,216,.6)}
.foot{font-family:'Jost',sans-serif;font-weight:500;font-size:19px;letter-spacing:.3em;text-transform:uppercase;color:rgba(244,236,216,.7);line-height:1.9}
.foot b{color:#C9A24C;font-weight:500}
`;

// Logo oficial: estrella arriba a la derecha, V612 y WINE BOUTIQUE (logo-v612.svg)
const lock = `<div class="lock"><span class="ls">${star(30)}</span><span class="ln">V612</span><span class="lw">WINE BOUTIQUE</span></div>`;
const rule = `<div class="rule"><i></i>${star(20, false)}<i></i></div>`;
const corners = `<i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i>`;

const page = (w, h, cls, body) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>${css(w, h)}</style></head><body>${corners}<div class="wrap ${cls}">${body}</div></body></html>`;

const P = [1080, 1350], S = [1080, 1920];
const footDir = `<div class="foot">${T.calle} ${T.esquina}<br><b>${T.dias} · ${T.horas}</b></div>`;

const abrimos = (big, top, bottom) => `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">La Paz · Baja California Sur</div>
    <div class="h" style="font-size:${big}px;margin-top:40px">La espera terminó.<i>Ya abrimos.</i></div>
    <div style="height:50px"></div>${rule}<div style="height:44px"></div>
    <div class="p">Un pequeño planeta de vino<br>en el Centro de La Paz.</div>
    <div class="grow"></div>
    ${footDir}<div style="height:${bottom}px"></div>`;

const ubicacion = (big, top, bottom, cue) => `
    <div style="height:${top}px"></div>${lock}
    <div style="height:${top ? 110 : 84}px"></div>
    <div class="eyebrow">La casa · Cómo llegar</div>
    <div class="h" style="font-size:${big}px;margin-top:30px">Encuéntranos<i>en el Centro.</i></div>
    <div class="grow"></div>
    <div class="tbl">
      <div class="tr"><span class="k">Calle</span><span class="v">${T.calle}</span></div>
      <div class="tr"><span class="k">Esquina</span><span class="v">Independencia</span></div>
      <div class="tr"><span class="k">Ciudad</span><span class="v">La Paz, Baja California Sur</span></div>
      <div class="tr"><span class="k">Google Maps</span><span class="v" style="color:#C9A24C;font-style:italic">${T.maps}</span></div>
    </div>
    <div class="grow"></div>
    ${cue ? `<div class="foot" style="text-align:center">Toca para abrir en Google Maps<br><b style="font-size:30px;letter-spacing:0">▾</b></div><div style="height:${bottom}px"></div>` : `<div class="foot">${T.dias} · ${T.horas}<br><b>${T.ig}</b></div>`}`;

const horario = (big, top, bottom) => `
    <div style="height:${top}px"></div>${lock}
    <div style="height:${top ? 110 : 84}px"></div>
    <div class="eyebrow">La casa · Horario</div>
    <div class="h" style="font-size:${big}px;margin-top:30px">Te esperamos<i>de lunes a sábado.</i></div>
    <div class="grow"></div>
    <div class="tbl">
      <div class="tr"><span class="n">Lunes a sábado</span><span class="g">10:00 — 20:00</span></div>
      <div class="tr"><span class="n">Domingo</span><span class="off">CERRADO</span></div>
    </div>
    <div style="height:54px"></div>
    <div class="p" style="font-style:italic">Pasa a conocernos, pregunta lo que quieras<br>y llévate la botella correcta.</div>
    <div class="grow"></div>
    <div class="foot">${T.calle} ${T.esquina}<br><b>WhatsApp ${T.wa}</b></div><div style="height:${bottom}px"></div>`;

// Mapa de calles (generado con mapa.py a partir de OpenStreetMap)
const MAPA = readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'mapa-centro.svg'), 'utf8');
const mapa = (big, top, bottom, cue) => `
    <div style="height:${top}px"></div>${lock}
    <div style="height:${top ? 80 : 44}px"></div>
    <div class="eyebrow">La casa · Mapa</div>
    <div class="h" style="font-size:${big}px;margin-top:24px">Estamos aquí,<i>en el Centro de La Paz.</i></div>
    <div class="grow"></div>
    <div style="margin:0 -24px;width:calc(100% + 48px);line-height:0">${MAPA.replace('width="936" height="720"', 'width="100%"')}</div>
    <div class="grow"></div>
    ${cue ? `<div class="foot" style="text-align:center">${T.calle} ${T.esquina}<br><b>Toca para abrir en Google Maps ▾</b></div><div style="height:${bottom}px"></div>` : `<div class="foot">${T.calle} ${T.esquina}<br><b>Google Maps · ${T.maps}</b></div>`}`;

const designs = {
  'post-01': page(...P, 'mid', abrimos(112, 0, 0)),
  'post-02': page(...P, '', ubicacion(108, 0, 0, false)),
  'post-03': page(...P, '', horario(100, 0, 0)),
  'post-mapa': page(...P, '', mapa(76, 0, 0, false)),
  'story-mapa': page(...S, '', mapa(92, 130, 250, true)),
  // Stories: margen superior e inferior libres para la interfaz y stickers
  'story-01': page(...S, 'mid', abrimos(118, 130, 190)),
  'story-02': page(...S, '', ubicacion(112, 130, 150, true)),
  'story-03': page(...S, '', horario(104, 130, 190)),
};

const browser = await chromium.launch();
for (const [name, html] of Object.entries(designs)) {
  const [w, h] = name.startsWith('story') ? S : P;
  const pg = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await pg.setContent(html, { waitUntil: 'networkidle' });
  await pg.evaluate(() => document.fonts.ready);
  const over = await pg.evaluate(() => { const e = document.querySelector('.wrap'); return e.scrollHeight - e.clientHeight; });
  if (over > 0) console.warn(`${name}: desborde ${over}px`);
  await pg.screenshot({ path: path.join(OUT, `${name}.jpg`), type: 'jpeg', quality: 95 });
  await pg.close();
  console.log('ok', name);
}
await browser.close();
