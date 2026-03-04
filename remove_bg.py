from PIL import Image
import os

features_dir = './assets/images/features'

# All images that need white background removed
files = [
    'cookie-scanner.png', 'categorization.png', 'consent-banner.png',
    'geo-targeting.png', 'consent-logging.png', 'privacy-policy.png',
    'cookie-policy.png', 'google-consent.png', 'iab-tcf.png',
    'multi-platform.png', 'multi-language.png', 'analytics.png',
    'detail-scan.png', 'detail-consent.png', 'detail-audit.png'
]

for filename in files:
    filepath = os.path.join(features_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} - not found")
        continue
    
    img = Image.open(filepath).convert('RGBA')
    data = img.getdata()
    
    new_data = []
    threshold = 240  # Pixels with R,G,B all above this are considered "white"
    for pixel in data:
        r, g, b, a = pixel
        if r > threshold and g > threshold and b > threshold:
            new_data.append((r, g, b, 0))  # Make transparent
        else:
            new_data.append(pixel)
    
    img.putdata(new_data)
    img.save(filepath, 'PNG')
    print(f"Removed white bg from {filename}")

print("\nDone! All white backgrounds removed.")
