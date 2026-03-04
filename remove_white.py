from PIL import Image
import os

features_dir = './assets/images/features'
files = ['detail-scan.png', 'detail-consent.png', 'detail-audit.png']

for filename in files:
    filepath = os.path.join(features_dir, filename)
    img = Image.open(filepath).convert('RGBA')
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r > 240 and g > 240 and b > 240:
                pixels[x, y] = (r, g, b, 0)
    img.save(filepath, 'PNG')
    print(f'Done: {filename}')

print('All done!')
