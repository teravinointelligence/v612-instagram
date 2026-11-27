// Promoción de un día: Black Friday, viernes 27 de noviembre de 2026.
// Mecánica (Sabrina, 27 nov 2026): 10% de descuento en todos los vinos mexicanos, solo hoy, en la boutique.
// Pieza tipográfica en navy (sin botella: la promo es de categoría, no de una etiqueta). Datos en filas, según GUIA-ESTILO.md.
// Bodegas y regiones: Supabase v612 (products + inventory_levels, almacén v612), consultado el 27 nov 2026.
// Uso: node promos/black-friday.mjs → promos/disenos/black-friday-2026-11-27.jpg y story-black-friday-2026-11-27.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, TIENDA, lock, rule, page, render } from '../lib/estilo.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DIR, 'disenos');

const FECHA = 'Viernes 27 de noviembre';
const REGIONES = 'Valle de Guadalupe · Querétaro<br>Guanajuato · Zacatecas';

const descuento = (num, txt) => `
  <div style="display:flex;align-items:baseline;gap:34px">
    <div class="h" style="font-size:${num}px;line-height:.9"><em>10%</em></div>
    <div class="p" style="font-size:${txt}px;line-height:1.22">de descuento<br>en todos los<br>vinos mexicanos.</div>
  </div>`;

const post = page(P, '', `
    ${lock}
    <div style="height:44px"></div>
    <div class="eyebrow">Black Friday · ${FECHA}</div>
    <div class="h" style="font-size:92px;margin-top:20px">Hoy, el vino<i>es mexicano.</i></div>
    <div style="height:30px"></div>${rule}<div style="height:34px"></div>
    ${descuento(150, 38)}
    <div class="grow"></div>
    <div class="tbl">
      <div class="tr" style="padding:20px 0"><span class="k">Vigencia</span><span class="v" style="font-size:34px">Solo hoy, hasta las 20:00</span></div>
      <div class="tr" style="padding:20px 0"><span class="k">Dónde</span><span class="v" style="font-size:34px">En la boutique</span></div>
    </div>
    <div style="height:22px"></div>
    <div class="q" style="font-size:26px">${REGIONES}</div>
    <div style="height:36px"></div>
    <div class="foot"><span>Hoy de 10:00 a 20:00</span><b>Centro, La Paz</b></div>`);

// Story: hueco navy abajo para el sticker de ubicación o link.
const story = page(S, 'mid', `
    <div style="height:120px"></div>${lock}
    <div style="height:56px"></div>
    <div class="eyebrow">Black Friday · Solo hoy</div>
    <div class="h" style="font-size:100px;margin-top:26px">Hoy, el vino<i>es mexicano.</i></div>
    <div style="height:40px"></div>${rule}<div style="height:56px"></div>
    <div class="h" style="font-size:230px;line-height:.9"><em>10%</em></div>
    <div class="p" style="font-size:48px;margin-top:18px">de descuento en todos<br>los vinos mexicanos.</div>
    <div style="height:48px"></div>
    <div class="q" style="font-size:30px">${REGIONES}</div>
    <div class="grow"></div>
    <div class="foot" style="flex-direction:column;align-items:center;gap:6px"><b>Hoy hasta las 20:00 · en la boutique</b><span>${TIENDA.direccion}</span></div>
    <div style="height:250px"></div>`);

await render({
  'black-friday-2026-11-27': [P, post],
  'story-black-friday-2026-11-27': [S, story],
}, OUT);
