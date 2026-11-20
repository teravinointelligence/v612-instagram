// Eventos fuera de la boutique (bazares, mercados, catas externas).
// Uso: node eventos/build.mjs → eventos/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, lock, rule, page, render } from '../lib/estilo.mjs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');

const evento = (size, { eyebrow, titular, texto, filas, pie }, top = 0, bottom = 0) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${size === S ? 124 : 112}px;margin-top:40px">${titular}</div>
    <div style="height:50px"></div>${rule}<div style="height:42px"></div>
    <div class="p">${texto}</div>
    <div style="height:56px"></div>
    <div class="tbl" style="text-align:left">${filas.map(([k, v]) => `<div class="tr"><span class="t">${k}</span><span class="v" style="color:#C9A24C;font-style:italic">${v}</span></div>`).join('')}</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><span>${pie}</span></div><div style="height:${bottom}px"></div>`);

// Xmas Market · Pueblito Marinero, Puerta Cortés — viernes 11 de diciembre de 2026, 5 a 9 pm
const filas = [['Viernes 11 de diciembre', '5 a 9 pm'], ['Pueblito Marinero', 'Puerta Cortés']];
const anuncio = {
  eyebrow: 'Bazar navideño · La Paz',
  titular: 'Nos vemos en el<i>Xmas Market.</i>',
  texto: 'Este viernes, V612 sale de la boutique<br>con vinos para regalar.',
  filas,
  pie: 'La Paz · Baja California Sur',
};
const hoy = {
  ...anuncio,
  eyebrow: 'Hoy · Bazar navideño',
  titular: 'Hoy, en el<i>Xmas Market.</i>',
  texto: 'Ven por tus vinos<br>para regalar estas fiestas.',
  pie: 'Toca para ver la ubicación ▾',
};

await render({
  'xmas-market': [P, evento(P, anuncio)],
  'story-xmas-market-hoy': [S, evento(S, hoy, 130, 250)],
}, OUT);
