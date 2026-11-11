# Guía de estilo — @v612wineboutique

Resultado de revisar las 50 publicaciones del feed (27 abr – 29 sep 2026). Aplica a todo bloque nuevo.

## Diagnóstico

El feed tiene tres sistemas visuales distintos, uno por etapa:

| Etapa | Fechas | Cómo se ve | Veredicto |
|---|---|---|---|
| Lanzamiento + Cuaderno de Cata (bloques 1–2) | abr – 2 ago | Navy profundo, serif fina, acento dorado en cursiva, esquinas doradas, fichas crema | **Es el estilo de la casa.** Limpio, coherente con el logo |
| Maridaje BCS (bloque 3) | 3 – 14 ago | Fotos sin marco: botella sobre blanco alternada con foto generada | Sin marca; en la cuadrícula no se reconoce como V612 |
| Mes de la Patria (bloque 4) | 1 – 29 sep | Casi negro, titulares en Bebas Neue mayúsculas, foto generada + botella pegada | Otra marca: tipografía y tono distintos al resto |

Problemas concretos encontrados:

- **Piezas duplicadas:** «Apertura Mayo 2026», «Una buena botella no se descorcha» y «Laudun Blanc» se publicaron dos veces (abril y julio).
- **Dato vencido:** «Apertura Mayo 2026» se volvió a publicar el 12 de julio. Además tiene texto encimado («Baja California Sur» sobre el usuario).
- **Cifras que no cuadran:** una pieza dice «Seis regiones, una boutique» y otra «Nueve países, una boutique».
- **Imagen repetida:** en el bloque 4 la misma foto de pozole aparece en tres publicaciones y la misma botella en varias que no hablan de ella.
- **Botella que no corresponde al tema:** p. ej. «La Napa de México» ilustrada con un vino español; «¡Viva México!» con un Cabernet de California.
- **Fotos generadas de lugares que no son la tienda:** el Arco de Cabo San Lucas, un comedor de palacio. Para una tienda en La Paz restan credibilidad.

## Reglas

**Color**

| Uso | Valor |
|---|---|
| Fondo | Navy corporativo `#1A2954` (el del logo; viñeta muy sutil permitida) |
| Acento | Dorado `#C9A24C` |
| Texto | Marfil `#F4ECD8` |
| Fichas de botella | Crema `#F8F3E6` con texto navy |

Son los colores del logo. Sin negro puro, sin navy más oscuro que el corporativo, sin otros colores de acento.

**Tipografía**

- Titulares: Cormorant Garamond 500, mayúsculas y minúsculas, con punto final. La segunda línea va en cursiva dorada («La espera también / *se cata.*»).
- Etiquetas y pies: Jost 500 en mayúsculas espaciadas, tamaño pequeño, en dorado o marfil atenuado.
- Logo: siempre el oficial completo — estrella arriba a la derecha, «V612» y «WINE BOUTIQUE» en Cinzel dorado. No abreviarlo a «✦ V612». No usar Bebas Neue ni titulares en mayúsculas gruesas.

**Composición**

- Esquinas doradas finas; sin marcos completos ni fondos con textura.
- Una idea por pieza. Datos en tabla de filas con línea fina, no en párrafos.
- Formato 4:5 (1080×1350) en feed; lo importante dentro del centro para que no se corte en la cuadrícula. Stories y Reels 9:16 con márgenes libres arriba y abajo.

**Fotografía**

- Botellas: solo fotos reales del portafolio, sobre ficha crema o navy, nunca pegadas sobre otra foto.
- Lugar y ambiente: fotos y video reales de la tienda. Las imágenes generadas quedan solo para comida o paisaje genérico, nunca para representar la tienda ni lugares reconocibles.
- No repetir la misma imagen dentro de un bloque.

**Texto**

- Antes de programar: revisar que no se repita una pieza ya publicada y que fechas y cifras sigan vigentes.
- Toda publicación con dirección u horario toma los datos de `bloque5/manifest.json → tienda`.

## Plantillas

`bloque5/build.mjs` (feed y stories) y `bloque5/reel.mjs` (overlays de Reel) ya implementan estas reglas y sirven de base para bloques nuevos.
