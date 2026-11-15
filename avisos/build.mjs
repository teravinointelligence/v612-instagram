// Avisos puntuales de la tienda (cierres, horarios especiales).
// Uso: node avisos/build.mjs → avisos/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, TIENDA, lock, rule, page, render } from '../lib/estilo.mjs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');

const aviso = (size, { eyebrow, titular, texto, filas }, top = 0, bottom = 0) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${size === S ? 124 : 116}px;margin-top:40px">${titular}</div>
    <div style="height:50px"></div>${rule}<div style="height:42px"></div>
    <div class="p">${texto}</div>
    <div style="height:56px"></div>
    <div class="tbl" style="text-align:left">${filas.map(([k, v]) => `<div class="tr"><span class="t">${k}</span><span class="v" style="color:#C9A24C;font-style:italic">${v}</span></div>`).join('')}</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><span>${TIENDA.direccion}</span></div><div style="height:${bottom}px"></div>`);

// Lunes 16 de noviembre de 2026 — día festivo
const festivo = {
  eyebrow: 'Aviso · Día festivo',
  titular: 'Este lunes<i>descansamos.</i>',
  texto: 'Por día festivo, la boutique<br>permanecerá cerrada.',
  filas: [['Lunes 16 de noviembre', 'Cerrado'], ['Martes 17 de noviembre', '10:00 — 20:00']],
};

await render({
  'festivo-nov16': [P, aviso(P, festivo)],
  'story-festivo-nov16': [S, aviso(S, festivo, 130, 250)],
}, OUT);
