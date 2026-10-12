# Bloque 5 · Mesa Larga · Hoja de revisión

27 publicaciones · 15 oct → 29 nov 2026 · Mar/Jue/Vie/Dom · 7:00 Los Cabos (14:00 UTC)

Cada caption pasó por tres etapas: redacción con investigación, verificación con fuentes web y edición. Al final hubo una revisión de todo el bloque para detectar repeticiones y mantener la voz. Lo que no se pudo confirmar se quitó del caption o se suavizó, y quedó anotado abajo en cada post.

**Nada de esto está cargado en Supabase ni programado.** Hay que cerrar primero los pendientes de la sección 1.

---

## 1. Pendientes antes de cargar el bloque

### 1.1 Etiquetas físicas (foto de etiqueta y contraetiqueta de la botella en tienda)

| Post | Producto | Qué confirmar |
|---|---|---|
| 02 | Lechuza Merlot | Que el productor sea Vinos Lechuza (familia Magnussen). Si es otra bodega, se reescribe el párrafo de historia. |
| 06 | Cuna de Tierra Nebbiolo | Que la uva sea de Guanajuato y que la etiqueta diga "Nebbiolo", no "Gran Nebbiolo" ni "Ensamble". **Crítico:** de esto depende el cierre del post 05. |
| 08 | El Pintor Mezcal | Que sea el ensamble de espadín y cuishe de Yautepec. El código MPROS no lo deja claro. |
| 12 | Gómez Cruzado Honorable | Si la contraetiqueta dice Crianza o Reserva. El caption dice que no se presenta así, porque la ficha oficial no lo declara. |
| 14 | Hampton Water Magnum | Si dice AOP Languedoc y si incluye Syrah. |
| 16 | Monteviejo Lindaflor Malbec | Grafía (Lindaflor, junto) y que sea el Malbec y no otra línea. Si aplica, corregir el nombre en el POS. |
| 18 | Philipponnat | Si la etiqueta dice Royale Réserve o Réserve Perpétuelle (la casa le cambió el nombre). |
| 20 | Lechuza Chardonnay | Que sea el "Roble" y no el "Stainless Steel". |
| 22 | Fleurie Levrattière | La grafía exacta del nombre del viñedo en la etiqueta. |
| 24 | La Crema Pinot Noir | La región. Si dice Willamette Valley, el vino es de Oregon y hay que reescribir la línea de California. |
| 26 | Uncle Nearest | Que sea la expresión 1884 Small Batch. |

### 1.2 Notas de cata que debes validar con tu propia cata
No hay ficha oficial publicada para estos vinos, así que las notas son genéricas o vienen de terceros: **02, 04, 06, 08, 12, 20, 24**. Ajústalas con tus palabras; ese es justo el valor de que la cuenta la escriba una sommelier.

### 1.3 Decisión de negocio: post 26 (Uncle Nearest)
La empresa está en administración judicial (receivership) desde agosto de 2025. En 2026 despidieron a los cofundadores y anunciaron una venta que todavía no se cierra. El caption solo cuenta la historia de Nearest Green y no menciona a la empresa. La alternativa verificada (Freemark Abbey Cabernet, Napa) está en `alternativas.json`. **Decide cuál va.**

### 1.4 Fotos e imágenes
- **Post 15 (boutique): falta una FOTO REAL de la boutique** (anaqueles o mostrador). No se puede generar con IA.
- Productos: los 13 SKU tienen foto en `product-images/` del POS (Supabase). Si prefieres las fotos de estudio, búscalas en la carpeta de Drive "NUEVOS" con el código "FOTOS SAE-xxx".
- Higgsfield: 13 imágenes (posts 1, 3, 5, 7, 9, 11, 13, 17, 19, 21, 23, 25 y 27). Revisa cada una: sin botellas, etiquetas, texto, logotipos ni menores de edad.
- Diseños: 27 piezas navy/Bebas con el `overlay_text` de cada post, en `disenos/post-XX.jpg`.

### 1.5 Operación
- Los posts 15, 23 y 27 invitan a escribir por DM. **Alguien tiene que contestar los DM** de noviembre y diciembre.
- Confirma existencias el día anterior a cada post de producto. Los más justos: Vin de Constance (3), Uncle Nearest (3), Lindaflor (5) y El Pintor Mezcal (5).
- **Calendario de producción:** el primer post sale el jueves 15 de octubre, así que los posts 1 a 3 tienen que estar diseñados y cargados para el miércoles 14. Si no da tiempo, conviene arrancar el martes 20 y recorrer la apertura.

---

## 2. Decisiones editoriales que tomé (las puedes revertir)

