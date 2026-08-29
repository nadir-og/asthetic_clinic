# SEO & Open Graph (OG) Metadata Optimization Plan

This document details the audit of the current metadata status and outlines the technical implementation plan to transition the website's SEO, Open Graph, and Twitter metadata from specific/default branding to a premium, generic white-label aesthetic clinic demo.

---

## 1. Metadata Audit & Investigation Results

Using Chrome DevTools and source inspection on the running dev environment, here is the current `<head>` configuration:

*   **Current Title**: `Elixir Aesthetics & Health Care | Premier Medical Aesthetics Clinic Multan` (Requires generalization)
*   **Current Description**: `Experience advanced medical-grade skincare, laser treatments, and hair transplants directed by specialist doctors at Multan's premier clinic. Claim up to 50% off privilege pricing.` (Requires generalization)
*   **Current Canonical URL**: `https://elixiraesthetics.pk/` (Requires generic or fallback setup)
*   **Current OG / Twitter Images**: `https://elixiraesthetics.pk/assets/social-banner.jpg` (Points to an external production domain, does not exist in the local project public assets)
*   **Theme Color**: `#FDFCFB` (Matches the premium background aesthetic, should be kept)
*   **Favicon**: Inline SVG format (Good, but lacks standard PNG/ICO fallbacks and apple-touch-icon configurations)
*   **Missing Fields**:
    *   No `<meta name="robots" content="index, follow" />` directives.
    *   No structured JSON-LD schema for search engines (LocalBusiness or MedicalBusiness).

---

## 2. Asset Audit & Replacement Specifications

To replace missing/external assets with high-quality local assets, the following files will be added to the `/public` directory:

| Asset File | Target Path | Dimensions / Specs | Purpose |
| :--- | :--- | :--- | :--- |
| **OpenGraph Banner** | `/public/social-banner.jpg` | `1200 x 630 px` (Aspect ratio 1.91:1) | Rich preview image for WhatsApp, Facebook, iMessage, LinkedIn, X |
| **Standard Favicon** | `/public/favicon.ico` | Multi-size (`16x16`, `32x32`, `48x48`) | Fallback favicon for older browsers and address bars |
| **PNG Favicon** | `/public/favicon-32x32.png` | `32 x 32 px` | Standard tab favicon for modern browsers |
| **Apple Touch Icon** | `/public/apple-touch-icon.png` | `180 x 180 px` | Icon displayed when bookmarked or added to home screen on iOS |
| **SVG Monogram Favicon** | `/public/favicon.svg` | Scalable Vector (Gold "A" luxury logo) | High-fidelity scalable monogram favicon |

---

## 3. Technical Architecture (Vite React Site)

Since the website is built using **Vite + React (SPA)** and not Next.js, we will optimize metadata directly in the static `index.html` file. This ensures search engine crawlers and social scrapers receive the correct metadata without needing JavaScript execution.

### Structured JSON-LD Data
We will embed a `<script type="application/ld+json">` tag in `index.html` representing a generic, premium medical clinic to boost search visibility:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Aura Aesthetics",
  "alternateName": "Premium Aesthetic Clinic",
  "description": "Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists.",
  "image": "https://auraaesthetics-demo.com/social-banner.jpg",
  "priceRange": "$$",
  "telephone": "000-000-0000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Boulevard",
    "addressLocality": "Your City",
    "addressRegion": "Your Region",
    "postalCode": "00000",
    "addressCountry": "US"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "13:00",
    "closes": "21:00"
  }
}
```

---

## 4. Interactive Checklist

### Phase 1: Setup & Asset Preparation
- [ ] Create and design standard placeholder assets in `/public` using simple luxury monograms (Aura "A") with CSS/SVG tools.
- [ ] Save the OpenGraph banner `/public/social-banner.jpg` (1200x630).
- [ ] Save `/public/favicon.svg`, `/public/favicon-32x32.png`, `/public/apple-touch-icon.png`, and `/public/favicon.ico`.

### Phase 2: Metadata Implementation
- [ ] Update `index.html` static title to: `Aura Aesthetics | Advanced Medical Aesthetics & Hair Restoration`.
- [ ] Update meta descriptions and tags in `index.html` to reflect "Aura Aesthetics" and "Your City Clinic".
- [ ] Replace external URLs in `canonical`, `og:image`, and `twitter:image` tags with relative site paths or configurable environment placeholders.
- [ ] Add the `<meta name="robots" content="index, follow" />` tag.
- [ ] Embed the structured JSON-LD `MedicalBusiness` schema inside the `<head>` of `index.html`.

### Phase 3: Verification & Social Validation
- [ ] Build the site using `npm run build` to verify there are no compilation errors.
- [ ] Check tags inside dev browser using Chrome DevTools `document.head` queries.
- [ ] Inspect mobile viewport metadata rendering.
- [ ] Verify favicon resolution in modern browser tab bar.
