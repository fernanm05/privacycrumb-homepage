from PIL import Image
import numpy as np
import shutil

# Ensure we have clean source
src = r'C:\Users\IT\.gemini\antigravity\brain\829b1ae2-965b-4b74-88c3-83b80303bccb\detail_audit_v3_1772586451878.png'
dst = r'./assets/images/features/detail-audit.png'
tmp = r'./assets/images/features/detail-audit-tmp.png'

# Copy fresh source
shutil.copy2(src, tmp)

# Open from temp, process, save to final destination
img = Image.open(tmp).convert('RGBA')
arr = np.array(img)
img.close()

# Make white pixels transparent
white_mask = (arr[:,:,0] > 240) & (arr[:,:,1] > 240) & (arr[:,:,2] > 240)
arr[white_mask, 3] = 0

result = Image.fromarray(arr)
result.save(dst)
result.close()

import os
os.remove(tmp)
print('Done!')
