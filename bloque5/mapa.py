#!/usr/bin/env python3
"""Genera bloque5/mapa-centro.svg: croquis de calles alrededor de V612 con datos de OpenStreetMap.
Uso: curl -o osm.xml "https://api.openstreetmap.org/api/0.6/map?bbox=-110.3145,24.1525,-110.3010,24.1640"
     python3 bloque5/mapa.py osm.xml
Datos © colaboradores de OpenStreetMap (ODbL)."""
import sys, math, os, xml.etree.ElementTree as ET

LAT, LON = 24.1576799, -110.3077578      # ficha de Google Maps de la tienda
W, H, RADIO = 936, 720, 470              # lienzo en px y metros del centro al borde horizontal
ESC = (W / 2) / RADIO
DESPL = 140                              # metros que el encuadre se corre al este para incluir el estadio
REFERENCIAS = {'Estadio Guaycura': 'ESTADIO GUAYCURA'}   # polígonos con etiqueta
FONDO = {'Estadio Arturo C. Nahl'}       # polígonos vecinos, sin etiqueta
# Negocio contiguo (ficha de Google Maps, plus code 5M5R+2R: a ~20 m de la tienda). Va como nota
# pegada al pin porque a esta escala los dos puntos se enciman.
VECINO = ('JUNTO A', 'COSMOS TOSTADORES DE CAFÉ')
VX, VY, VW, VH = -4, 74, 292, 58        # centro de la nota respecto al pin, y su tamaño
MAIN = {'Calle Héroes de Independencia': 'HÉROES DE INDEPENDENCIA', 'Calle Independencia': 'INDEPENDENCIA'}
REFS = {'Avenida 5 de Mayo': '5 DE MAYO', 'Calle Reforma': 'REFORMA', 'Calle Constitución': 'CONSTITUCIÓN',
        'Calle Josefa Ortiz de Domínguez': 'JOSEFA ORTIZ',
        'Calle Ignacio Manuel Altamirano': 'ALTAMIRANO', 'Calle 16 de Septiembre': '16 DE SEPTIEMBRE'}

root = ET.parse(sys.argv[1]).getroot()
nodes = {n.get('id'): (float(n.get('lat')), float(n.get('lon'))) for n in root.findall('node')}
k = math.cos(math.radians(LAT))
def xy(p):
    return (W / 2 + ((p[1] - LON) * 111320 * k - DESPL) * ESC, H / 2 - (p[0] - LAT) * 111320 * ESC)
PX, PY = W / 2 - DESPL * ESC, H / 2      # posición de la tienda en el lienzo

minor, major, main, parks, segs, refs, fondo = [], [], [], [], {}, [], []
for w in root.findall('way'):
    t = {x.get('k'): x.get('v') for x in w.findall('tag')}
    pts = [xy(nodes[n.get('ref')]) for n in w.findall('nd') if n.get('ref') in nodes]
    if len(pts) < 2: continue
    d = 'M' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in pts)
    if t.get('leisure') == 'park':
        parks.append(d + 'Z'); continue
    if t.get('leisure') == 'stadium' and t.get('name') in REFERENCIAS:
        cx_ = sum(x for x, _ in pts[:-1]) / (len(pts) - 1); cy_ = sum(y for _, y in pts[:-1]) / (len(pts) - 1)
        refs.append((d + 'Z', cx_, cy_, REFERENCIAS[t['name']])); continue
    if t.get('leisure') == 'stadium' and t.get('name') in FONDO:
        fondo.append(d + 'Z'); continue
    hw = t.get('highway')
    if hw not in ('residential', 'tertiary', 'secondary', 'primary', 'unclassified', 'living_street', 'pedestrian'): continue
    name = t.get('name')
    (main if name in MAIN else major if hw in ('secondary', 'tertiary', 'primary') else minor).append(d)
    if name in MAIN or name in REFS:
        for a, b in zip(pts, pts[1:]):
            segs.setdefault(name, []).append((a, b))

