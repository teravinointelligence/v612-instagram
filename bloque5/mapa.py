#!/usr/bin/env python3
"""Genera bloque5/mapa-centro.svg: croquis de calles alrededor de V612 con datos de OpenStreetMap.
Uso: curl -o osm.xml "https://api.openstreetmap.org/api/0.6/map?bbox=-110.3145,24.1525,-110.3010,24.1640"
     python3 bloque5/mapa.py osm.xml
Datos © colaboradores de OpenStreetMap (ODbL)."""
import sys, math, os, xml.etree.ElementTree as ET

LAT, LON = 24.1576799, -110.3077578      # ficha de Google Maps de la tienda
W, H, RADIO = 936, 720, 400              # lienzo en px y metros del centro al borde horizontal
ESC = (W / 2) / RADIO
MAIN = {'Calle Héroes de Independencia': 'HÉROES DE INDEPENDENCIA', 'Calle Independencia': 'INDEPENDENCIA'}
REFS = {'Avenida 5 de Mayo': '5 DE MAYO', 'Calle Reforma': 'REFORMA', 'Calle Constitución': 'CONSTITUCIÓN',
        'Calle Josefa Ortiz de Domínguez': 'JOSEFA ORTIZ',
        'Calle Ignacio Manuel Altamirano': 'ALTAMIRANO', 'Calle 16 de Septiembre': '16 DE SEPTIEMBRE',
        'Calle Licenciado Primo Verdad': 'PRIMO VERDAD'}

root = ET.parse(sys.argv[1]).getroot()
nodes = {n.get('id'): (float(n.get('lat')), float(n.get('lon'))) for n in root.findall('node')}
k = math.cos(math.radians(LAT))
def xy(p):
    return (W / 2 + (p[1] - LON) * 111320 * k * ESC, H / 2 - (p[0] - LAT) * 111320 * ESC)

minor, major, main, parks, segs = [], [], [], [], {}
for w in root.findall('way'):
    t = {x.get('k'): x.get('v') for x in w.findall('tag')}
    pts = [xy(nodes[n.get('ref')]) for n in w.findall('nd') if n.get('ref') in nodes]
    if len(pts) < 2: continue
    d = 'M' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in pts)
    if t.get('leisure') == 'park':
        parks.append(d + 'Z'); continue
    hw = t.get('highway')
    if hw not in ('residential', 'tertiary', 'secondary', 'primary', 'unclassified', 'living_street', 'pedestrian'): continue
    name = t.get('name')
    (main if name in MAIN else major if hw in ('secondary', 'tertiary', 'primary') else minor).append(d)
    if name in MAIN or name in REFS:
        for a, b in zip(pts, pts[1:]):
            segs.setdefault(name, []).append((a, b))

def etiqueta(name, texto, color, dmin, dmax):
    best = None
    for a, b in segs.get(name, []):
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        r = math.hypot(mx - W / 2, my - H / 2)
        if not (120 < mx < W - 120 and 80 < my < H - 60 and dmin <= r <= dmax): continue
        L = math.hypot(b[0] - a[0], b[1] - a[1])
        if best is None or L > best[0]: best = (L, mx, my, a, b)
    if not best: return ''
    _, mx, my, a, b = best
    ang = math.degrees(math.atan2(b[1] - a[1], b[0] - a[0]))
    if ang > 90: ang -= 180
    if ang < -90: ang += 180
    return (f'<text transform="translate({mx:.1f} {my:.1f}) rotate({ang:.1f})" y="-12" text-anchor="middle" '
            f'font-family="Jost,sans-serif" font-weight="500" font-size="15" letter-spacing="3" fill="{color}">{texto}</text>')

labels = [etiqueta(n, t, '#C9A24C', 90, 260) for n, t in MAIN.items()] + \
         [etiqueta(n, t, 'rgba(244,236,216,.62)', 120, 420) for n, t in REFS.items()]
P = lambda ds, st: ''.join(f'<path d="{d}" {st}/>' for d in ds)
cx, cy = W / 2, H / 2
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<defs><clipPath id="c"><rect width="{W}" height="{H}"/></clipPath>
<radialGradient id="f" cx="50%" cy="50%" r="62%"><stop offset="70%" stop-color="#fff"/><stop offset="100%" stop-color="#000"/></radialGradient>
<mask id="m"><rect width="{W}" height="{H}" fill="url(#f)"/></mask></defs>
<g clip-path="url(#c)" mask="url(#m)" fill="none" stroke-linecap="round" stroke-linejoin="round">
{P(parks, 'fill="rgba(201,162,76,.10)" stroke="rgba(201,162,76,.25)" stroke-width="1"')}
{P(minor, 'stroke="rgba(244,236,216,.13)" stroke-width="7"')}
{P(major, 'stroke="rgba(244,236,216,.24)" stroke-width="10"')}
{P(main, 'stroke="rgba(201,162,76,.60)" stroke-width="10"')}
</g>
{''.join(labels)}
<g transform="translate({cx} {cy})"><circle r="30" fill="#1A2954" stroke="#C9A24C" stroke-width="1.5"/>
<path fill="#C9A24C" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/></g>
<g transform="translate({W - 46} 50)" fill="#C9A24C"><path d="M0 -22 L7 6 L0 0 L-7 6Z"/>
<text y="28" text-anchor="middle" font-family="Jost,sans-serif" font-weight="500" font-size="17">N</text></g>
<text x="{W - 10}" y="{H - 10}" text-anchor="end" font-family="Jost,sans-serif" font-size="12" fill="rgba(244,236,216,.45)">© OpenStreetMap</text>
</svg>'''
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mapa-centro.svg')
open(out, 'w').write(svg)
print('ok', out, len(svg))
