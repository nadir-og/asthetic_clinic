# Aura Medical Aesthetics — SEO & Open Graph Metadata Optimization Plan

This document details the audit of the current metadata status and outlines the technical implementation plan to transition the website's SEO, Open Graph, and Twitter metadata to a premium, generic white-label aesthetic clinic demo.

---

## 1. Metadata Audit & Investigation Results

Using file inspection and live page fetching of `https://asthetic-clinic.vercel.app/`, the current `index.html` head tags contain:
*   **Current Title**: `Aura Medical Aesthetics | Advanced Medical Aesthetics & Hair Restoration`
*   **Current Description**: `Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists.`
*   **Current Canonical URL**: `https://asthetic-clinic.vercel.app/`
*   **Current OG / Twitter Images**: `https://asthetic-clinic.vercel.app/social-banner.jpg`
    *   *Note*: The current `social-banner.jpg` is a treatment room image. It is beautiful, but does not capture the full landing page context. We will replace this with a high-fidelity website snapshot.
*   **Theme Color**: `#FDFCFB` (Matches the premium background aesthetic)
*   **Favicons**: 
    *   `favicon.svg`: Luxury custom gold "A" monogram on a dark background.
    *   `favicon-32x32.png`: 32x32 PNG of the luxury gold "A" monogram.
    *   `apple-touch-icon.png`: 180x180 PNG of the luxury gold "A" monogram.
    *   `favicon.ico`: 32x32 pixelated custom gold "A" monogram.

---

## 2. Proposed Changes

We will implement a robust set of metadata tags in `index.html` and replace the placeholder social banner with a custom website snapshot.

### Metadata Tags Expansion (in `index.html`)

We will add the following comprehensive SEO and Open Graph tags:

```html
<!-- Primary Meta Tags -->
<title>Aura Medical Aesthetics | Advanced Medical Aesthetics & Hair Restoration</title>
<meta name="title" content="Aura Medical Aesthetics | Advanced Medical Aesthetics & Hair Restoration" />
<meta name="description" content="Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists." />
<meta name="keywords" content="Hydra Facial, Hair Density Restoration, Laser Clinic, PRP Therapy, Botox, Laser Hair Removal, Skin Whitening, Micro-needling, Aura Medical Aesthetics" />
<meta name="author" content="Aura Medical Aesthetics" />
<meta name="theme-color" content="#FDFCFB" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://asthetic-clinic.vercel.app/" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://asthetic-clinic.vercel.app/" />
<meta property="og:title" content="Aura Medical Aesthetics | Advanced Medical Aesthetics & Hair Restoration" />
<meta property="og:description" content="Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists." />
<meta property="og:image" content="https://asthetic-clinic.vercel.app/social-banner.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Aura Medical Aesthetics landing page snapshot showing advanced clinical services and luxury interior." />
<meta property="og:site_name" content="Aura Medical Aesthetics" />
<meta property="og:locale" content="en_US" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://asthetic-clinic.vercel.app/" />
<meta name="twitter:title" content="Aura Medical Aesthetics | Advanced Medical Aesthetics & Hair Restoration" />
<meta name="twitter:description" content="Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists." />
<meta name="twitter:image" content="https://asthetic-clinic.vercel.app/social-banner.jpg" />
<meta name="twitter:image:alt" content="Aura Medical Aesthetics landing page snapshot." />

<!-- Geographic Metadata -->
<meta name="geo.region" content="PK-PB" />
<meta name="geo.placename" content="Prime Medical District, Multan" />
<meta name="geo.position" content="30.1575;71.5249" />
<meta name="ICBM" content="30.1575, 71.5249" />
```

### Custom Website Snapshot Generation

To replace the treatment room photo with an actual website preview snapshot that shows the correct brand name ("Aura Medical Aesthetics"), we will:
1. Capture the page at 1200x630 using Playwright to get a high-quality preview.
2. Convert it to a optimized JPEG file and save it directly to `public/social-banner.jpg`.
3. The Playwright script to run:
   ```python
   from playwright.sync_api import sync_playwright
   
   with sync_playwright() as p:
       browser = p.chromium.launch(headless=True)
       page = browser.new_page(viewport={'width': 1200, 'height': 630})
       page.goto('https://asthetic-clinic.vercel.app/')
       page.wait_for_timeout(2000) # Wait for animations and typewriter text to settle
       page.screenshot(path='public/social-banner.jpg', type='jpeg', quality=90)
       browser.close()
   ```

---

## 3. Interactive Checklist

### Phase 1: Snapshot Generation
- [ ] Run the Playwright screenshot script to generate `public/social-banner.jpg` (1200x630 JPEG).
- [ ] Visually verify `public/social-banner.jpg` layout, typography, and correct logo ("Aura").

### Phase 2: Metadata Tag Implementation
- [ ] Add the complete meta tags block to `index.html`.
- [ ] Validate canonical URLs, title, description, and OG tag values.

### Phase 3: Build & Verification
- [ ] Build the site using `npm run build`.
- [ ] Confirm no build or typecheck warnings.
- [ ] Preview the production build using `npm run preview` to verify that assets are loaded correctly.
