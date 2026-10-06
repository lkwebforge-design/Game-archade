import os

files = [
    'package.json',
    'index.html',
    'metadata.json',
    'vite.config.ts',
    'tsconfig.json',
    'src/index.css',
    'src/main.tsx',
    'src/App.tsx',
    'src/types/index.ts',
    'src/utils/audio.ts',
    'src/components/ArtworkElements.tsx',
    'src/components/Navbar.tsx',
    'src/components/HeroSection.tsx',
    'src/components/HowItWorksSection.tsx',
    'src/components/InsightsScannerSection.tsx',
    'src/components/ProductLabSection.tsx',
    'src/components/ShowcaseGallerySection.tsx',
    'src/components/WhatsAppCTASection.tsx',
    'src/components/StudioLocationsSection.tsx',
    'src/components/ProjectModal.tsx',
    'src/components/ReelModal.tsx',
    'src/components/CaseStudyModal.tsx',
    'src/components/Footer.tsx',
    'src/components/WhatsAppFloatingButton.tsx'
]

out = '# AETHERIA Studio — Complete Source Code Export\n\n'
out += 'This file contains the complete source code for the AETHERIA interactive studio web application.\n\n'

for f in files:
    if os.path.exists(f):
        with open(f, 'r') as fp:
            content = fp.read()
        ext = f.split('.')[-1]
        lang = 'typescript' if ext in ['ts', 'tsx'] else ext
        out += f'---\n\n## File: `/{f}`\n\n```{lang}\n{content}\n```\n\n'

with open('/FULL_SOURCE_CODE.md', 'w') as fp:
    fp.write(out)

os.makedirs('/public', exist_ok=True)
with open('/public/FULL_SOURCE_CODE.md', 'w') as fp:
    fp.write(out)

print("Export completed successfully!")
