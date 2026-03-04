with open('index-3.html', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('Supercharge your Coding <br />Environment.', 'Ready to Make Your Website<br />Truly Compliant?')
c = c.replace('Works with all major wallets', 'Full features included in trial')

with open('index-3.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done!')
