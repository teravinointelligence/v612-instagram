# V612 Instagram — Contenido Editorial

Repositorio de manifests, captions y estructura de bloques de publicaciones de Instagram para **V612 Wine Boutique La Paz BCS** (@v612wineboutique).

## Estructura

Cada bloque cubre ~12 publicaciones (2 semanas) con un tema editorial.

| Bloque | Fechas | Tema |
|--------|--------|------|
| Bloque 1 | Jul 7–19, 2026 | — |
| Bloque 2 | Jul 22–Ago 2, 2026 | Cuaderno de Cata |
| Bloque 3 | Ago 3–14, 2026 | Maridaje BCS |

## Cómo seedear un bloque

```bash
cd /path/to/v612-web
node --env-file=.env.local scripts/seed-instagram.mjs \
  --manifest="PATH/bloque3/manifest.json" \
  --start-date=2026-08-03 \
  --hour=7
```

- `--hour` es hora local Los Cabos (UTC-7, sin DST)
- El script sube imágenes a Cloudflare R2 (`media.v612.mx`) e inserta en Supabase `ig_posts`
- Las fotos de botellas vienen de Google Drive carpeta "NUEVOS" (compartida por fer@freakteam.mx)
- Las imágenes de lifestyle/educación se generan con Higgsfield (sin botellas inventadas)

## Reglas editoriales

- **Nunca** usar imágenes de botellas generadas por IA — solo fotos reales del portafolio
- No repetir marcas entre bloques consecutivos
- Alternar: post de producto → post educativo/lifestyle
- Publicar 7am Los Cabos (14:00 UTC)
- Hashtags: siempre incluir `#V612WineBoutique` y `#MaridajeBCS` (o el tema del bloque)
