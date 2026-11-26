// Efemérides del vino. Thanksgiving: cuarto jueves de noviembre (26 nov 2026). Iba el miércoles 25, pero no se
// programó; sale el mismo jueves 26, con el copy en «hoy» (se compra el vino de la cena de esta noche). Ángulo: el pavo también llega a la mesa de Nochebuena, así que la guía
// sirve para la comunidad estadounidense de La Paz esta semana y para todos en diciembre.
// Botellas con existencia en V612 al 22 nov (Supabase v612: products + inventory_levels, almacén v612):
// Bogle Pinot Noir 6 · Lechuza Chardonnay Roble 49 · Hampton Water Rosé Magnum 9.
// Uso: node efemerides/thanksgiving.mjs → efemerides/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, lock, rule, page, render } from '../lib/estilo.mjs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');
const pie = (izq, der) => `<div class="foot"><span>${izq}</span><b>${der}</b></div>`;

const portada = (size, cierre, top = 0, bottom = 0, hueco = 0) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">Hoy es Thanksgiving</div>
    <div class="h" style="font-size:${size === S ? 132 : 124}px;margin-top:40px">Con el pavo,<i>¿qué vino?</i></div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">Tres botellas para la cena de hoy…<br>y para la de Nochebuena.</div>
    <div style="height:${hueco}px"></div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>${cierre}</b></div><div style="height:${bottom}px"></div>`);

const fila = (k, porque, botella) => `
      <div class="tr" style="align-items:flex-start"><span class="k" style="padding-top:14px">${k}</span>
        <span class="v" style="font-size:38px">${porque}<br><em style="color:#C9A24C;font-size:34px">${botella}</em></span></div>`;

const guia = page(P, '', `
    ${lock}
    <div style="height:64px"></div>
    <div class="eyebrow">Cuaderno de cata · Pavo</div>
    <div class="h" style="font-size:104px;margin-top:26px">Tres que<i>no fallan.</i></div>
    <div class="grow"></div>
    <div class="tbl">
      ${fila('Pinot Noir', 'Fruta roja, taninos suaves', 'Bogle · California')}
      ${fila('Chardonnay', 'Con barrica, va con el gravy', 'Lechuza Roble · Valle de Guadalupe')}
      ${fila('Rosado', 'Para la mesa grande', 'Hampton Water Magnum · Languedoc')}
    </div>
    <div class="grow"></div>
    ${pie('En boutique · Centro, La Paz', '02 / 02')}`);

await render({
  'pavo-01': [P, portada(P, 'Desliza →')],
  'pavo-02': [P, guia],
  'story-pavo': [S, portada(S, 'Hoy abrimos de 10:00 a 20:00', 130, 250, 220)],
}, OUT);
