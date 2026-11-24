// Promociones puntuales en tienda: «El vino del día» (semana del 23 al 28 de noviembre de 2026).
// Mecánica: cata en la boutique y 20% de descuento solo ese día. Las piezas no llevan precios.
// Botellas en promos/fotos/. Regla: la imagen debe mostrar el vino que hay en tienda. Desde el 24 nov 2026 (Sabrina):
// no importa que la añada de la foto no coincida; se prefiere un packshot limpio a la foto de catálogo.
//   · Oficial de la bodega cuando coincide: Habla de ti… Rosé (ficha de bodegashabla.com) y Lechuza Merlot 2021
//     (shop.vinoslechuza.com).
//   · Foto propia del catálogo V612 (Supabase v612 → product-images/<SKU>.jpg), con el fondo recortado, cuando la
//     oficial no coincide o no existe: Lechuza Chardonnay Roble 2021 y Lechuza Viognier (edición limitada 2022).
//   · César Márquez Parajes (25 nov): el productor no tiene sitio propio; packshot 2023 de un minorista
//     (systembolaget.se/93578), misma etiqueta que en tienda.
//   · Excepción (24 nov): Les Jamelles Sauvignon Blanc usa el packshot oficial de boutique.les-jamelles.com,
//     con la etiqueta nueva, aunque en tienda hay la etiqueta anterior (2024). Ese día fue solo cata, sin 20%.
// Fuentes de cada vino y captions: promos/vino-del-dia-*.json.
// Uso: node promos/build.mjs → promos/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { P, S, TIENDA, lockCrema, rule, pageCrema, render } from '../lib/estilo.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DIR, 'disenos');
const foto = (f) => `data:image/${f.endsWith('.jpg') ? 'jpeg' : 'png'};base64,${readFileSync(path.join(DIR, 'fotos', f)).toString('base64')}`;
const sombra = 'filter:drop-shadow(0 18px 22px rgba(26,41,84,.22))';

// alto/altoS: alto de la botella en feed y story. Las fotos con fondo blanco (opaca: true) se funden con la
// ficha crema por «multiply» y no llevan sombra. tam/tamS: tamaño del titular cuando el nombre es largo.
// sinDescuento: el día solo lleva cata en la boutique, sin el 20%.
const VINOS = [
  { archivo: 'vino-del-dia-lechuza', fecha: 'Lunes 23 de noviembre', foto: 'LECHUZA-chardonnay-roble-2021.png',
    nombre: 'Lechuza', cursiva: 'Chardonnay Roble.', origen: 'Valle de Guadalupe · Baja California', corto: 'Valle de Guadalupe',
    notas: 'Durazno deshidratado, vainilla y pan tostado. En boca, nuez y almendra, con acidez alta y buen cuerpo.' },
  { archivo: 'vino-del-dia-2026-11-24', fecha: 'Martes 24 de noviembre', foto: 'LESJAMELLES-sauvignon-blanc-oficial.png',
    nombre: 'Les Jamelles', cursiva: 'Sauvignon Blanc.', origen: 'Pays d’Oc · Sur de Francia', corto: 'Sur de Francia', tam: 66, tamS: 68, alto: 740, altoS: 800, sinDescuento: true,
    notas: 'Maracuyá, toronja rosa y madreselva. En boca, muy fresco y mineral, con buena acidez y un final refrescante.' },
  { archivo: 'vino-del-dia-2026-11-25', fecha: 'Miércoles 25 de noviembre', foto: 'PARAJES-cesar-marquez-2023-packshot.png',
    nombre: 'César Márquez', cursiva: 'Parajes.', origen: 'Mencía · D.O. Bierzo · España', corto: 'Mencía del Bierzo', sinDescuento: true, tam: 68, tamS: 66, fsFecha: 19,
    notas: 'Flores frescas, cereza y hierbas secas. En boca, jugoso y redondo, de taninos muy finos y final largo y fresco.' },
  { archivo: 'vino-del-dia-2026-11-26', fecha: 'Jueves 26 de noviembre', foto: 'HABLA-de-ti-rose-oficial.jpg', opaca: true, alto: 700, altoS: 700,
    nombre: 'Habla de ti…', cursiva: 'Rosé.', origen: 'Rosado seco · Extremadura', corto: 'Extremadura · España', tam: 62, tamS: 66, fsNotas: 29,
    notas: 'Grosella, lavanda, amapola y violeta. En boca, sedoso y fresco, con buena persistencia.' },
  { archivo: 'vino-del-dia-2026-11-27', fecha: 'Viernes 27 de noviembre', foto: 'LECHUZA-viognier-2022.png',
    nombre: 'Lechuza', cursiva: 'Viognier.', origen: 'Valle de Guadalupe · Edición limitada', corto: 'Valle de Guadalupe',
    notas: 'Nectarina, chabacano y vainilla. En boca, pan tostado, mandarina y manzana verde. Un año en barrica.' },
  { archivo: 'vino-del-dia-2026-11-28', fecha: 'Sábado 28 de noviembre', foto: 'LECHUZA-merlot-2021-oficial.png',
    nombre: 'Lechuza', cursiva: 'Merlot.', origen: 'Valle de Guadalupe · Baja California', corto: 'Valle de Guadalupe',
    notas: 'Frambuesa y cereza, con toques florales y especiados. En boca, taninos suaves y un final fresco.' },
];

