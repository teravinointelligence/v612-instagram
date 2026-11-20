// Bloque 7 — Regala vino: posadas y regalos corporativos.
// Datos de servicio tomados de v612.mx/contacto: regalos y canastas con tarjeta escrita a mano
// sin costo; regalos corporativos y mayoreo por correo (hola@v612.mx); pedidos para recoger.
// Uso: node bloque7/build.mjs → bloque7/disenos/*.jpg
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { P, S, TIENDA, lock, rule, page, render } from '../lib/estilo.mjs';

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'disenos');
const pie = (izq, der) => `<div class="foot"><span>${izq}</span><b>${der}</b></div>`;

// Portada centrada (feed o story)
const portada = (size, eyebrow, titular, texto, cierre, top = 0, bottom = 0) => page(size, 'mid', `
    <div style="height:${top}px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${size === S ? 128 : 120}px;margin-top:40px">${titular}</div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">${texto}</div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>${cierre}</b></div><div style="height:${bottom}px"></div>`);

// Lámina con tabla de filas
const tabla = (eyebrow, titular, filas, pieHtml, tam = 96) => page(P, '', `
    ${lock}
    <div style="height:64px"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${tam}px;margin-top:26px">${titular}</div>
    <div class="grow"></div>
    <div class="tbl">${filas}</div>
    <div class="grow"></div>
    ${pieHtml}`);

const pasos = (xs) => xs.map(([n, t]) => `<div class="tr" style="justify-content:flex-start;gap:36px"><span class="n">${n}</span><span class="t">${t}</span></div>`).join('');
const pares = (xs) => xs.map(([k, v]) => `<div class="tr"><span class="k">${k}</span><span class="v">${v}</span></div>`).join('');

// Lámina de texto
const lamina = (eyebrow, titular, texto, pieHtml, tam = 100) => page(P, '', `
    ${lock}
    <div style="height:84px"></div>
    <div class="eyebrow">${eyebrow}</div>
    <div class="h" style="font-size:${tam}px;margin-top:30px">${titular}</div>
    <div style="height:54px"></div>${rule}<div style="height:48px"></div>
    <div class="p">${texto}</div>
    <div class="grow"></div>
    ${pieHtml}`);

const gold = (t) => `<b style="color:#C9A24C;font-weight:500">${t}</b>`;

// Story de adelanto (vie 20 nov, manual): el hueco bajo el texto es para el sticker de pregunta.
const adelanto = page(S, 'mid', `
    <div style="height:130px"></div>${lock}
    <div class="grow"></div>
    <div class="eyebrow">Temporada de posadas</div>
    <div class="h" style="font-size:132px;margin-top:40px">Ya vienen<i>las posadas.</i></div>
    <div style="height:54px"></div>${rule}<div style="height:46px"></div>
    <div class="p">Mañana te contamos cómo<br>regalar vino este diciembre.</div>
    <div style="height:300px"></div>
    <div class="grow"></div>
    <div class="foot" style="justify-content:center"><b>Mañana 7:00 · en el feed</b></div><div style="height:250px"></div>`);

await render({
  // 0 · Adelanto en story, el día anterior
  'story-posadas-adelanto': [S, adelanto],

  // 1 · Apertura de la serie
  'posadas-01': [P, portada(P, 'Temporada de posadas', 'En las posadas,<i>regala vino.</i>',
    'Una botella bien elegida,<br>envuelta y con tarjeta a mano.', TIENDA.direccion)],
  'story-posadas': [S, portada(S, 'Temporada de posadas', 'En las posadas,<i>regala vino.</i>',
    'Una botella bien elegida,<br>envuelta y con tarjeta a mano.', 'Toca para escribirnos ▾', 130, 250)],

  // 2 · Carrusel de regalos corporativos
  'corp-01': [P, portada(P, 'Regalos corporativos', 'Para tu equipo<i>y tus clientes.</i>',
    'Este diciembre, que tu empresa<br>regale algo que sí se disfruta.', 'Desliza →')],
  'corp-02': [P, lamina('Regalos corporativos · Por qué vino', 'Un regalo que<i>se comparte.</i>',
    'El vino no se guarda en un cajón: se abre en una cena, con alguien más. Tu marca llega a esa mesa.',
    pie(TIENDA.ig, '02 / 04'))],
  'corp-03': [P, tabla('Regalos corporativos · Cómo pedir', 'Cuatro pasos,<i>sin complicarte.</i>', pasos([
    ['01', `Escríbenos a ${gold(TIENDA.correo)}`],
    ['02', 'Dinos cuántos regalos y tu presupuesto'],
    ['03', 'Te proponemos la selección'],
    ['04', 'Los recoges listos en la boutique'],
  ]), pie(TIENDA.ig, '03 / 04'), 92)],
  'corp-04': [P, tabla('Regalos corporativos · Contacto', 'Hagamos<i>tu lista.</i>', pares([
    ['Correo', `<span style="color:#C9A24C;font-style:italic">${TIENDA.correo}</span>`],
    ['WhatsApp', TIENDA.whatsapp],
    ['Boutique', 'Centro, La Paz, BCS'],
    ['Horario', 'Lun a sáb · 10:00 — 20:00'],
  ]), pie('Venta solo a mayores de 18 años', '04 / 04'))],
  'story-corp': [S, portada(S, 'Regalos corporativos', 'Para tu equipo<i>y tus clientes.</i>',
    'Este diciembre, que tu empresa<br>regale algo que sí se disfruta.', `Escríbenos · ${TIENDA.correo}`, 130, 250)],

  // 3 · Guía: qué vino regalar
  'guia-regalo': [P, tabla('Cuaderno de cata · Para regalar', '¿Qué vino<i>regalar?</i>', pares([
    ['Intercambio', 'Un tinto amable'],
    ['Anfitrión', 'Un espumoso para brindar'],
    ['Cliente o jefe', 'Una botella con historia'],
    ['No sé qué le gusta', 'Un rosado seco'],
  ]), pie('Pregúntanos en la boutique', TIENDA.sitio), 104)],

  // 4 · Canastas
  'canastas': [P, lamina('La casa · Regalos y canastas', 'Armamos tu regalo<i>con tarjeta a mano.</i>',
    'Elige las botellas o déjanos proponerlas. La tarjeta escrita a mano va por nuestra cuenta.',
    pie(`WhatsApp ${TIENDA.whatsapp}`, TIENDA.sitio), 92)],

  // 5 · Cierre: pedir con tiempo
  'con-tiempo': [P, portada(P, 'Regalos de diciembre', 'Diciembre<i>llega rápido.</i>',
    'Pide tus regalos con tiempo<br>y recógelos listos para entregar.', `${TIENDA.correo} · WhatsApp ${TIENDA.whatsapp}`)],
}, OUT);
