import urllib.request
import re

html = urllib.request.urlopen('https://wheelcrafts.in/').read().decode('utf-8')
images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
for img in images[:10]:
    if img.startswith('//'):
        print('https:' + img)
    else:
        print(img)
