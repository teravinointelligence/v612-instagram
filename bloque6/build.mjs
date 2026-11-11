// Bloque 6 — La historia del nombre. Texto tomado de v612.mx/nosotros («La B se volvió V»).
// Uso: node bloque6/build.mjs → bloque6/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, TIENDA, lock, rule, page, render } from '../lib/estilo.mjs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');

// Lámina de carrusel: titular + párrafo + numeración
const lamina = (n, titular, texto, tam = 104) => page(P, '', `
    ${lock}
    <div style="height:84px"></div>
    <div class="eyebrow">La casa · El nombre</div>
    <div class="h" style="font-size:${tam}px;margin-top:30px">${titular}</div>
    <div style="height:54px"></div>${rule}<div style="height:48px"></div>
    <div class="p">${texto}</div>
    <div class="grow"></div>
    <div class="foot"><span>${TIENDA.ig}</span><b>${n} / 04</b></div>`);

const portada = (size, top, bottom, cue) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">La historia del nombre</div>
    <div class="h" style="font-size:${size === S ? 136 : 128}px;margin-top:40px">La <em>B</em><br>se volvió <em>V</em>.</div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">¿Por qué nos llamamos V612?</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>${cue}</b></div><div style="height:${bottom}px"></div>`);

const cita = page(P, 'mid', `
    ${lock}
    <div class="grow"></div>
    <div class="h" style="font-size:40px;color:#C9A24C;font-style:italic;font-weight:400">«</div>
    <div class="h" style="font-size:112px;margin-top:6px">Lo esencial<i>es invisible</i><i>a los ojos.</i></div>
    <div style="height:54px"></div>${rule}<div style="height:44px"></div>
    <div class="q">Antoine de Saint-Exupéry<br>El Principito, 1943</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><span>${TIENDA.direccion}</span></div>`);

await render({
  'nombre-01': [P, portada(P, 0, 0, 'Desliza →')],
  'nombre-02': [P, lamina('02', 'El Principito vivía<i>en B-612.</i>', 'Un asteroide que un astrónomo turco miró por su telescopio en 1909 y nadie más volvió a ver.')],
  'nombre-03': [P, lamina('03', 'Quisimos un planeta<i>parecido.</i>', 'Pequeño, habitable por pocos, nombrado con rigor por un número.', 92)],
  'nombre-04': [P, lamina('04', 'Cambiamos la B<i>por una V.</i>', 'De vino, de vid, de vista al mar.<br>Y el asteroide encontró inquilinos.')],
  'cita-esencial': [P, cita],
  'story-nombre': [S, portada(S, 130, 250, 'Nuevo post · La historia del nombre')],
}, OUT);
