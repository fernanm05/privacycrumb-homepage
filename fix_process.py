with open('index-3.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace process item titles
c = c.replace('Input Processing', 'Add One Script')
c = c.replace('Holistic Perception', 'Auto-Scan Cookies')
c = c.replace('Generate Response', 'Show Consent Banner')
c = c.replace('Output Delivery', 'Stay Compliant')

# Replace chatbot descriptions one by one
old_desc = 'The chatbot reviews user\u2019s message or query and uses nlp.'
descs = [
    'Drop a single line of code into your website. Works with WordPress, Shopify, Wix, or any platform.',
    'Our crawler instantly detects all cookies, trackers, and third-party scripts on your site.',
    'A fully customizable, regulation-compliant banner appears for your visitors automatically.',
    'Every consent is logged with tamper-proof records. Policies auto-update as regulations change.'
]

for new_desc in descs:
    c = c.replace(old_desc, new_desc, 1)

with open('index-3.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done!')
