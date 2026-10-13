"""Bundle v2/ into one offline file: KRONOCLOS_Interactive_Demo.html
Run after editing v2/site-config.js (or any file in v2/):  python3 build_single_file.py
"""
import base64, os, re

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'v2')
OUT = os.path.join(ROOT, 'KRONOCLOS_Interactive_Demo.html')

def read(name):
    with open(os.path.join(SRC, name), encoding='utf-8') as f:
        return f.read()

def data_uri(name, mime):
    with open(os.path.join(SRC, name), 'rb') as f:
        return f'data:{mime};base64,' + base64.b64encode(f.read()).decode()

MIME = {'.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ttf': 'font/ttf', '.woff2': 'font/woff2', '.webp': 'image/webp'}
SOURCES = read('index.html') + read('styles.css') + read('site.css') + read('app.js')
# Inline every file in v2/assets that the site actually references
assets = {}
for name in sorted(os.listdir(os.path.join(SRC, 'assets'))):
    ext = os.path.splitext(name)[1].lower()
    path = 'assets/' + name
    if name.startswith('og-'):
        continue  # social preview image is fetched by URL, never inlined
    if ext in MIME and path in SOURCES:
        assets[path] = data_uri(path, MIME[ext])

def inline_assets(text):
    for path, uri in assets.items():
        text = text.replace(path, uri)
    return text

html = read('index.html')
css = inline_assets(read('styles.css') + '\n' + read('site.css'))
js = inline_assets(read('site-config.js') + '\n' + read('data.js') + '\n' + read('app.js'))

html = re.sub(r'<link rel="preload"[^>]*>\n', '', html)
html = html.replace('<link rel="stylesheet" href="styles.css">\n<link rel="stylesheet" href="site.css">', f'<style>{css}</style>')
html = re.sub(r'<script src="[^"]+" defer></script>', '', html)
html = html.replace('href="favicon.svg"', 'href="' + data_uri('favicon.svg', 'image/svg+xml') + '"')
html = inline_assets(html)
html = html.replace('</body>', f'<script>{js}</script>\n</body>')

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(html)
print(f'Built {os.path.basename(OUT)} ({len(html) / 1e6:.2f} MB)')