puestas = [(PX, PY, 40)]                 # (x, y, radio) de lo ya colocado: pin, referencias, etiquetas
def etiqueta(name, texto, color, dmin, dmax):
    """Coloca la etiqueta sobre el tramo visible más largo que no choque con otra."""
    radio = len(texto) * 6.2 + 10
    cands = []
    for a, b in segs.get(name, []):
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        r = math.hypot(mx - PX, my - PY)
        if not (120 < mx < W - 120 and 80 < my < H - 60 and dmin <= r <= dmax): continue
        cands.append((math.hypot(b[0] - a[0], b[1] - a[1]), mx, my, a, b))
    for _, mx, my, a, b in sorted(cands, reverse=True):
        if any(math.hypot(mx - x, my - y) < (radio + r2) * 0.62 for x, y, r2 in puestas): continue
        puestas.append((mx, my, radio))
        ang = math.degrees(math.atan2(b[1] - a[1], b[0] - a[0]))
        if ang > 90: ang -= 180
        if ang < -90: ang += 180
        return (f'<text transform="translate({mx:.1f} {my:.1f}) rotate({ang:.1f})" y="-12" text-anchor="middle" '
                f'font-family="Jost,sans-serif" font-weight="500" font-size="15" letter-spacing="3" fill="{color}">{texto}</text>')
    return ''

for _, x, y, t in refs: puestas.append((x, y, 80))
for dx in (-90, 0, 90): puestas.append((PX + VX + dx, PY + VY, 70))
labels = [etiqueta(n, t, '#C9A24C', 90, 300) for n, t in MAIN.items()] + \
         [etiqueta(n, t, 'rgba(244,236,216,.62)', 110, 520) for n, t in REFS.items()]
P = lambda ds, st: ''.join(f'<path d="{d}" {st}/>' for d in ds)
cx, cy = PX, PY
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">
<defs><clipPath id="c"><rect width="{W}" height="{H}"/></clipPath>
<radialGradient id="f" cx="50%" cy="50%" r="64%"><stop offset="76%" stop-color="#fff"/><stop offset="100%" stop-color="#000"/></radialGradient>
<mask id="m"><rect width="{W}" height="{H}" fill="url(#f)"/></mask></defs>
<g clip-path="url(#c)" mask="url(#m)" fill="none" stroke-linecap="round" stroke-linejoin="round">
{P(parks, 'fill="rgba(201,162,76,.10)" stroke="rgba(201,162,76,.25)" stroke-width="1"')}
{P(fondo, 'fill="rgba(244,236,216,.05)" stroke="rgba(244,236,216,.16)" stroke-width="1"')}
{P([r[0] for r in refs], 'fill="rgba(201,162,76,.16)" stroke="rgba(201,162,76,.75)" stroke-width="1.5"')}
{P(minor, 'stroke="rgba(244,236,216,.13)" stroke-width="7"')}
{P(major, 'stroke="rgba(244,236,216,.24)" stroke-width="10"')}
{P(main, 'stroke="rgba(201,162,76,.60)" stroke-width="10"')}
</g>
{''.join(labels)}
{''.join(f'<text x="{x:.1f}" y="{y:.1f}" text-anchor="middle" font-family="Jost,sans-serif" font-weight="500" font-size="14" letter-spacing="2.5" fill="#C9A24C"><tspan x="{x:.1f}" dy="-4">{t.split()[0]}</tspan><tspan x="{x:.1f}" dy="19">{" ".join(t.split()[1:])}</tspan></text>' for _, x, y, t in refs)}
<g transform="translate({cx + VX} {cy + VY})"><line x1="{-VX}" y1="{-VY + 30}" x2="{-VX}" y2="{-VH / 2}" stroke="#C9A24C" stroke-width="1.5"/>
<rect x="{-VW / 2}" y="{-VH / 2}" width="{VW}" height="{VH}" rx="4" fill="#1A2954" stroke="rgba(201,162,76,.75)" stroke-width="1.5"/>
<text text-anchor="middle" font-family="Jost,sans-serif" font-weight="500" letter-spacing="2.5"><tspan x="0" y="-7" font-size="11" fill="rgba(244,236,216,.7)">{VECINO[0]}</tspan><tspan x="0" y="14" font-size="14" fill="#C9A24C">{VECINO[1]}</tspan></text></g>
<g transform="translate({cx} {cy})"><circle r="30" fill="#1A2954" stroke="#C9A24C" stroke-width="1.5"/>
<path fill="#C9A24C" d="M0 -22 L3 -3 L22 0 L3 3 L0 22 L-3 3 L-22 0 L-3 -3Z"/></g>
<g transform="translate({W - 46} 50)" fill="#C9A24C"><path d="M0 -22 L7 6 L0 0 L-7 6Z"/>
<text y="28" text-anchor="middle" font-family="Jost,sans-serif" font-weight="500" font-size="17">N</text></g>
<text x="{W - 10}" y="{H - 10}" text-anchor="end" font-family="Jost,sans-serif" font-size="12" fill="rgba(244,236,216,.45)">© OpenStreetMap</text>
</svg>'''
out = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'mapa-centro.svg')
open(out, 'w').write(svg)
print('ok', out, len(svg))
