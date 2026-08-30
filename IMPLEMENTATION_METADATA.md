# Aura Medical Aesthetics — Vercel Web Analytics & SEO/OG Metadata Optimization Plan

This document details the audit of the current metadata status and outlines the technical implementation plan to transition the website's SEO, Open Graph, and Twitter metadata to a premium, generic white-label aesthetic clinic demo.

---

## 1. Metadata Audit & Investigation Results

Using file inspection of the template, the current `index.html` head tags contain:
*   **Current Title**: `Aura Medical Aesthetics | Advanced Medical Aesthetics & Hair Restoration`
*   **Current Description**: `Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists.`
*   **Current Canonical URL**: `https://auraaesthetics-demo.com/` (Should point to a canonical domain or setup)
*   **Current OG / Twitter Images**: `/social-banner.jpg` (Refers to local asset, but we need to verify its visual style and quality)
*   **Theme Color**: `#FDFCFB` (Matches the premium background aesthetic, to be kept)
*   **Favicons**: 
    *   Inline SVG icon in `index.html` matching `/favicon.svg`.
    *   `favicon.ico` and `apple-touch-icon.png` are referenced in `index.html` but do not exist in the `/public` folder.
*   **Robots Directive**: Found: `<meta name="robots" content="index, follow" />`.
*   **Structured JSON-LD**: A `MedicalBusiness` schema is present in `<head>`, but we need to verify its details.

---

## 2. Asset Audit & Replacement Specifications

To ensure high-quality, non-branded/premium local assets are loaded by all clients, we will verify, generate, and place the following files in the `/public` directory:

| Asset File | Target Path | Dimensions / Specs | Purpose |
| :--- | :--- | :--- | :--- |
| **OpenGraph Banner** | `/public/social-banner.jpg` | `1200 x 630 px` (Aspect ratio 1.91:1) | Rich preview image for WhatsApp, Facebook, iMessage, LinkedIn, X |
| **Standard Favicon** | `/public/favicon.ico` | Multi-size (`16x16`, `32x32`, `48x48`) | Fallback favicon for older browsers and address bars |
| **PNG Favicon** | `/public/favicon-32x32.png` | `32 x 32 px` | Standard tab favicon for modern browsers |
| **Apple Touch Icon** | `/public/apple-touch-icon.png` | `180 x 180 px` | Icon displayed when bookmarked or added to home screen on iOS |
| **SVG Monogram Favicon** | `/public/favicon.svg` | Scalable Vector (Gold "A" luxury logo) | High-fidelity scalable monogram favicon |

---

## 3. Technical Architecture (Vite React Site)

Since the website is built using **Vite + React (SPA)** and not Next.js:
1. **Vercel Web Analytics**: We will install `@vercel/analytics` and inject the `<Analytics />` component from `@vercel/analytics/react` inside the React application root in `src/main.tsx`.
2. **Static Metadata**: We will optimize metadata directly in the static `index.html` file. This ensures search engine crawlers and social scrapers receive the correct metadata without needing client-side JavaScript execution.

### Structured JSON-LD Data
We will review/verify the embedded `<script type="application/ld+json">` tag in `index.html` representing Aura Medical Aesthetics:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Aura Medical Aesthetics",
  "alternateName": "The Aesthetic Clinic",
  "description": "Advanced medical aesthetics, skincare, laser treatments, and hair density restoration protocols directed by board-certified specialists.",
  "image": "https://auraaesthetics-demo.com/social-banner.jpg",
  "priceRange": "$$",
  "telephone": "123-456-7890",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Luxury Boulevard",
    "addressLocality": "Prime Medical District",
    "addressRegion": "Punjab",
    "postalCode": "60000",
    "addressCountry": "PK"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "13:00",
    "closes": "21:00"
  }
}
```

---

## 4. Interactive Checklist

### Phase 1: Setup & Dependencies
- [ ] Install dependency: `npm i @vercel/analytics`
- [ ] Inject `<Analytics />` from `@vercel/analytics/react` into `src/main.tsx`.

### Phase 2: Asset Auditing & Preparation
- [ ] Audit the existing `public/social-banner.jpg` (verify format and aspect ratio).
- [ ] Generate `/public/favicon-32x32.png` matching the gold "A" luxury logo.
- [ ] Generate `/public/apple-touch-icon.png` (180x180 png) matching the gold "A" luxury logo.
- [ ] Generate `/public/favicon.ico` using standard tools/scripts.

### Phase 3: Metadata Tag Implementation
- [ ] Verify `index.html` titles and description tags are fully consistent.
- [ ] Audit standard robots meta tag (`<meta name="robots" content="index, follow" />`).
- [ ] Standardize canonical, Open Graph, and Twitter urls (`https://auraaesthetics-demo.com/`).
- [ ] Validate structured JSON-LD MedicalBusiness schema.

### Phase 4: Build & Verification
- [ ] Build the site using `npm run build` to verify there are no compilation errors.
- [ ] Inspect output index.html to ensure all head tags render correctly.
- [ ] Check mobile viewport responsiveness and favicon loading.
