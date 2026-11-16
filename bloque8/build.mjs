// Bloque 8 — Contando historias: Gómez Cruzado (Haro, Rioja).
// Fuentes: fichas V612 de cada vino (Drive: Ficha_V612_Gomez_Cruzado_*.pdf), gomezcruzado.com
// (historia y páginas de producto) y el folleto «Gómez Cruzado y sus vinos».
// Imágenes: packshots oficiales de gomezcruzado.com → bloque8/fotos/*.png.
// Uso: node bloque8/build.mjs → bloque8/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { P, S, TIENDA, lock, lockCrema, rule, page, pageCrema, render } from '../lib/estilo.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(DIR, 'disenos');
const img = (n) => `data:image/png;base64,${readFileSync(path.join(DIR, `fotos/${n}.png`)).toString('base64')}`;
const pie = (izq, der) => `<div class="foot"><span>${izq}</span><b>${der}</b></div>`;
const SERIE = 'Contando historias · Gómez Cruzado';

const portada = (size, { eyebrow, titular, texto, cierre }, top = 0, bottom = 0) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${size === S ? 132 : 124}px;margin-top:40px">${titular}</div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">${texto}</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>${cierre}</b></div><div style="height:${bottom}px"></div>`);

const lamina = (eyebrow, titular, texto, pieHtml, tam = 96) => page(P, '', `
    ${lock}
    <div style="height:84px"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${tam}px;margin-top:30px">${titular}</div>
    <div style="height:50px"></div>${rule}<div style="height:44px"></div>
    <div class="p" style="font-size:42px">${texto}</div>
    <div class="grow"></div>
    ${pieHtml}`);

const tabla = (eyebrow, titular, filas, pieHtml, tam = 92, fv = 38) => page(P, '', `
    ${lock}
    <div style="height:64px"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${tam}px;margin-top:26px">${titular}</div>
    <div class="grow"></div>
    <div class="tbl">${filas.map(([k, v]) => `<div class="tr" style="align-items:flex-start;padding:24px 0"><span class="k" style="padding-top:12px">${k}</span><span class="v" style="font-size:${fv}px">${v}</span></div>`).join('')}</div>
    <div class="grow"></div>
    ${pieHtml}`);

// Ficha crema con botella oficial
const ficha = ({ foto, nombre, cursiva, sub, texto, maridaje, pieIzq, n }) => pageCrema(P, '', `
    ${lockCrema}
    <div style="height:40px"></div>
    <div class="eyebrow">${SERIE}</div>
    <div style="display:flex;gap:44px;align-items:center;flex:1;margin-top:6px">
      <img src="${img(foto)}" style="height:740px;margin-left:-6px;filter:drop-shadow(0 18px 22px rgba(26,41,84,.22))">
      <div style="flex:1">
        <div class="h" style="font-size:70px">${nombre}<i>${cursiva}</i></div>
        <div class="q" style="margin-top:14px;font-size:30px">${sub}</div>
        <div style="height:26px"></div>${rule}<div style="height:24px"></div>
        <div class="p" style="font-size:32px">${texto}</div>
        <div style="height:26px"></div>
        <div class="eyebrow" style="font-size:18px">Maridaje</div>
        <div class="q" style="font-size:29px;margin-top:10px">${maridaje}</div>
      </div>
    </div>
    ${pie(pieIzq, n)}`);

await render({
  // 1 · La bodega
  'gc-bodega-01': [P, portada(P, { eyebrow: SERIE, titular: 'Haro,<i>1886.</i>', texto: 'La casa más pequeña<br>del Barrio de la Estación.', cierre: 'Desliza →' })],
  'gc-bodega-02': [P, lamina('La bodega · Historia', 'Nació junto<i>al ferrocarril.</i>',
    'Ángel Gómez de Arteche la fundó en 1886 en el Barrio de la Estación de Haro. En 1916 la compraron Agustín y Jesús Gómez Cruzado, que le dieron su nombre. Hoy la lleva la familia Baños, originaria de Badarán.',
    pie(TIENDA.ig, '02 / 03'), 92)],
  'gc-bodega-03': [P, tabla('La bodega · Tres botellas', 'Tres vinos,<i>tres Riojas.</i>', [
    ['Viña Dorana', 'El Reserva del Alto Najerilla'],
    ['Pancrudo', 'Garnacha de Badarán, a 650 m'],
    ['Honorable', 'El gran vino de la Sonsierra'],
  ], pie('Los contamos esta semana', '03 / 03'), 96, 40)],
  'story-gc': [S, portada(S, { eyebrow: SERIE, titular: 'Haro,<i>1886.</i>', texto: 'La casa más pequeña<br>del Barrio de la Estación.', cierre: 'Nuevo post · Gómez Cruzado' }, 130, 250)],

  // 2 · Viña Dorana
  'gc-dorana-01': [P, ficha({ foto: 'dorana', nombre: 'Viña Dorana', cursiva: 'Reserva', sub: 'DOCa Rioja · Alto Najerilla',
    texto: 'Tempranillo y Garnacha de viñas viejas a más de 600 m, sobre arcillas rojas. Dos años en barrica francesa y uno más en botella.',
    maridaje: 'Cordero al horno, rib eye a la parrilla, birria tatemada.', pieIzq: 'En boutique', n: '01 / 02' })],
  'gc-dorana-02': [P, tabla('Viña Dorana · La ficha', 'El clásico,<i>con frescura de altura.</i>', [
    ['Uvas', '60% Tempranillo · 40% Garnacha'],
    ['Origen', 'Cordovín, Badarán y Cárdenas<br>600 a 710 m'],
    ['Suelo', 'Arcillo-ferroso'],
    ['Crianza', '24 meses en roble francés<br>+ 12 en botella'],
    ['Servicio', '16–18 °C'],
  ], pie(TIENDA.ig, '02 / 02'), 80, 34)],

  // 3 · Pancrudo
  'gc-pancrudo-01': [P, ficha({ foto: 'pancrudo', nombre: 'Pancrudo', cursiva: 'Selección Terroir', sub: 'DOCa Rioja · Badarán',
    texto: 'Garnacha de viñas viejas en vaso, cara norte, a 650 m. Frambuesa silvestre, flores y un fondo mineral y salino.',
    maridaje: 'Tostadas de atún, pescado zarandeado, tacos de lechón.', pieIzq: 'Bajo pedido · WhatsApp ' + TIENDA.whatsapp, n: '01 / 02' })],
  'gc-pancrudo-02': [P, tabla('Pancrudo · La ficha', 'La Garnacha<i>del límite.</i>', [
    ['Uva', '100% Garnacha'],
    ['Origen', 'Badarán, Alto Najerilla<br>650 m, orientación norte'],
    ['Suelo', 'Arcillo-ferroso rojizo, en ladera'],
    ['Crianza', '12 meses: roble francés<br>y huevo de hormigón'],
    ['Servicio', '15–17 °C · copa Borgoña'],
  ], pie(TIENDA.ig, '02 / 02'), 92, 34)],

  // 4 · Honorable
  'gc-honorable-01': [P, ficha({ foto: 'honorable', nombre: 'Honorable', cursiva: 'El gran vino', sub: 'DOCa Rioja · Sonsierra',
    texto: 'Tempranillo de viñas de más de 50 años, de Lanciego a Labastida. Cereza negra, zarzamora y cuero; taninos firmes y final largo.',
    maridaje: 'Cordero asado, chuletón madurado, mole negro con pato.', pieIzq: 'En boutique', n: '01 / 02' })],
  'gc-honorable-02': [P, tabla('Honorable · La ficha', 'Un pueblo<i>por depósito.</i>', [
    ['Uvas', 'Tempranillo, con Garnacha<br>y Graciano'],
    ['Origen', 'Sierra Cantabria<br>500 a 600 m'],
    ['Suelo', 'Arcillo-calcáreo sobre caliza'],
    ['Crianza', 'Unos 18 meses: 80% roble<br>francés, 20% americano'],
    ['Servicio', '16–18 °C · decantar'],
  ], pie(TIENDA.ig, '02 / 02'), 92, 34)],
}, OUT);
