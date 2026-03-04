with open('features.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Revert icon background to original gradient since images now have white bg
old_css = """.pc-feat-card-v2 .feat-icon {
              width: 56px;
              height: 56px;
              border-radius: 14px;
              background: #ffffff;
              border: 1.5px solid rgba(108, 60, 224, 0.15);
              box-shadow: 0 2px 8px rgba(108, 60, 224, 0.08);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              font-size: 24px;
              overflow: hidden;
            }"""

new_css = """.pc-feat-card-v2 .feat-icon {
              width: 56px;
              height: 56px;
              border-radius: 14px;
              background: linear-gradient(135deg, rgba(108, 60, 224, 0.1), rgba(99, 102, 241, 0.08));
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 20px;
              font-size: 24px;
              overflow: hidden;
            }"""

c = c.replace(old_css, new_css)

with open('features.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Done!')
