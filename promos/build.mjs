// Promociones puntuales en tienda: «El vino del día».
// Lunes 23 nov 2026 — Lechuza Chardonnay Roble (SKU 554LECH): cata en boutique y 20% de descuento solo hoy.
// Botella: foto propia del catálogo V612 (Supabase v612 → storage product-images/554LECH.jpg), añada 2021,
// la que hay en tienda. Fondo recortado con rembg → promos/fotos/LECHUZA-chardonnay-roble-2021.png.
// Notas de cata: descripción oficial del mismo producto en la tienda de la bodega.
// Uso: node promos/build.mjs → promos/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { P, S, TIENDA, lockCrema, rule, pageCrema, render } from '../lib/estilo.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DIR, 'disenos');
const foto = `data:image/png;base64,${readFileSync(path.join(DIR, 'fotos/LECHUZA-chardonnay-roble-2021.png')).toString('base64')}`;
const sombra = 'filter:drop-shadow(0 18px 22px rgba(26,41,84,.22))';

const VINO = {
  fecha: 'Lunes 23 de noviembre',
  nombre: 'Lechuza',
  cursiva: 'Chardonnay Roble.',
  origen: 'Valle de Guadalupe · Baja California',
  notas: 'Durazno deshidratado, vainilla y pan tostado. En boca, nuez y almendra, con acidez alta y buen cuerpo.',
};

// Bloque de la oferta: dos filas con línea fina (la guía pide datos en filas, no en párrafos)
const oferta = (fs = 34) => `
  <div class="tbl">
    <div class="tr" style="padding:20px 0"><span class="k">Hoy</span><span class="v" style="font-size:${fs}px">Cata en la boutique</span></div>
    <div class="tr" style="padding:20px 0"><span class="k">Solo hoy</span><span class="v" style="font-size:${fs + 10}px;font-style:italic;color:#A8843A">20% de descuento</span></div>
  </div>`;

const post = pageCrema(P, '', `
    ${lockCrema}
    <div style="height:36px"></div>
    <div class="eyebrow">El vino del día · ${VINO.fecha}</div>
    <div style="display:flex;gap:40px;align-items:center;flex:1;margin-top:6px">
      <img src="${foto}" style="height:790px;margin-left:4px;${sombra}">
      <div style="flex:1">
        <div class="h" style="font-size:72px">${VINO.nombre}<i>${VINO.cursiva}</i></div>
        <div class="q" style="margin-top:14px;font-size:29px">${VINO.origen}</div>
        <div style="height:26px"></div>${rule}<div style="height:24px"></div>
        <div class="p" style="font-size:31px">${VINO.notas}</div>
        <div style="height:34px"></div>
        ${oferta()}
      </div>
    </div>
    <div class="foot"><span>Hoy de 10:00 a 20:00</span><b>Centro, La Paz</b></div>`);

// Story: botella al centro y hueco crema abajo para el sticker de ubicación o link.
const story = pageCrema(S, 'mid', `
    <div style="height:110px"></div>${lockCrema}
    <div style="height:46px"></div>
    <div class="eyebrow">El vino del día · Solo hoy</div>
    <div style="display:flex;gap:44px;align-items:center;margin-top:34px;text-align:left">
      <img src="${foto}" style="height:840px;${sombra}">
      <div style="width:420px">
        <div class="h" style="font-size:80px">${VINO.nombre}<i>${VINO.cursiva}</i></div>
        <div class="q" style="margin-top:16px;font-size:30px">Valle de Guadalupe</div>
        <div style="height:30px"></div>${rule}<div style="height:30px"></div>
        <div class="p" style="font-size:36px">Pásate hoy a probarlo.</div>
        <div class="h" style="font-size:96px;margin-top:22px"><em>20%</em></div>
        <div class="p" style="font-size:36px;margin-top:-4px">de descuento,<br>solo hoy.</div>
      </div>
    </div>
    <div class="grow"></div>
    <div class="foot" style="flex-direction:column;align-items:center;gap:6px"><b>Hoy hasta las 20:00</b><span>${TIENDA.direccion}</span></div><div style="height:250px"></div>`);

await render({
  'vino-del-dia-lechuza': [P, post],
  'story-vino-del-dia-lechuza': [S, story],
}, OUT);
