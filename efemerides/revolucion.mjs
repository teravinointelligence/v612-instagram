// Efeméride: aniversario de la Revolución Mexicana (20 de noviembre).
// Uso: node efemerides/revolucion.mjs → efemerides/disenos/revolucion-*.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, TIENDA, lock, rule, page, render } from '../lib/estilo.mjs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');

const pieza = (size, cierre, top = 0, bottom = 0) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">20 de noviembre · 1910 — 2026</div>
    <div class="h" style="font-size:${size === S ? 128 : 116}px;margin-top:40px">116 años de<i>la Revolución.</i></div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">Hoy levantamos la copa<br>por el México que se reinventa.</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>${cierre}</b></div><div style="height:${bottom}px"></div>`);

await render({
  'revolucion-2026': [P, pieza(P, TIENDA.direccion)],
  'story-revolucion-2026': [S, pieza(S, 'Hoy abrimos · 10:00 — 20:00', 130, 250)],
}, OUT);