const img = (v, alto, extra = '') =>
  `<img src="${foto(v.foto)}" ${v.opaca ? 'class="botella"' : ''} style="height:${alto}px;${v.opaca ? '' : sombra};${extra}">`;

// Bloque de la oferta: dos filas con línea fina (la guía pide datos en filas, no en párrafos)
const oferta = (fs = 34, sin = false) => `
  <div class="tbl">
    <div class="tr" style="padding:20px 0"><span class="k">${sin ? 'Solo hoy' : 'Hoy'}</span><span class="v" style="font-size:${sin ? fs + 8 : fs}px;${sin ? 'font-style:italic;color:#A8843A;white-space:nowrap' : ''}">Cata en la boutique</span></div>
    ${sin ? '' : `<div class="tr" style="padding:20px 0"><span class="k">Solo hoy</span><span class="v" style="font-size:${fs + 10}px;font-style:italic;color:#A8843A;white-space:nowrap">20% de descuento</span></div>`}
  </div>`;

const post = (v) => pageCrema(P, '', `
    ${lockCrema}
    <div style="height:36px"></div>
    <div class="eyebrow" style="white-space:nowrap${v.fsFecha ? `;font-size:${v.fsFecha}px;letter-spacing:.3em` : ''}">El vino del día · ${v.fecha}</div>
    <div style="display:flex;gap:${v.opaca ? 26 : 40}px;align-items:center;flex:1;margin-top:6px">
      ${img(v, v.alto ?? 790, v.opaca ? 'margin-left:-52px' : 'margin-left:4px')}
      <div style="flex:1">
        <div class="h" style="font-size:${v.tam ?? 72}px;white-space:nowrap">${v.nombre}<i>${v.cursiva}</i></div>
        <div class="q" style="margin-top:14px;font-size:${v.opaca ? 27 : 29}px">${v.origen}</div>
        <div style="height:26px"></div>${rule}<div style="height:24px"></div>
        <div class="p" style="font-size:${v.fsNotas ?? 31}px">${v.notas}</div>
        <div style="height:34px"></div>
        ${oferta(v.opaca ? 30 : 34, v.sinDescuento)}
      </div>
    </div>
    <div class="foot"><span>Hoy de 10:00 a 20:00</span><b>Centro, La Paz</b></div>`);

// Story: botella al centro y hueco crema abajo para el sticker de ubicación o link.
const story = (v) => pageCrema(S, 'mid', `
    <div style="height:110px"></div>${lockCrema}
    <div style="height:46px"></div>
    <div class="eyebrow">El vino del día · Solo hoy</div>
    <div style="display:flex;gap:${v.opaca ? 24 : 44}px;align-items:center;margin-top:34px;text-align:left">
      ${img(v, v.altoS ?? 840)}
      <div style="width:${v.opaca ? 400 : 420}px">
        <div class="h" style="font-size:${v.tamS ?? 80}px">${v.nombre}<i>${v.cursiva}</i></div>
        <div class="q" style="margin-top:16px;font-size:30px">${v.corto}</div>
        <div style="height:30px"></div>${rule}<div style="height:30px"></div>
        <div class="p" style="font-size:36px">Pásate hoy a probarlo.</div>
        ${v.sinDescuento ? `<div class="h" style="font-size:64px;margin-top:22px"><em>Cata</em></div>
        <div class="p" style="font-size:36px;margin-top:2px">en la boutique,<br>solo hoy.</div>` : `<div class="h" style="font-size:96px;margin-top:22px"><em>20%</em></div>
        <div class="p" style="font-size:36px;margin-top:-4px">de descuento,<br>solo hoy.</div>`}
      </div>
    </div>
    <div class="grow"></div>
    <div class="foot" style="flex-direction:column;align-items:center;gap:6px"><b>Hoy hasta las 20:00</b><span>${TIENDA.direccion}</span></div><div style="height:250px"></div>`);

// node promos/build.mjs 11-24 → solo las piezas cuyo archivo contiene «11-24»
const filtro = process.argv[2];
const designs = {};
for (const v of VINOS.filter((x) => !filtro || x.archivo.includes(filtro))) {
  designs[v.archivo] = [P, post(v)];
  designs[`story-${v.archivo}`] = [S, story(v)];
}
await render(designs, OUT);
