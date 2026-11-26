// Bloque 7 · Story de seguimiento del post «¿Qué vino regalar?» (jueves 26 nov 2026).
// Pone una botella real del portafolio en cada caso de la guía del feed.
// Botellas con existencia en V612 (Supabase v612: products + inventory_levels, almacén v612), consultado el 26 nov 2026.
// Fotos: catálogo V612 (storage product-images/<SKU>.jpg) con el fondo recortado (rembg, isnet-general-use).
// Las fotos del catálogo llegan cortadas arriba; el cuello se funde con el crema para que todas se lean igual.
// Uso: node bloque7/story-guia.mjs → bloque7/disenos/story-guia-regalo.jpg
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { S, TIENDA, lockCrema, rule, pageCrema, render } from '../lib/estilo.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const img = (f) => `data:image/png;base64,${readFileSync(path.join(DIR, 'fotos', f)).toString('base64')}`;

const BOTELLAS = [
  { caso: 'Intercambio', foto: 'YANCOTERHO-cotes-du-rhone.png', nombre: 'Côtes du Rhône', casa: 'Alléno & Chapoutier' },
  { caso: 'Anfitriones', foto: '41AYCH-ayala-brut-majeur.png', nombre: 'Ayala Brut Majeur', casa: 'Champagne' },
  { caso: 'Cliente o jefe', foto: '153LASSEG-cadrans-lassegue.png', nombre: 'Les Cadrans de Lassègue', casa: 'Saint-Émilion' },
  { caso: 'Si no sabes', foto: '202OODROS-roseblood.png', nombre: 'Roseblood', casa: 'Rosado de Provence' },
];

// Sin drop-shadow: con la máscara, Chromium la pinta como un recuadro gris alrededor de cada botella.
// Todas a la misma altura y alineadas abajo; el tercio superior se desvanece (máscara) para igualar los cuellos cortados.
const fade = '-webkit-mask-image:linear-gradient(to bottom,transparent 0,#000 150px);mask-image:linear-gradient(to bottom,transparent 0,#000 150px)';
const col = (b) => `
  <div style="width:192px;display:flex;flex-direction:column;align-items:center;text-align:center">
    <div style="height:520px;width:100%;display:flex;align-items:flex-end;justify-content:center;${fade}">
      <img src="${img(b.foto)}" style="height:560px;max-width:186px;object-fit:contain">
    </div>
    <div class="eyebrow" style="font-size:16px;letter-spacing:.24em;margin-top:30px">${b.caso}</div>
    <div class="h" style="font-size:33px;line-height:1.08;margin-top:12px">${b.nombre}</div>
    <div class="q" style="font-size:23px;margin-top:8px;line-height:1.2">${b.casa}</div>
  </div>`;

const story = pageCrema(S, 'mid', `
    <div style="height:70px"></div>${lockCrema}
    <div style="height:36px"></div>
    <div class="eyebrow">Guía de regalo · Posadas</div>
    <div class="h" style="font-size:96px;margin-top:22px">¿Qué vino<i>regalar?</i></div>
    <div style="height:30px"></div>${rule}
    <div style="display:flex;justify-content:space-between;width:100%;margin-top:34px">
      ${BOTELLAS.map(col).join('')}
    </div>
    <div class="grow" style="min-height:60px"></div>
    <div class="p" style="font-size:36px">Pregúntanos en la boutique<br>y la envolvemos para regalo.</div>
    <!-- hueco crema para el sticker de link a WhatsApp -->
    <div style="height:150px"></div>
    <div class="foot" style="flex-direction:column;align-items:center;gap:4px"><b>${TIENDA.horario}</b><span>${TIENDA.direccion}</span></div>
    <div style="height:150px"></div>`);

await render({ 'story-guia-regalo': [S, story] }, path.join(DIR, 'disenos'));
