// Genera los diseños del Bloque 5 (Ya abrimos) con los colores del logo V612.
// Uso: node bloque5/build.mjs  → escribe bloque5/disenos/*.jpg
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright'); // global en el entorno; en local: npm i playwright
import { fileURLToPath } from 'node:url';
import path from 'node:path';

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
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${w}px;height:${h}px}
body{background:radial-gradient(120% 80% at 50% 0%,#24376D 0%,#1A2954 45%,#111C3D 100%);color:#F4ECD8;font-family:'Jost',sans-serif;position:relative;overflow:hidden}
.sky{position:absolute;inset:0}
.frame{position:absolute;inset:44px;border:1.5px solid rgba(201,162,76,.55)}
.frame:after{content:'';position:absolute;inset:10px;border:1px solid rgba(201,162,76,.22)}
.wrap{position:absolute;inset:44px;display:flex;flex-direction:column;align-items:center;text-align:center;padding:70px 70px 64px}
.logo{display:flex;flex-direction:column;align-items:center;color:#C9A24C}
.logo-star{align-self:flex-end;margin-right:calc(-34px*var(--s));margin-bottom:calc(-14px*var(--s));line-height:0}
.logo-name{font-family:'Cinzel',serif;font-weight:500;font-size:calc(104px*var(--s));letter-spacing:.04em;line-height:1}
.logo-sub{font-family:'Cinzel',serif;font-size:calc(23px*var(--s));letter-spacing:.42em;margin-top:calc(12px*var(--s));padding-left:.42em}
.eyebrow{font-size:26px;letter-spacing:.42em;text-transform:uppercase;color:#C9A24C;padding-left:.42em}
.big{font-family:'Cinzel',serif;font-weight:500;color:#F4ECD8;line-height:.98;letter-spacing:.03em}
.gold{color:#C9A24C}
.it{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:52px;color:#F4ECD8;line-height:1.15}
.rule{display:flex;align-items:center;gap:22px;width:100%;justify-content:center}
.rule i{height:1px;width:170px;background:linear-gradient(90deg,transparent,#C9A24C)}
.rule i:last-child{transform:scaleX(-1)}
.grow{flex:1}
.info{font-size:31px;letter-spacing:.06em;line-height:1.5;font-weight:300}
.info b{font-weight:500;color:#C9A24C;letter-spacing:.14em;text-transform:uppercase;font-size:25px}
.foot{font-size:25px;letter-spacing:.3em;color:rgba(244,236,216,.75);text-transform:uppercase;padding-left:.3em}
.card{border:1px solid rgba(201,162,76,.5);background:rgba(17,28,61,.55);padding:38px 54px;width:100%}
.row{display:flex;justify-content:space-between;align-items:baseline;padding:20px 0;font-size:40px}
.row+.row{border-top:1px solid rgba(201,162,76,.28)}
.row span:first-child{font-family:'Cormorant Garamond',serif;font-size:50px}
.row span:last-child{font-family:'Cinzel',serif;color:#C9A24C;letter-spacing:.05em}
.row.off span:last-child{color:rgba(244,236,216,.6);font-size:32px;letter-spacing:.2em}
.chip{display:inline-flex;align-items:center;gap:16px;border:1.5px solid #C9A24C;border-radius:60px;padding:16px 38px;font-size:29px;letter-spacing:.08em}
.chip b{color:#C9A24C;font-weight:500}
.sticker{width:560px;height:120px;border:2px dashed rgba(201,162,76,.0)}
.map{position:relative;width:100%;height:330px}
`;

const rule = `<div class="rule"><i></i>${star(30, false)}<i></i></div>`;

// Croquis esquemático del cruce (sin orientación ni esquina exacta)
const corner = (w, h) => `
<svg class="map" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <g stroke="rgba(244,236,216,.28)" stroke-width="34" stroke-linecap="round">
    <line x1="40" y1="${h * 0.62}" x2="${w - 40}" y2="${h * 0.62}"/>
    <line x1="${w * 0.5}" y1="20" x2="${w * 0.5}" y2="${h - 10}"/>
  </g>
  <g stroke="rgba(201,162,76,.5)" stroke-width="1.5" stroke-dasharray="10 12">
    <line x1="40" y1="${h * 0.62}" x2="${w - 40}" y2="${h * 0.62}"/>
    <line x1="${w * 0.5}" y1="20" x2="${w * 0.5}" y2="${h - 10}"/>
  </g>
  <text x="56" y="${h * 0.62 + 62}" font-family="Jost" font-size="23" letter-spacing="4" fill="rgba(244,236,216,.8)">HÉROES DE INDEPENDENCIA</text>
  <text x="${w * 0.5 + 38}" y="44" font-family="Jost" font-size="23" letter-spacing="4" fill="rgba(244,236,216,.8)">INDEPENDENCIA</text>
  <g transform="translate(${w * 0.5} ${h * 0.62})">
    <circle r="44" fill="#1A2954" stroke="#C9A24C" stroke-width="1.5"/>
    <path fill="#C9A24C" transform="scale(1.25)" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/>
  </g>
</svg>`;

const page = (w, h, seed, body) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>${css(w, h)}</style></head><body>${sky(w, h, Math.round((w * h) / 16000), seed)}<div class="frame"></div><div class="wrap">${body}</div></body></html>`;

const P = [1080, 1350], S = [1080, 1920];

const designs = {
  // ── FEED 4:5 ─────────────────────────────────────────────
  'post-01': page(...P, 7, `
    ${logo(0.8)}
    <div class="grow"></div>
    <div class="eyebrow">La Paz · Baja California Sur</div>
    <div class="big" style="font-size:176px;margin-top:34px">YA<br><span class="gold">ABRIMOS</span></div>
    <div style="height:44px"></div>${rule}<div style="height:36px"></div>
    <div class="it">Un pequeño planeta de vino<br>en el Centro de La Paz</div>
    <div class="grow"></div>
    <div class="info">${T.calle} ${T.esquina}<br><b>${T.dias} · ${T.horas}</b></div>`),

  'post-02': page(...P, 23, `
    ${logo(0.5)}
    <div style="height:50px"></div>
    <div class="eyebrow">Cómo llegar</div>
    <div class="big" style="font-size:92px;margin-top:26px">ENCUÉNTRANOS</div>
    <div style="height:30px"></div>
    ${corner(860, 330)}
    <div style="height:26px"></div>
    <div class="it" style="font-size:54px">${T.calle}<br>${T.esquina}</div>
    <div class="info" style="margin-top:14px">${T.colonia}</div>
    <div class="grow"></div>
    <div class="chip">${pin.replace('width="40" height="52"', 'width="26" height="34"')}<span>Búscanos en Google Maps: <b>${T.maps}</b></span></div>`),

  'post-03': page(...P, 41, `
    ${logo(0.5)}
    <div style="height:54px"></div>
    <div class="eyebrow">Te esperamos</div>
    <div class="big" style="font-size:118px;margin-top:26px"><span class="gold">HORARIOS</span></div>
    <div style="height:46px"></div>
    <div class="card">
      <div class="row"><span>${T.dias}</span><span>${T.horas}</span></div>
      <div class="row off"><span>Domingo</span><span>CERRADO</span></div>
    </div>
    <div style="height:44px"></div>${rule}<div style="height:34px"></div>
    <div class="it" style="font-size:46px">Pasa a conocernos, pregunta lo que quieras<br>y llévate la botella correcta.</div>
    <div class="grow"></div>
    <div class="info">${T.calle} ${T.esquina} · Centro<br><b>WhatsApp ${T.wa}</b></div>`),

  // ── STORIES 9:16 (zona central-baja libre para sticker de link/ubicación) ──
  'story-01': page(...S, 11, `
    <div style="height:150px"></div>
    ${logo(0.95)}
    <div style="height:150px"></div>
    <div class="eyebrow">La Paz · BCS</div>
    <div class="big" style="font-size:186px;margin-top:40px">YA<br><span class="gold">ABRIMOS</span></div>
    <div style="height:56px"></div>${rule}<div style="height:44px"></div>
    <div class="it" style="font-size:58px">Un pequeño planeta de vino<br>en el Centro de La Paz</div>
    <div class="grow"></div>
    <div class="info" style="font-size:34px">${T.calle} ${T.esquina}<br><b style="font-size:28px">${T.dias} · ${T.horas}</b></div>
    <div style="height:170px"></div>`),

  'story-02': page(...S, 29, `
    <div style="height:150px"></div>
    ${logo(0.55)}
    <div style="height:90px"></div>
    <div class="eyebrow">Cómo llegar</div>
    <div class="big" style="font-size:92px;margin-top:30px">ENCUÉNTRANOS</div>
    <div style="height:60px"></div>
    ${corner(860, 330)}
    <div style="height:50px"></div>
    <div class="it" style="font-size:60px">${T.calle}<br>${T.esquina}</div>
    <div class="info" style="margin-top:18px;font-size:34px">${T.colonia}</div>
    <div style="height:70px"></div>
    <div class="eyebrow" style="font-size:24px">Toca para abrir en Google Maps</div>
    <div style="margin-top:14px;color:#C9A24C;font-size:40px">▾</div>
    <div class="grow"></div>
    <div class="foot">${T.ig}</div>
    <div style="height:150px"></div>`),

  'story-03': page(...S, 53, `
    <div style="height:150px"></div>
    ${logo(0.55)}
    <div style="height:110px"></div>
    <div class="eyebrow">Te esperamos</div>
    <div class="big" style="font-size:124px;margin-top:30px"><span class="gold">HORARIOS</span></div>
    <div style="height:70px"></div>
    <div class="card">
      <div class="row"><span>${T.dias}</span><span>${T.horas}</span></div>
      <div class="row off"><span>Domingo</span><span>CERRADO</span></div>
    </div>
    <div style="height:70px"></div>${rule}<div style="height:50px"></div>
    <div class="it" style="font-size:54px">Pasa a conocernos<br>y llévate la botella correcta.</div>
    <div class="grow"></div>
    <div class="info" style="font-size:34px">${T.calle} ${T.esquina}<br><b style="font-size:28px">WhatsApp ${T.wa}</b></div>
    <div style="height:170px"></div>`),
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