- **Ya no hay códigos SAE en los captions.** Los bloques 3 y 4 publicaban "📍 SAE-136 | V612…", que es un código interno sin sentido para el cliente.
- **Hashtags:** primero los de marca (#V612WineBoutique #MesaLargaV612) y sin acentos (#DiaDeMuertos, #Cempasuchil, #AccionDeGracias, #MarDeCortes). Sin acento suman al hashtag más usado; con acento Instagram los cuenta como otro hashtag.
- **Lechuza aparece dos veces** (posts 02 y 20). Es intencional: son los SKU con más existencias (48 Merlot y 49 Chardonnay).
- **Imagen del post 05:** viñedo con niebla en el Valle de Guadalupe, en lugar del desierto de Todos Santos que había puesto el editor.
- **Imagen del post 21:** malecón de La Paz con dos copas de tinto ligero, no un paisaje de Beaujolais.
- **Cadena de adelantos** ("El jueves…", "Mañana…") entre los posts 4→5, 5→6, 9→10, 13→14, 16→17 y 21→22. Si mueves una fecha, revisa los dos posts del par.
- **Thanksgiving (post 25):** bilingüe. Saluda a los canadienses como quienes "gave thanks back in October"; su Thanksgiving fue el 12 de octubre.
- **Buen Fin:** no se menciona porque las fechas no están confirmadas y V612 no ha decidido participar.

---

## 3. Calendario

| # | Fecha | Tipo | Pieza |
|---|---|---|---|
| 01 | Jue 15 oct | lifestyle | Apertura · Mesa Larga |
| 02 | Vie 16 oct | producto | Lechuza Merlot |
| 03 | Dom 18 oct | educación | La escalera del tinto |
| 04 | Mar 20 oct | producto | Giuseppe Nada Langhe Nebbiolo |
| 05 | Jue 22 oct | educación | Nebbiolo, la uva de la niebla |
| 06 | Vie 23 oct | producto | Cuna de Tierra Nebbiolo |
| 07 | Dom 25 oct | lifestyle | Domingo de mesa larga |
| 08 | Mar 27 oct | producto | El Pintor Mezcal · para la ofrenda |
| 09 | Jue 29 oct | educación | Pan de muerto con copa |
| 10 | Vie 30 oct | producto | Klein Constantia Vin de Constance |
| 11 | Dom 1 nov | lifestyle | Día de Muertos · la mesa más larga |
| 12 | Mar 3 nov | producto | Gómez Cruzado Honorable |
| 13 | Jue 5 nov | educación | Magnum, el formato de la mesa larga |
| 14 | Vie 6 nov | producto | Hampton Water Rosé Magnum |
| 15 | Dom 8 nov | boutique | La boutique por dentro (foto real) |
| 16 | Mar 10 nov | producto | Monteviejo Lindaflor Malbec |
| 17 | Jue 12 nov | educación | Decantar: cuándo sí y cuándo no |
| 18 | Vie 13 nov | producto | Philipponnat Royale Réserve Brut |
| 19 | Dom 15 nov | lifestyle | Domingo de puente en la playa |
| 20 | Mar 17 nov | producto | Lechuza Chardonnay Roble |
| 21 | Jue 19 nov | educación | Beaujolais Nouveau y los 10 crus |
| 22 | Vie 20 nov | producto | Fleurie La Levrattière (Viola & Chapoutier) |
| 23 | Dom 22 nov | educación | Cómo regalar vino |
| 24 | Mar 24 nov | producto | La Crema Pinot Noir · para el pavo |
| 25 | Jue 26 nov | lifestyle | Thanksgiving |
| 26 | Vie 27 nov | producto | Uncle Nearest 1884 (o alternativa: Freemark Abbey Cabernet) |
| 27 | Dom 29 nov | cierre | La mesa sigue en diciembre |

---

## 4. Detalle por post (notas de verificación y fuentes)

### 01 · Jue 15/10 · lifestyle · Apertura Mesa Larga: baja el calor, vuelve el tinto

**Imagen:** post-01-lifestyle-mesa-larga.png (Higgsfield)

**Por confirmar / notas de verificación:**

- Cambié 'El calor por fin afloja' por 'El calor empieza a aflojar'. Según WeatherSpark, la temporada calurosa de La Paz termina hacia el 3 de octubre, pero la máxima promedio de octubre sigue cerca de 32 °C. El caption no dice 'refresca' ni 'hace frío'.
- Las fechas del bloque vienen del brief: Muertos el 1 y 2 de noviembre, el puente el lunes 16 y Thanksgiving el jueves 26. El caption no da fechas, solo nombra las ocasiones.
- La viñeta 'Los primeros regalos de la temporada' no promete ningún servicio (envoltura, cajas ni envíos). Si V612 no va a publicar contenido de regalos, ajusta esa viñeta.
- Revisa la imagen de Higgsfield antes de publicar: no deben salir botellas, etiquetas, texto ni personas, en especial menores.

<details><summary>Fuentes</summary>

- https://weatherspark.com/y/2800/Average-Weather-in-La-Paz-Mexico-Year-Round

</details>

### 02 · Vie 16/10 · producto · Lechuza Merlot

**Imagen:** product-images/LECHUMERLO.jpg (foto real POS) o FOTOS SAE equivalente en Drive NUEVOS

**Por confirmar / notas de verificación:**

- CONFIRMAR ANTES DE PUBLICAR: revisa en la etiqueta física que el productor sea Vinos Lechuza / Lechuza Vineyard (familia Magnussen, Km 82.5 Tecate–Ensenada). El POS dice 'Vinícola La Lechuza (verificar)'. Si es otro productor, hay que reescribir todo el segundo párrafo.
- Quité 'hoy la bodega la lleva la segunda generación, con Kristin Magnussen Shute al frente'. Las fuentes van de 2013 a 2022 y no confirman quién dirige la bodega en 2026. El caption ahora solo dice que Kristin se sumó después al proyecto, y eso sí está verificado. Si Sabrina confirma que Kristin sigue al frente, se puede volver a poner.
- Corregí el origen del nombre: honra a los tecolotes llaneros (burrowing owl) que vivían en el terreno cuando llegó la familia. Ya no dice que todavía rondan el viñedo, porque la fuente no lo afirma.
- Las notas de cata (cereza, ciruela, chocolate) quedaron como 'el perfil que se espera de un buen Merlot', según Wine Folly. No hay una nota publicada de este vino. Sabrina debe probarlo y ajustar las notas y la frase 'acompaña sin robarse la conversación' si no le cuadran.
- No confirmé que sea 100% Merlot ni su crianza en barrica, así que el caption no lo afirma. No se menciona añada.
- No se mencionan premios ni puntajes: las listas del IWSC con Merlot del Valle de Guadalupe no indican productor.
- Lechuza es una bodega boutique pequeña (unas 2,500 cajas, según Golden State) y el brief la describe como de 'precio accesible'. El caption no habla de precio. Revisa que ese posicionamiento cuadre con el precio en tienda.
- Confirma que exista una foto real de LECHUMERLO (POS o Drive NUEVOS). El folder product-images/ no está en el repo v612-instagram. Nunca usar imagen generada.
- Los 15 a 20 minutos de refri son un consejo práctico y no repiten el post de temperaturas. La Crema sugiere 15–20 min para Pinot y 20–30 min para tintos ligeros a medios. Sabrina puede subirlo a 20–30 si lo prefiere para un Merlot.

<details><summary>Fuentes</summary>

- https://pleasethepalate.com/from-ventura-california-to-baja-california-kristin-and-adam-shute-lechuza/
- https://admin.goldenstate.is/kristin-shute-carries-on-a-family-tradition-of-producing-quality-wines-in-mexicos-valle-de-guadalupe/
- https://winereviewonline.com/?p=291817
- https://www.bajabound.com/destinations/bajawinecountry/lechuza
- https://www.vivino.com/en/wineries/lechuza
- https://winefolly.com/grapes/merlot/
- https://www.lacrema.com/what-is-the-right-wine-serving-temperature/

</details>

### 03 · Dom 18/10 · educacion · La escalera del tinto: de ligero a potente

**Imagen:** post-03-edu-escalera-tinto.png (Higgsfield + diseño)

**Por confirmar / notas de verificación:**

- Saqué el Nebbiolo del peldaño 3. Wine Folly lo clasifica como cuerpo medio-pleno y de taninos altos, así que ponerlo debajo del Merlot contradecía la lógica del post. Ahora va en una nota aparte que lo sube al peldaño 5 por estructura, y así se conserva el giro 'pálido pero firme'.
- El Nebbiolo no lleva temperatura en el caption. Wine Folly sugiere servirlo a 12–15 °C, mientras que la guía de La Crema para tintos plenos da 16–18 °C. Sabrina puede agregar la temperatura a la que ella lo sirve.
- Cambié los maridajes para que cada plato tenga su uva: Garnacha (frutal, de tanino suave) con chiles rellenos, y Nebbiolo con risotto de hongos (Wine Folly recomienda risotto de trufa). Quité 'hongos' del Pinot para no repetir.
- Cambié el maridaje del Merlot de 'carne asada, arrachera' a 'cerdo en adobo suave' para no repetir lo del post de Lechuza Merlot (16 oct).
- Las temperaturas son rangos aproximados armonizados de varias fuentes, que difieren entre 1 y 2 °C (La Crema: ligeros 10–13 °C, medios 13–16 °C, plenos 16–18 °C). Como ya hubo un post de 'temperaturas de servicio', aquí son un dato secundario. Si Sabrina siente que repite, se pueden quitar del diseño.
- Wine Folly pone la Garnacha en cuerpo medio en su guía y en medio-pleno en su ficha de uva. Por eso el caption la describe como 'frutal, de tanino suave' y no le pone etiqueta de cuerpo.
- Diseño: la infografía debe llevar los 5 peldaños tal como vienen en el caption (uva · perfil · plato · temperatura) más la nota del Nebbiolo. La imagen de Higgsfield deja espacio arriba para el texto. Revisa que no salgan botellas, etiquetas ni texto generado.
- Es contenido educativo y no vende ningún producto. No importa si V612 no tiene Gamay o Nebbiolo en inventario.

<details><summary>Fuentes</summary>

- https://www.finedininglovers.com/explore/articles/red-wine-body-light-medium-heavy
- https://winefolly.com/review/grenache-wine/
- https://winefolly.com/grapes/nebbiolo/
- https://winefolly.com/review/guide-to-nebbiolo-wine/
- https://www.coravin.com/blogs/community/nebbiolo-wine-guide
- https://winefolly.com/grapes/gamay/
- https://www.totalwine.com/discover/learn/gamay
- https://winefolly.com/grapes/merlot/
- https://www.lacrema.com/what-is-the-right-wine-serving-temperature/
- https://weatherspark.com/y/2800/Average-Weather-in-La-Paz-Mexico-Year-Round

</details>

### 04 · Mar 20/10 · producto · Giuseppe Nada Langhe Nebbiolo

**Imagen:** product-images/003NANEBBI.jpg (foto real POS)

**Por confirmar / notas de verificación:**

- Revisar que la foto y la etiqueta digan 'Giuseppe Nada' (Nada Giuseppe). En Treiso hay otra bodega distinta, Fiorenzo Nada, y no hay que confundirlas.
- Corrección aplicada: ya no dice que el Langhe Nebbiolo sale 'de los mismos viñedos que sus Barbarescos'. Ahora dice que viene de Casot y Marcarini, a unos 350 m. Ese dato es del importador estadounidense Bowler Wine para el lote 2024: confirmar en la contraetiqueta o con el importador mexicano que aplica a la botella en inventario. No se menciona añada.
- Las notas de cata originales (cereza roja, frambuesa, taninos 'amables') no se pudieron verificar, así que 'En la copa' quedó como el perfil típico de un Nebbiolo joven (color claro, fruta roja, flores, taninos firmes, acidez viva), respaldado por Wikipedia y Decanter. Si Sabrina cata la botella antes de publicar, puede cambiarlo por sus propias notas.
- 'La familia compró su viñedo Casot en 1900' sustituye a 'trabaja esa colina desde 1900'. La fuente es Bowler Wine, que da como fecha de compra el 27 de marzo de 1900.
- 'Para abrir ahora' es criterio de estilo: el Langhe Nebbiolo es la versión de consumo más temprano frente al Barbaresco. No es un dato de la ficha.
- No se menciona el cultivo orgánico. Los viñedos de la familia están certificados desde 2017, pero no está confirmado que esta etiqueta se venda como orgánica.
- Los maridajes (risotto de hongos, pasta al ragú, arrachera) son criterio de sommelier, no recomendación de la bodega.
- Hay 6 botellas en existencia y el texto no menciona escasez.

<details><summary>Fuentes</summary>

- https://www.bowlerwine.com/portfolio/line/wine-1402/producer/nada-giuseppe-1834
- https://www.bowlerwine.com/taxonomy/term/1834
- https://bigredwine.co.uk/collections/nada-giuseppe-piedmont-italy
- https://www.vintageberkeley.com/blogs/events/giuseppe-nada-barbaresco-tasting-with-winemaker-enrico-nada-vine-st-friday-february-20th
- https://en.wikipedia.org/wiki/Nebbiolo
- https://www.decanter.com/wine/grape-varieties/nebbiolo-52417/

</details>

### 05 · Jue 22/10 · educacion · Edu: Nebbiolo, de Piamonte a México

**Imagen:** post-05-edu-nebbiolo.png (Higgsfield + diseño)

**Por confirmar / notas de verificación:**

- Corrección aplicada: la etimología ya no se da como hecho. Ahora dice 'la explicación más citada de su nombre: nebbia'. Hay otras teorías, como 'nobile' o la pruina blanquecina de la uva. El titular 'La uva de la niebla' se mantiene como imagen.
- El dato de Lambrusca di Alessandria se apoya en prensa especializada y en un productor, no en un estudio científico publicado: Wine Enthusiast, que cita al genetista José Vouillamoz; The Wine Atlas; y el blog de la bodega El Cielo. Vouillamoz advierte que la muestra de un solo viñedo no define toda la región. Por eso el texto dice 'algunos viñedos' y 'el debate sigue abierto'. Si Sabrina prefiere no tocar el tema, se puede borrar ese párrafo completo.
- No se pudo leer directamente la nota de Wine Enthusiast (403). Su contenido se verificó con resúmenes de búsqueda y con The Wine Atlas, que sí se leyó completa.
- 'Llegó con enólogos italianos en el siglo XX' se basa en Esteban Ferro (Santo Tomás, desde los años treinta) y en Camillo Magoni / L.A. Cetto. Las fuentes no coinciden en las fechas exactas, por eso no se da año.
- 'Allá suele dar vinos más oscuros, de fruta negra' es una generalización de estilo tomada de The Wine Atlas.
- El cierre cambió de 'un Nebbiolo de Guanajuato' a 'un Nebbiolo mexicano' mientras no se confirme el origen de la uva del vino del viernes (Cuna de Tierra, SKU CTNE). Si la contraetiqueta dice Guanajuato, se puede volver a 'un Nebbiolo de Guanajuato'.
- Sin pregunta al final a propósito: la pregunta de la semana va en el post del domingo.
- El caption mide 894 caracteres sin hashtags, muy cerca del tope de 900. Si se agrega algo, hay que recortar otra cosa.
- Imagen: viñedo con niebla al amanecer en el Valle de Guadalupe (une la 'uva de la niebla' con el Nebbiolo mexicano). El editor la había cambiado por niebla sobre el desierto de Todos Santos para cumplir la regla de estética BCS; lo revertí porque el Bloque 4 ya usó viñedos de Valle de Guadalupe.

<details><summary>Fuentes</summary>

- https://en.wikipedia.org/wiki/Nebbiolo
- https://www.decanter.com/wine/grape-varieties/nebbiolo-52417/
- https://thewineatlas.substack.com/p/mexico-wine
- https://www.wineenthusiast.com/culture/wine/mexican-nebbiolo-mystery/
- https://vinoselcielo.com/en/blogs/contenido/nebbiolo-en-mexico-ciencia-historia-y-una-identidad-que-sigue-evolucionando
- https://vitisdb.it/varieties/show/1176
- https://fps.ucdavis.edu/fgrdetails.cfm?varietyid=3517
- https://www.excelsior.com.mx/estilo-de-vida/vino-guanajuato-conoce-mas-sobre-vino-que-produce-region

</details>

### 06 · Vie 23/10 · producto · Cuna de Tierra Nebbiolo

**Imagen:** product-images/CTNE.jpg (foto real POS)

**Por confirmar / notas de verificación:**

- CRÍTICO: confirmar en la contraetiqueta del SKU CTNE que la uva es de Guanajuato (Dolores Hidalgo) y que la etiqueta dice 'Nebbiolo', no 'Gran Nebbiolo' ni 'Ensamble'. Como el origen no se pudo verificar, se quitaron 'hecho en Guanajuato' y 'lejos de Baja', y el texto ahora habla de la bodega. Si la contraetiqueta confirma Guanajuato, se puede volver al titular 'Nebbiolo de altura, hecho en Guanajuato'. Si dice Baja California (San Vicente u otro valle), hay que borrar el párrafo 'A esa altura...', cambiar 'Cerramos la semana del Nebbiolo en el Bajío' y ajustar el cierre del post del jueves.
- Revisar que la foto corresponda a 'Cuna de Tierra Nebbiolo' y no a 'Gran Cuna de Tierra Nebbiolo' ni al Ensamble.
- Composición: el Concours Mondial de Bruxelles 2026 registra la añada 2023 con 85% Nebbiolo y 15% Cabernet Sauvignon, con barrica. Por eso el texto no dice '100% Nebbiolo' ni menciona la barrica. Puede cambiar según la añada. No se menciona añada.
- Las notas de cata se suavizaron ('lo que suele mostrar') y salen de la ficha del jurado del CMB para la añada 2023. Esa misma ficha también señala 'falta de sustancia' en boca. Se quitaron 'cuerpo medio' y la comparación 'más redondo que su primo piamontés'; ahora es una invitación a comparar los dos vinos. Sabrina debe validar las notas con su propia cata.
- No se mencionan premios. El 'Merit' del CMB no es medalla.
- Los 2,000 m de altitud los dio el director comercial de la bodega en una nota de EFE de 2017. Dolores Hidalgo está a unos 1,920 m.
- 'Se plantaron a mediados de los noventa' viene de El Financiero, que cita a la bodega: Juan Manchón empezó a plantar en 1995.
- El papel del cura Hidalgo en la vid de Dolores (1803–1810) viene de Wikipedia en español y de la propia bodega. El texto dice 'impulsó' y no afirma que la bodega ocupe sus antiguos viñedos.
- Sensibilidad: Ricardo Vega Cámara, de la familia dueña, fue asesinado en diciembre de 2024. El caption no nombra a nadie de la familia a propósito.
- Los maridajes (enchiladas mineras, birria, quesos maduros) son criterio de sommelier.

<details><summary>Fuentes</summary>

- https://cunadetierra.com.mx/
- https://resultats.concoursmondial.com/en/results/2026/255625-cuna-de-tierra-nebbiolo-2023
- https://delectable.com/wine/cuna-de-tierra/dolores-hidalgo-nebbiolo/2015
- https://www.laprensa.hn/mundo/bodegas_vino-uva-mexico-NVLP1103916
- https://www.elfinanciero.com.mx/food-and-drink/2024/12/16/quien-era-ricardo-vega-camara-dueno-de-cuna-de-tierra-asesinado-en-guanajuato/
- https://es.wikipedia.org/wiki/Dolores_Hidalgo
- https://www.excelsior.com.mx/estilo-de-vida/vino-guanajuato-conoce-mas-sobre-vino-que-produce-region
- https://www.timeoutmexico.mx/ciudad-de-mexico/restaurantes/vinyedo-cuna-de-tierra

</details>

### 07 · Dom 25/10 · lifestyle · Lifestyle: domingo de mesa larga

**Imagen:** post-07-lifestyle-domingo.png (Higgsfield)

**Por confirmar / notas de verificación:**

- A finales de octubre en La Paz el mediodía todavía puede pasar de 30 °C. Por eso el texto dice 'el calor empieza a ceder' y pone la comida a la sombra. Confirmar que el tono le suena bien a Sabrina.
- Ajuste de estilo: 'una ensalada fresca' pasó a 'una ensalada crujiente' para no repetir 'fresca' junto a 'agua fresca'.
- Comparar el resultado de Higgsfield con la imagen del post 1 para que no se parezcan: aquí es un patio de día con buganvilias, no un atardecer. Ojo también con el post 5, que ahora es un paisaje de Todos Santos con niebla.
- Revisar la imagen generada: sin botellas, etiquetas, texto ni menores, y con manos y copas de aspecto natural.
- El caption no tiene datos factuales que necesiten fuente. No nombra producto ni lleva CTA de venta a propósito; si se quiere, se puede agregar 'Escríbenos por DM' antes de la pregunta.

### 08 · Mar 27/10 · producto · El Pintor Mezcal

**Imagen:** product-images/MPROS.jpg (foto real POS)

**Por confirmar / notas de verificación:**

- ANTES DE PUBLICAR: revisar la etiqueta física y confirmar que la botella del POS (SKU MPROS) es El Pintor Mezcal Ensamble de espadín y cuishe. Es el único mezcal que lista la marca y el proceso del caption coincide con su ficha oficial, pero el código MPROS no corresponde claramente a ese nombre. Si la etiqueta dice otra cosa, corregir magueyes y origen (y también el alt_text).
- Notas de cata recortadas tras la verificación: se quitó 'agave cocido' porque no aparece en ninguna fuente. Quedan solo 'humo amable y un fondo cítrico, ligero y fresco', que es lo que respaldan la ficha oficial ('balanced, subtle') y MezcalReviews ('smoky, super light... lime'). Sabrina debe validarlas con su propia cata y puede enriquecerlas si coinciden.
- 'Para servir en copita, a sorbos y sin prisa' es una sugerencia de servicio, no un juicio de calidad. La marca lo presenta como 'sipping mezcal', pero la única reseña independiente (MezcalReviews, 2/5) lo ve más para mezclar. Si Sabrina no está de acuerdo tras probarlo, quitar la frase.
- No se menciona al maestro mezcalero, porque no aparece en ninguna fuente, ni a Guillermo Barroso, porque la afirmación de 'segundo maestro tequilero certificado del mundo' viene solo de la marca.
- Omitido a propósito: 'doble destilación' y 'cuishe silvestre' (los dicen retailers, no la marca) y la graduación (40% en Caskers, 41% en MezcalReviews).
- La cita del INPI es textual (gob.mx/inpi, 2019). El post 11 también cita al INPI. Si se prefiere no repetir fuente en la misma semana, se puede parafrasear esta.
- Existencias: 5. No se menciona escasez.

<details><summary>Fuentes</summary>

- https://www.elpintortequila.com/mezcal-ensamble
- https://www.elpintortequila.com/
- https://www.mezcalreviews.com/?p=7253
- https://www.gob.mx/inpi/articulos/conoces-el-significado-de-los-elementos-de-una-ofrenda-de-dia-de-muertos

</details>

### 09 · Jue 29/10 · educacion · Pan de muerto y vino: la regla del dulzor

**Imagen:** post-09-edu-pan-de-muerto.png (Higgsfield + diseño)

**Por confirmar / notas de verificación:**

- Terminología corregida tras la verificación. Antes decía 'vino dulce natural' y ahora dice 'vino dulce de cosecha tardía': en español, 'vino dulce natural' (vin doux naturel) designa un vino fortificado, y el vino que se presenta mañana no lo es. El Moscato d'Asti ahora se describe como 'de burbuja suave', porque técnicamente es frizzante y no espumoso (el espumoso de la denominación es el Asti).
- La receta del pan de muerto cambia según la región. Azahar, naranja y anís aparecen como opcionales en las fuentes, por eso el caption dice 'en algunas recetas, anís'.
- Se mencionan estilos (demi-sec, Moscato d'Asti, Moscatel, Riesling semiseco, cosecha tardía, Oporto ruby), no marcas, y el caption no promete disponibilidad. Si Sabrina quiere ligar alguno con un producto del inventario, confirmar antes que esté en tienda.
- El cierre ('Mañana: un vino dulce con siglos de historia.') anuncia el post del viernes (Vin de Constance), que abre con la misma frase. Si cambia el orden de publicación, quitarlo.
- Revisar que la imagen de Higgsfield no tenga botellas, etiquetas ni texto, y que la copa se vea con vino dorado y no tinto.
- No lleva pregunta al final; la única pregunta de la semana va en el post del domingo.

<details><summary>Fuentes</summary>

- https://winefolly.com/deep-dive/5-tips-to-perfect-food-and-wine-pairing/
- https://www.tastingtable.com/1527488/classic-wine-dessert-pairings/
- https://www.elfinanciero.com.mx/viajes/historia-y-elaboracion-del-pan-de-muerto/
- https://www.nationalgeographicla.com/historia/2024/10/dia-de-muertos-que-es-el-pan-de-muerto-y-como-se-elabora

</details>

### 10 · Vie 30/10 · producto · Klein Constantia Vin de Constance

**Imagen:** product-images/KLEIN.jpg (foto real POS)

**Por confirmar / notas de verificación:**

- Terminología corregida: antes decía 'vino dulce natural, no fortificado' y ahora dice 'vino dulce de cosecha tardía, sin fortificar'. En español, 'vino dulce natural' designa un vino fortificado (vin doux naturel, vino de licor), así que la frase original se contradecía. Klein Constantia usa en inglés 'Natural Sweet Wine'; si la ficha de tienda o el POS lo traducen como 'vino dulce natural', conviene alinearlos. También se ajustó el alt_text.
- Crianza: ahora dice 'barricas y fudres', según las notas técnicas del productor (vía Frederick Wildman, añadas 2014–2016) y Wine Anorak. No se dan cifras porque las fuentes difieren (unos 3 años; hasta 4 sobre lías).
- Napoleón: la frase pasó de 'lo pedía' a 'llegaba a la mesa de Napoleón', con 'según las crónicas', y habla del 'vino de Constantia' en general. La cronología oficial de Klein Constantia incluye '1815 Napoleon in exile', pero históricamente ese vino salía de la finca de la familia Cloete (Groot/Hoop op Constantia), porque la propiedad original se dividió.
- Jane Austen: verificado en el texto de Sense and Sensibility ('the finest old Constantia wine', Mrs. Jennings). Se omitió a propósito el ángulo del vino que 'cura un corazón decepcionado', por la regla de consumo responsable.
- Notas de cata tomadas de la ficha oficial ('citrus marmalade and frangipani', la misma descripción para 2019 y 2020). No se menciona la añada porque no está confirmada. Sabrina debe validar con la botella en inventario.
- 'Revivido en los años ochenta': la familia Jooste compró la finca en 1980 y la primera añada moderna es de 1986. No se citan años para que no se confundan con la añada de la botella.
- El formato habitual es de 500 ml (según la tienda oficial). No se menciona; confirmar el formato antes de decir algo sobre servicio o raciones.
- Existencias: 3. No se menciona escasez.

<details><summary>Fuentes</summary>

- https://www.kleinconstantia.com/vin-de-constance/
- https://www.kleinconstantia.com/product/vin-de-constance-2020/
- https://www.kleinconstantia.com/our-estate/
- https://wineanorak.com/southafrica/southafrica_14_kleinconstantia.htm
- https://www.frederickwildman.com/producers/klein-constantia/muscat-vin-de-constance-2016
- https://en.wikipedia.org/wiki/Klein_Constantia
- https://www.gutenberg.org/cache/epub/161/pg161.txt

</details>

### 11 · Dom 1/11 · lifestyle · Día de Muertos · la mesa más larga

**Imagen:** post-11-lifestyle-dia-de-muertos.png (Higgsfield)

**Por confirmar / notas de verificación:**

- Corregido tras la verificación: antes decía 'Hoy y mañana... se pone una mesa' y ahora dice 'Estos días... hay una mesa puesta'. Según el INPI, la ofrenda se monta antes (la de los niños, el 31 de octubre; muchas familias desde el 28) y el 1 y 2 de noviembre ya está puesta para recibir a las ánimas.
- Post sin venta ni CTA comercial. Confirmar con Sabrina que está de acuerdo con cerrar con pregunta (es la única pregunta de la semana).
- Cita del INPI verificada palabra por palabra en gob.mx/inpi. El significado de las velas (la luz, la fe, la esperanza) y del cempasúchil (camino de color y olor), la sal y el agua salen del mismo texto. El post 8 también cita al INPI. Si se prefiere variar, se puede parafrasear la de ese post.
- Se publica el 1 de noviembre, día que la tradición dedica a los niños. El caption no se centra en menores y la propia cita aclara que el vino es 'si son adultos'.
- 'Levantar la copa por ellos' se plantea como brindis de memoria, no como consuelo. Si Sabrina lo prefiere aún más sobrio, puede cambiarse por 'Y brindar por ellos'.
- Revisar la imagen de Higgsfield: papel picado sin letras ni nombres, sin fotos ni retratos en el altar, sin personas, sin botellas ni etiquetas.
- Único emoji del post: 🕯️ en el titular. Se puede quitar si se prefiere aún más sobrio.

<details><summary>Fuentes</summary>

- https://www.gob.mx/inpi/articulos/conoces-el-significado-de-los-elementos-de-una-ofrenda-de-dia-de-muertos
- https://www.personal.unam.mx/Docs/Cendi/dia-de-muertos-elementos-de-la-ofrenda.pdf

</details>

### 12 · Mar 3/11 · producto · Gómez Cruzado Honorable

**Imagen:** product-images/265ECRUHON.jpg

**Por confirmar / notas de verificación:**

- CATEGORÍA: la ficha técnica oficial y la web de la bodega NO declaran Crianza ni Reserva (la categoría de la DOCa que encaja es 'Genérico', que según el Consejo Regulador incluye vinos con crianza que no se ajustan a Crianza, Reserva ni Gran Reserva). Antes de publicar, revisa la contraetiqueta de la botella. Si dice Crianza o Reserva, cambia el tercer párrafo.
- ORIGEN: no es vino de pueblo ni de Haro. Según la ficha oficial, las uvas vienen de viñas viejas de varios pueblos en la ladera de la Sierra Cantabria, de Lanciego a Labastida (Sonsierra / Rioja Alavesa). En Haro está la bodega, no el viñedo. Por eso el caption no dice 'vino de Haro'.
- AÑADA en existencia no confirmada. Las uvas, la barrica (unos 18 meses en roble francés con 20% americano), el 14.5% de alcohol y la 'extracción suave' salen de la ficha 2021. Añadas anteriores llevaban también Mazuelo y Viura, y la 2018 se crio solo en roble francés. Confirma con la etiqueta que la botella en existencia coincide.
- NOTAS DE CATA retiradas: 'fruta negra, café, especia, tanino firme' venían de reseñas de terceros (una de ellas de la añada 2018) y no aparecen en la ficha oficial. Ahora el caption solo usa lo que dice la ficha: estructura, crianza en roble y tanino pulido por una extracción suave. Si catas la botella en existencia y quieres describir aromas, agrégalos con tus palabras.
- Línea de la birria corregida según la verificación: el picante intenso acentúa la sensación de alcohol (14.5% en la ficha 2021), el amargor y la astringencia. Es criterio general de maridaje, no un dato de la bodega; Sabrina debe validarlo. 'Ábrelo con tiempo' también es consejo de sommelier.
- En fuentes de terceros, el fundador (Ángel Gómez de Arteche) aparece como 'noble mexicano', pero la web oficial no lo dice, así que no se usó. Lo que sí confirma la web oficial es que la familia Baños, de Badarán, reside en México.
- Existencias: 6 botellas. A propósito, no se insinúa escasez.
- No se usó la puntuación de 93 de Wine Anorak porque es de la añada 2018 y la botella en existencia es de otra añada.
- El caption mide unos 880 caracteres antes de hashtags, cerca del tope de 900. Si se agregan notas de cata, recorta en otro párrafo.

<details><summary>Fuentes</summary>

- https://www.gomezcruzado.com/vinos/honorable/
- https://www.gomezcruzado.com/wp-content/uploads/2025/11/GOMEZ_CRUZADO-HONORABLE_2021-ficha_tecnica-ONLINE.pdf
- https://www.gomezcruzado.com/historia/
- https://www.gomezcruzado.com/
- https://riojawine.com/es/doca-rioja/denominacion-de-origen-calificada/

</details>

### 13 · Jue 5/11 · educacion · Magnum: el formato de la mesa larga

**Imagen:** post-13-edu-magnum.png

**Por confirmar / notas de verificación:**

- Revisa la imagen de Higgsfield antes de diseñar: que no salgan botellas, decantadores, etiquetas, logotipos, texto ni menores de edad.
- '10 a 12 copas' es la cifra de WSET y depende de cuánto se sirva en cada copa.
- Párrafo del oxígeno corregido según la verificación. Ahora sigue la redacción de WSET: por el corcho entra más o menos el mismo oxígeno, repartido entre el doble de vino. Se quitaron 'el espacio de aire es el mismo' (WSET no lo dice, y en muchos magnums el corcho y el cuello son algo mayores) y 'tamaño ideal para guardar' (WSET atribuye lo de 'tamaño perfecto' a Churchill, como opinión, y la frase se refiere a beber). 'Muchos coleccionistas lo prefieren para guardar' es una afirmación general, sin cifras.
- Se quitó la viñeta 'Para guardar' porque repetía el párrafo anterior.
- 'Tarda más en enfriarse' es un consejo práctico que se deduce de la mayor masa térmica (WSET); no viene de una fuente específica.
- El post anuncia el rosado en magnum del viernes. Si el post 14 se mueve o cambia, quita la línea 'El viernes, un rosado en magnum...'.

<details><summary>Fuentes</summary>

- https://www.wsetglobal.com/knowledge-centre/blog/2026/what-makes-magnums-special-the-science-and-the-joy-of-bigger-bottles
- https://app.ckbk.com/reference/wine05383c13s001e025
- https://www.decanter.com/premium/champagne-magnum-vs-bottle-428310/
- https://www.decanter.com/shopping/larger-bottle-sizes-350782/

</details>

### 14 · Vie 6/11 · producto · Hampton Water Rosé Magnum

**Imagen:** product-images/65HAMPWT.jpg

**Por confirmar / notas de verificación:**

- DENOMINACIÓN, versión prudente: la página oficial del magnum dice AOP Languedoc, pero no es coherente con la añada (2024 en la URL y el título, 2025 en el encabezado). Por eso el caption y el overlay dicen solo 'Languedoc'. Si la etiqueta del magnum en existencia dice AOP Languedoc, puedes volver a poner 'AOP Languedoc' en el caption y en el overlay.
- SYRAH: el caption nombra Garnacha, Cinsault y Mourvèdre, que aparecen en todas las versiones revisadas. La web actual agrega Syrah, pero algunas añadas antiguas (como la 2017) no la incluían. Si la contraetiqueta del magnum la menciona, agrega 'y Syrah'.
- AÑADA del magnum en existencia no confirmada; el caption no menciona añada. No se usaron porcentajes de uvas: el que circula en tiendas (60/15/15/10) no es oficial.
- Crianza parcial en barrica: la web oficial la confirma, pero no dice qué proporción, cuánto tiempo ni qué tipo de roble. Por eso el caption no da detalles.
- SOCIOS confirmados en la web oficial: Jon Bon Jovi, su hijo Jesse Bongiovi y Gérard Bertrand. Cuida que el diseño no sugiera que Bon Jovi respalda a V612.
- Los maridajes oficiales son aperitivo, ensaladas, sushi y pescado a la parrilla. Pescado zarandeado y callo de hacha son la versión BCS de 'pescado a la parrilla'; Sabrina debe validarlos.
- No se mencionan puntuaciones: la web oficial cita 90 de Wine Spectator y 94 de Global Rosé Awards, pero para la botella de 75 cl, no para el magnum.
- Existencias: 9 magnums. A propósito, no se insinúa escasez.

<details><summary>Fuentes</summary>

- https://www.gerard-bertrand.com/en/products/hampton-water-2024-magnum-150cl-aop-languedoc
- https://www.gerard-bertrand.com/en/products/hampton-water-2025-75cl-rose-wine-aop-languedoc-1
- https://www.hamptonwaterwine.com/
- https://wineindustryadvisor.com/2023/03/29/hampton-water-announces-the-launch-of-its-new-2022-vintage-rose/
- https://beveragedynamics.com/2018/02/01/jon-bon-jovi-rose-diving-into-hampton-water/
- https://www.thedailymeal.com/drink/bon-jovi-rose-wine-hamptons/012918

</details>

### 15 · Dom 8/11 · boutique · La boutique por dentro: pasa, mira, pregunta

**Imagen:** PENDIENTE: foto real de la boutique (anaqueles o mostrador)

**Por confirmar / notas de verificación:**

- FALTA FOTO REAL de la boutique (anaqueles o mostrador). No usar Higgsfield. Ajusta el alt_text a lo que muestre la foto final.
- SURTIDO: se quitó 'Francia, España, California' porque no hay fuente sobre el surtido real. El caption ahora solo dice 'burbujas, blancos, rosados y tintos'. Si Sabrina confirma países (o vino mexicano), se pueden agregar.
- Se quitaron 'Aquí ninguna pregunta sobra' y 'Nosotros ponemos el criterio' porque sonaban a prometer asesoría personalizada, un servicio que el brief no confirma. El cierre usa CTA permitidos: pasar por la boutique o escribir por DM. Confirma que alguien revisa los DM con regularidad.
- #Sommelier se apoya en que Sabrina es sommelier certificada y no promete atención personal. Si se prefiere evitar cualquier lectura de servicio, cámbialo por #VinoEnLaPaz.
- No se inventaron horarios, dirección ni servicios. El post sale en domingo, pero no dice 'hoy' ni 'abierto'.
- Fechas: el puente del lunes 16 de noviembre está confirmado en Expansión y Uno TV. Thanksgiving es el jueves 26 de noviembre de 2026.
- Sin pregunta al final, a propósito: esta semana solo el post 13 cierra con pregunta.

<details><summary>Fuentes</summary>

- https://expansion.mx/tendencias/2026/01/26/dias-festivos-2026
- https://www.unotv.com/nacional/feriados-oficiales-2026-dias-descanso-obligatorio/

</details>

### 16 · Mar 10/11 · producto · Monteviejo Lindaflor Malbec

**Imagen:** product-images/LIFMA.jpg (foto real POS)

**Por confirmar / notas de verificación:**

- Nombre: el POS dice 'Linda Flor', pero la bodega lo escribe 'Lindaflor', en una sola palabra. Confírmalo en la etiqueta de la foto y corrige el POS si aplica.
- Confirma que la foto LIFMA es de Lindaflor Malbec y no de otra línea de Monteviejo (La Violeta, Petite Fleur, Lindaflor Blend).
- Que Monteviejo forma parte de Clos de los Siete lo dicen varias fuentes de terceros que coinciden (winewithseth, southamericawineguide). El sitio oficial de Monteviejo no lo menciona. Si prefieres afirmar solo lo que dice la bodega, quita esa frase.
- La altitud (1,100 m), las notas de cata y la crianza en barrica francesa salen de la ficha oficial actual. Pueden variar según el lote. No se menciona añada.
- La ficha oficial habla de 'producción limitada' y 'potencial de guarda'. No se usó, por la regla de no afirmar escasez.
- La línea 'El jueves te contamos cuándo vale la pena decantar' depende de que el post 17 salga el jueves 12. Si cambia el orden, quítala.
- Existencias en el POS: 5 botellas. El caption no menciona escasez.

<details><summary>Fuentes</summary>

- https://monteviejo.com.ar/products/lindaflor-malbec
- https://monteviejo.com.ar/
- https://www.winewithseth.com/winewiki/clos-de-los-siete/
- https://southamericawineguide.com/winery/bodega-monteviejo-winery/
- https://www.argentina.travel/actividades/valle-de-uco
- https://www.decanter.com/learn/how-to-decant-53904/

</details>

### 17 · Jue 12/11 · educacion · Decantar: cuándo sí y cuándo no

**Imagen:** post-17-edu-decantar.png (Higgsfield + diseño)

**Por confirmar / notas de verificación:**

- Imagen: revisa que no aparezca ninguna botella ni etiqueta. El chorro de vino debe entrar desde fuera del cuadro.
- 'Más o menos una hora antes' es una pauta general, no una regla fija, y depende del vino. El artículo de Decanter no cargó completo en la verificación, así que no se confirmó la cita de Steven Spurrier. Por eso el caption no cita a nadie y la pauta va suavizada.
- 'Desde la víspera (o al menos unas horas)' sigue la pauta habitual de 12 a 24 horas de pie para tintos con sedimento (themanual.com, nataliemaclean.com).
- 'La mayoría de los espumosos' no se puso como regla absoluta porque hay sommeliers que sí decantan Champagne. No se confirmó en Decanter.
- Se quitó Tannat de la lista de cepas para dejar el caption en 895 caracteres (el límite es 900).
- Este post lleva pregunta al final. El post 19 (lifestyle) no, para no repetir el recurso.

<details><summary>Fuentes</summary>

- https://www.decanter.com/learn/how-to-decant-53904/
- https://themanual.com/food-and-drink/how-to-decant-wine
- https://www.nataliemaclean.com/blog/decanting-wine/

</details>

### 18 · Vie 13/11 · producto · Philipponnat Royale Réserve Brut

**Imagen:** product-images/PHILIBRUT.jpg (foto real POS)

**Por confirmar / notas de verificación:**

- NOMBRE, revisar antes de publicar: el sitio oficial ya usa solo 'Réserve Perpétuelle Brut', pero iDealwine (18/10/2024) anunciaba el cambio como próximo. Se quitó la frase 'De ahí su nombre nuevo' y el caption nombra la cuvée de modo que sirva con cualquiera de las dos etiquetas. Revisa la foto PHILIBRUT. Si dice Royale Réserve, deja el caption como está. Si ya dice Réserve Perpétuelle, cambia la línea a 'Réserve Perpétuelle Brut, antes Royale Réserve, es la puerta de entrada a ese estilo:' y actualiza el campo wine y el POS. El título y el alt_text ya son neutrales.
- Grafía: se usa 'Mareuil-sur-Ay', sin diéresis, como lo escribe la casa. 'Aÿ' es el pueblo vecino.
- 'Reposa en roble': la ficha oficial dice barricas y foudres de roble; se usó 'roble' para cubrir los dos.
- No se dan porcentajes de mezcla ni tiempo sobre lías porque cambian según el lote base. La ficha vigente (base 2021) dice 66% Pinot Noir, 32% Chardonnay y 2% Meunier. Las notas de cata salen de esa ficha; la botella en inventario puede ser de un lote anterior.
- El Clos des Goisses se menciona solo como referencia de la casa. V612 no lo vende: no des a entender que está disponible.
- 'Más de 500 años de raíces familiares' viene del sitio oficial. No se usó la fecha 1522 porque la fuente oficial consultada no la da.
- Fecha: el lunes 16 de noviembre de 2026 es día de descanso obligatorio (art. 74, fracc. VI, LFT, tercer lunes de noviembre). Lo confirman unotv.com, expansion.mx y tusbuenasnoticias.com. No se consultó el DOF.
- El maridaje con papas fritas es criterio de sommelier, no viene de la ficha. La ficha recomienda aperitivo, aves, carnes blancas y charcutería.

<details><summary>Fuentes</summary>

- https://www.philipponnat.com/en/
- https://www.philipponnat.com/en/our-wines/
- https://www.philipponnat.com/en/gamme/reserve-perpetuelle/
- https://www.philipponnat.com/wp-content/uploads/2025/03/ft-philipponnat-en-reserve-perpetuelle-brut-b21.pdf
- https://www.philipponnat.com/en/gamme/clos-des-goisses/
- https://www.idealwine.net/champagne-philipponnat-nouvelle-etiquette-et-dernieres-cuvees/
- https://www.unotv.com/negocios/trabajar-dia-descanso-obligatorio-cuanto-deben-pagarte/

</details>

### 19 · Dom 15/11 · lifestyle · Domingo de puente en la playa

**Imagen:** post-19-lifestyle-puente-playa.png (Higgsfield)

**Por confirmar / notas de verificación:**

- Alcohol en la playa, sin verificar: no se encontró ningún reglamento de La Paz (Bando de Policía y Gobierno) ni regla de CONANP para el APFF Balandra que permita o prohíba alcohol o vidrio en la playa. El caption no nombra ninguna playa y ahora pide revisar las reglas de la playa que se elija, no solo las de las áreas protegidas. No nombres Balandra, El Tecolote ni Espíritu Santo sin confirmarlo antes. Si confirmas que el consumo en playa está prohibido, cambia el escenario a una terraza o casa frente al mar y ajusta el overlay ('arena') y la imagen.
- Imagen: debe llevar vasos irrompibles, no copas de cristal, y no mostrar personas, botellas ni marcas.
- Revisa que la comida generada (aguachile, tostadas, mango) se vea fresca y realista, y que el paisaje se parezca a La Paz (agua turquesa poco profunda, cerros rojizos) y no a una playa del Caribe.
- Este post no lleva pregunta al final; la del jueves (post 17) ya cumple ese papel en la semana.

<details><summary>Fuentes</summary>

- https://costasalvaje.org/wp-content/uploads/2024/10/Guia-Balandra_sin-QR-min-1.pdf
- https://www.unotv.com/negocios/trabajar-dia-descanso-obligatorio-cuanto-deben-pagarte/

</details>

### 20 · Mar 17/11 · producto · Lechuza Chardonnay Roble

**Imagen:** product-images/554LECH.jpg

**Por confirmar / notas de verificación:**

- Paso por madera: no hay ficha técnica oficial del Chardonnay Roble. El caption dice 'paso por madera' y no 'barrica', y no da tipo de roble ni meses. Si TERAVINO o la bodega confirman que es barrica, se puede volver a 'barrica' en el caption y en el overlay.
- Notas de cata: se quitaron 'piña madura, vainilla y almendra tostada' porque no se pudieron verificar (eran descripciones generales de los Chardonnay de la bodega). En su lugar van descriptores prudentes de un Chardonnay con roble (fruta amarilla, cítricos, notas tostadas, boca redonda). Sabrina debe confirmarlos con su propia cata y, si quiere, afinarlos.
- Revisar que la foto 554LECH.jpg muestre la etiqueta 'Roble' y no la 'Stainless Steel Chardonnay' de la misma bodega.
- Nombre de la bodega: el caption dice 'Lechuza'. Las fuentes la llaman 'Vinos Lechuza' o 'Lechuza Vineyard'. Confirmar que coincida con el nombre usado en el post 2.
- A propósito no se menciona la historia de la bodega (las fuentes dan 2001, 2005 o 2014) y ya se presentó en el post 2.
- Se quitó ridebaja.com de las fuentes porque respaldaba las notas de cata que se eliminaron.

<details><summary>Fuentes</summary>

- https://www.vivino.com/en/wineries/lechuza
- https://foodandpleasure.com/lechuza-valle-de-guadalupe/
- https://laroussecocina.mx/maridaje/vino/botellas/lechuza-chardonnay/

</details>

### 21 · Jue 19/11 · educacion · Beaujolais Nouveau y los 10 crus

**Imagen:** post-21-edu-beaujolais.png

**Por confirmar / notas de verificación:**

- Overlay neutral ('HOY SALE...') en lugar de 'LLEGÓ': no está confirmado que V612 tenga Beaujolais Nouveau en existencia. Si Sabrina lo confirma, se puede volver a 'LLEGÓ EL BEAUJOLAIS NOUVEAU' y agregar el cierre 'Disponible en V612 Wine Boutique · La Paz'.
- Imagen: se cambió el paisaje de viñedos de Beaujolais por una escena en el malecón de La Paz con dos copas de tinto ligero, para cumplir la regla 5 (estética BCS). Si Sabrina prefiere el paisaje de Beaujolais, tiene que aprobar la excepción de forma explícita.
- Maceración de los crus suavizada a 'en general, de 10 días o más'. La fuente oficial dice unos 10 a 15 días, pero el Fleurie La Levrattière del post 22 macera unos 20 días según su productor.
- 'Mañana te presentamos uno de ellos' depende de que el post 22 (Fleurie) salga el 20 de noviembre. Si cambia el orden, ajustar la frase.
- Que el 19 de noviembre de 2026 es el tercer jueves sale de aplicar la regla vigente desde 1985. No se encontró un anuncio oficial de 2026.
- Este es el único post de la semana con pregunta final. El post 23, también de educación, no la lleva.

<details><summary>Fuentes</summary>

- https://www.beaujolais.com/en/a-world-for-every-beaujolais/nouveau-by-beaujolais/
- https://www.beaujolais.com/en/2020/09/22/beaujolais-vinification-a-process-like-no-other/
- https://www.beaujolais.com/en/2024/07/09/ways-to-remember-the-10-beaujolais-crus/
- https://www.beaujolais.com/en/discover/know-how/the-vineyards-milestones/
- https://en.wikipedia.org/wiki/Beaujolais_nouveau
- https://www.decanter.com/learn/international-beaujolais-nouveau-day-468715/

</details>

### 22 · Vie 20/11 · producto · Joseph Viola & M. Chapoutier Fleurie 'Levrattière'

**Imagen:** product-images/FLEURIE.jpg

**Por confirmar / notas de verificación:**

- OBLIGATORIO antes de publicar: revisar la grafía en la etiqueta de FLEURIE.jpg. El caption, el overlay y el alt_text dicen 'La Levrattière'. En la web de Chapoutier aparece 'Levrattiere', sin acento, y en algunos materiales en francés 'Levratière'. Si la etiqueta es distinta, cambiarla en los tres campos.
- Notas de cata (guinda, zarzamora, iris, peonía) y servicio a 15 °C: salen de la ficha oficial de la añada 2020. Confirmar qué añada hay en inventario y que su ficha diga lo mismo. La añada no se menciona en el caption.
- Se cambió 'buena tensión' por 'boca suave y elegante, taninos finos y buena estructura', que es la traducción fiel de la nota del productor.
- chapoutier.com bloquea la lectura automática. Los datos (100% Gamay, arenas graníticas, notas, 15 °C, maridaje de Viola) se confirmaron con extractos indexados de la página oficial. Sabrina debe abrirla para revisarlos.
- Hay 6 botellas en existencia. No se menciona escasez, como piden las reglas.
- El 20 de noviembre es la conmemoración de la Revolución. El post no la menciona porque el vino es francés; el guiño a la Revolución quedó en el post 20.

<details><summary>Fuentes</summary>

- https://www.chapoutier.com/en/shop/lieu-dit-la-levrattiere/2020/422
- https://www.chapoutier.com/en/shop/lieu-dit-la-levrattiere/2019/422
- https://www.chapoutier.com/en/shop/partnerships/joseph-viola-et-michel-chapoutier-55
- https://www.toutlevin.com/article/joseph-viola-le-chef-mof-qui-gastronomise-la-cuisine-canaille
- https://www.lyoncapitale.fr/?p=101886
- https://danieletdenise.fr/la-cave-daniel-denise/
- https://www.discoverbeaujolais.com/articles/wine-and-food-pairing/perfect-pairings-with-beaujolais-wine/which-beaujolais-to-serve-for-thanksgiving
- https://en.wikipedia.org/wiki/Chapoutier

</details>

### 23 · Dom 22/11 · educacion · Cómo regalar vino

**Imagen:** post-23-edu-regalar-vino.png

**Por confirmar / notas de verificación:**

- La imagen ya no lleva la caja de regalo de madera, para que no parezca un servicio de envoltura o de cajas de V612. Ahora se centra en la tarjeta escrita a mano que menciona el caption. La tarjeta debe salir en blanco, sin texto.
- Se cambió 'blanco mexicano con barrica' por 'con roble', para que coincida con la corrección del post 20.
- Los ejemplos de 'Para sorprender' (un cru de Beaujolais, un blanco mexicano con roble) remiten a los productos de la semana sin nombrarlos ni dar precios. Confirmar que sigan en inventario el 22 de noviembre.
- 'Te ayudamos a elegir' ofrece consejo en la boutique o por DM. Confirmar que Sabrina quiere ofrecer recomendaciones por DM.
- Es un post de criterio editorial sin datos de terceros, por eso no lleva fuentes.

### 24 · Mar 24/11 · producto · La Crema Pinot Noir

**Imagen:** product-images/155JWPN.jpg

**Por confirmar / notas de verificación:**

- CONFIRMAR LA REGIÓN EN LA ETIQUETA ANTES DE PUBLICAR: no pude ver la foto (product-images/155JWPN.jpg). La Crema hace Pinot Noir de varias regiones: Sonoma Coast, Russian River, Anderson Valley, Arroyo Seco y también Willamette Valley, que está en Oregon (lacrema.com/wines). El que se vende en México suele ser el Sonoma Coast. Si la etiqueta dice Sonoma Coast, se puede precisar: 'Su Pinot Noir de Sonoma Coast es de cuerpo medio…'. Si dice Willamette Valley, el vino es de Oregon: hay que reescribir la segunda línea para que no parezca californiano.
- Corregido según la verificación: el cuerpo ahora es 'medio' (antes decía 'ligero'), por eso la línea en inglés dice 'supple' en lugar de 'light'. 'Arándano' se cambió por 'arándano rojo' (cranberry), y 'dedicada a' por 'centrada en', porque la casa también hace otras cepas y compra uva de Oregon.
- Las notas de cata (cereza roja, frambuesa, arándano rojo, fondo especiado, cuerpo medio) salen de reseñas del Sonoma Coast y cambian según la añada y la región. Confírmalas con la ficha técnica de la botella en tienda.
- No menciono añada, puntajes ni crianza: no se verificaron para la botella que está en tienda.
- Overlay: deja 'Thanksgiving pick' solo si te gusta el subtítulo en inglés. Si no, usa 'La Crema Pinot Noir para Thanksgiving'.
- Hay 6 en existencia. El caption no afirma escasez.

<details><summary>Fuentes</summary>

- https://www.lacrema.com/la-crema-40th-anniversary/
- https://www.lacrema.com/wines/
- https://bottlebarn.com/products/2023-la-crema-pinot-noir-sonoma-coast
- https://reservebar.com/products/la-crema-sonoma-coast-pinot-noir/GROUPING-92584.html
- https://mywinepal.com/2023/02/22/quick-review-la-crema-sonoma-coast-pinot-noir-2019/
- https://www.falstaff.com/nordics/wines/la-crema-2018-la-crema-pinot-noir-sonoma-coast
- https://winefolly.com/lifestyle/8-great-thanksgiving-wines-2016/
- https://chacunsonvin.winealign.com/articles/2014/10/10/turkey-time-with-bill-zacharkiw
- https://www.almanac.com/content/when-thanksgiving-day

</details>

### 25 · Jue 26/11 · lifestyle · Thanksgiving · gracias por la mesa larga

**Imagen:** post-25-lifestyle-thanksgiving.png

**Por confirmar / notas de verificación:**

- El Thanksgiving de Canadá fue el lunes 12 de octubre de 2026 (segundo lunes de octubre), así que la línea en inglés saluda a los canadienses como quienes 'gave thanks back in October'. Confirma que te gusta así.
- 'Estos primeros meses': el brief proponía 'primer año', pero la boutique abrió en 2026 (unos 4 meses al 26 de noviembre) y 'primer año' podría leerse como aniversario. Si prefieres otra fórmula, confirma la fecha de apertura.
- Revisa la imagen de Higgsfield: sin botellas, etiquetas, texto, logotipos ni menores. Que el pavo y las buganvilias se vean naturales.

<details><summary>Fuentes</summary>

- https://www.almanac.com/content/when-thanksgiving-day

</details>

### 26 · Vie 27/11 · producto · Uncle Nearest 1884 Small Batch Whiskey

**Imagen:** product-images/420UNCLE18.jpg

**Por confirmar / notas de verificación:**

- DECIDIR ANTES DE PUBLICAR (riesgo de reputación y de abasto). La empresa Uncle Nearest está bajo administración judicial (receivership) desde agosto de 2025, a raíz de una demanda de su acreedor Farm Credit Mid-America. En marzo de 2026 presentó una solicitud de bancarrota y el tribunal la desestimó. En mayo de 2026 el juez mantuvo y amplió la receivership. El receiver despidió a los cofundadores Fawn y Keith Weaver con efecto al 1 de junio de 2026 (se informó en julio). Desde junio de 2026 hay una carta de intención no vinculante para vender la marca y la destilería a un comprador confidencial. No se sabe si la venta se cerró ni si el abasto en México va a continuar. Fuentes: just-drinks.com/news/uncle-nearest-to-remain-under-court-control/ ; whiskymag.com/articles/uncle-nearest-faces-receivership-following-lawsuit/ ; news.bgov.com/delaware-brief/whiskey-maker-uncle-nearest-files-bankruptcy-as-ceo-sues-lender ; wsmv.com/2026/07/14/uncle-nearest-ceo-husband-fired-amid-financial-turmoil-court-filings-say/ ; fredminnick.com/2026/06/02/uncle-nearest-brand-reportedly-to-have-found-buyer/. Recomendación: confirma con el proveedor que habrá continuidad o cambia este post de viernes por otro producto. Si se publica, el caption habla solo de Nearest Green y no menciona la empresa ni a sus fundadores. Prepara una respuesta breve por si llegan comentarios sobre el tema.
- Corregido según la verificación: el filtrado con carbón de arce ya no se le atribuye como hecho, sino como 'la tradición le atribuye'. Que enseñó el oficio a Jack Daniel sí tiene respaldo: Brown-Forman lo reconoció en 2017 como primer maestro destilador de Jack Daniel's. La mención es histórica, no comercial.
- Agregué 'es un whiskey de Tennessee' para cumplir la regla 7 (qué es y de dónde es). No afirmo dónde se destila hoy.
- Las notas de cata ahora siguen la ficha oficial (unclenearest.com): miel y azúcar morena en nariz; caramelo, canela y madera especiada en boca; final largo y suave. Confírmalas al probarlo.
- No incluí por qué se llama '1884'. Según un comunicado de la marca de 2019, recuerda el último año en que Nearest barricó su propio destilado. Es un dato promocional: si lo quieres, agrégalo con atribución ('según la casa').
- No menciono edad ni graduación. La ficha oficial indica 93 proof (46.5%), pero no confirmé que la etiqueta que se vende en México tenga la misma graduación.
- Confirma que la foto real del POS es la expresión 1884 Small Batch.
- No se menciona Black Friday ni ninguna promoción. Hay 3 en existencia y el caption no afirma escasez.

<details><summary>Fuentes</summary>

- https://www.nearestgreen.com/about-nearest-green/
- https://www.history.com/articles/jack-daniels-enslaved-distiller-nathan-nearest-green
- https://en.wikipedia.org/wiki/Nathan_%22Nearest%22_Green
- https://vinepair.com/articles/ntk-uncle-nearest-whiskey/
- https://www.unclenearest.com/
- https://unclenearest.com/1884-small-batch-whiskey/
- https://americanwhiskeymag.com/reviews/23uncle-nearest-1884-small-batch-tennessee-whiskey/

</details>

### 27 · Dom 29/11 · cierre · Cierre Mesa Larga · nos vemos en diciembre

**Imagen:** post-27-cierre-diciembre.png

**Por confirmar / notas de verificación:**

- La primera línea menciona la ofrenda, el puente, el Beaujolais y el pavo. Confirma que el bloque sí publicó esos temas. Si alguno se cayó, quítalo de esa línea.
- 'Escríbenos por DM y lo pensamos juntos' no promete ningún servicio concreto: ni armado de regalos corporativos, ni entregas, ni descuentos. Confirma que habrá quien atienda los DM en diciembre.
- Revisa la imagen de Higgsfield: sin botellas, etiquetas, texto, logotipos ni personas identificables. Los detalles navideños deben quedar discretos.

<details><summary>Fuentes</summary>

- https://expansion.mx/tendencias/2025/12/12/cuando-empiezan-las-posadas-2025-mexico

</details>
