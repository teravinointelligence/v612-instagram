// Efemérides del vino. Día del Beaujolais: tercer jueves de noviembre (19 nov 2026).
// Botella: «3e Fleuve» Fleurie La Levrattière 2020 — Daniel & Denise (Joseph Viola) × Trenel
// (M. Chapoutier). SKU FLEURIE del catálogo. Imagen y notas: ficha técnica oficial del productor
// («3_Fleuve_-_FT_La_Levrattiere.pdf», en el Drive de TERAVINO) → efemerides/fotos/FLEURIE-oficial.png.
// Uso: node efemerides/build.mjs → efemerides/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { P, S, TIENDA, lock, lockCrema, rule, page, pageCrema, render } from '../lib/estilo.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DIR, 'disenos');
const foto = `data:image/png;base64,${readFileSync(path.join(DIR, 'fotos/FLEURIE-oficial.png')).toString('base64')}`;
const pie = (izq, der) => `<div class="foot"><span>${izq}</span><b>${der}</b></div>`;

const portada = (size, top = 0, bottom = 0, cierre = 'Desliza →') => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">Tercer jueves de noviembre</div>
    <div class="h" style="font-size:${size === S ? 124 : 116}px;margin-top:40px">Hoy es día<i>del Beaujolais.</i></div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">Medio mundo brinda con Gamay.<br>Nosotros también.</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>${cierre}</b></div><div style="height:${bottom}px"></div>`);

const ficha = pageCrema(P, '', `
    ${lockCrema}
    <div style="height:40px"></div>
    <div class="eyebrow">Botella del día · Cru du Beaujolais</div>
    <div style="display:flex;gap:30px;align-items:center;flex:1;margin-top:10px">
      <img src="${foto}" style="height:800px;margin:0 20px 0 6px;filter:drop-shadow(0 18px 22px rgba(26,41,84,.22))">
      <div style="flex:1">
        <div class="h" style="font-size:66px;white-space:nowrap">Fleurie<i>La Levrattière</i></div>
        <div class="q" style="margin-top:16px;font-size:30px">3e Fleuve · 2020<br>Daniel &amp; Denise × Trenel</div>
        <div style="height:28px"></div>${rule}<div style="height:26px"></div>
        <div class="p" style="font-size:33px">Gamay de suelos de granito. Cereza, mora, iris y peonía; un toque ahumado y taninos finos.</div>
        <div style="height:30px"></div>
        <div class="eyebrow" style="font-size:18px">Maridaje</div>
        <div class="q" style="font-size:30px;margin-top:10px">Joseph Viola lo propone con fricasé de pollo a la lionesa. Sírvelo a 15 °C.</div>
      </div>
    </div>
    ${pie('En boutique · pocas botellas', '02 / 03')}`);

const tabla = page(P, '', `
    ${lock}
    <div style="height:64px"></div>
    <div class="eyebrow">Cuaderno de cata · Beaujolais</div>
    <div class="h" style="font-size:108px;margin-top:26px">Nouveau<i>no es cru.</i></div>
    <div class="grow"></div>
    <div class="tbl">
      <div class="tr" style="align-items:flex-start"><span class="k" style="padding-top:14px">Nouveau</span><span class="v" style="font-size:38px">El vino del año: sale semanas<br>después de la vendimia</span></div>
      <div class="tr" style="align-items:flex-start"><span class="k" style="padding-top:14px">Cru</span><span class="v" style="font-size:38px">Diez pueblos con nombre propio<br>y vinos con más fondo</span></div>
      <div class="tr" style="align-items:flex-start"><span class="k" style="padding-top:14px">La uva</span><span class="v" style="font-size:38px">Gamay, en los dos casos</span></div>
    </div>
    <div class="grow"></div>
    ${pie(TIENDA.ig, '03 / 03')}`);

// Story del día anterior (mié 18 nov): aviso. El hueco bajo el texto es para el sticker de cuenta regresiva.
const manana = page(S, 'mid', `
    <div style="height:130px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">Jueves 19 de noviembre</div>
    <div class="h" style="font-size:132px;margin-top:40px">Mañana es día<i>del Beaujolais.</i></div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">Tenemos un cru de Fleurie<br>esperando la ocasión.</div>
    <div style="height:300px"></div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>Mañana 7:00 · en el feed</b></div><div style="height:250px"></div>`);

await render({
  'beaujolais-01': [P, portada(P)],
  'beaujolais-02': [P, ficha],
  'beaujolais-03': [P, tabla],
  'story-beaujolais': [S, portada(S, 130, 250, 'Nuevo post · Día del Beaujolais')],
  'story-beaujolais-manana': [S, manana],
}, OUT);
