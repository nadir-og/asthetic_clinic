# SEO & OpenGraph Implementation Metadata Plan

This document details the configuration strategy for the target site identity, OpenGraph metadata previews, Twitter cards, search engine optimization tags, and the social preview asset strategy.

---

## 1. Target Site Identity
- **Brand Name**: Elixir Aesthetics & Health Care
- **Primary Proposition**: Premier Medical Aesthetics & Laser Clinic in Multan
- **Fully Unified Title String**: `Elixir Aesthetics & Health Care — Premier Medical Aesthetics & Laser Clinic in Multan`
- **Location Context**: Multan, Punjab, Pakistan
- **Core Focus**: Dermatological medical safety, state-of-the-art energy devices, PMC-registered board-certified specialists.

---

## 2. Open Graph (OG) Tag Strategy
Designed for high-impact previews on social/chat clients (WhatsApp, Facebook, iMessage, LinkedIn):

*   **`og:title`**: `Elixir Aesthetics & Health Care | Premier Medical Aesthetics Clinic Multan`
    *   *Rationale*: Keep under 60 characters to ensure it doesn't truncate. Highlights the location context immediately.
*   **`og:description`**: `Experience advanced medical-grade skincare, laser treatments, and hair transplants directed by specialist doctors at Multan's premier clinic. Claim up to 50% off privilege pricing.`
    *   *Rationale*: Stays within the 110-150 character limit. Focuses on premium services, clinic authority, and active promotion to drive click-throughs.
*   **`og:image`**: `https://elixiraesthetics.pk/assets/social-banner.jpg` (or local relative fallback `/social-banner.jpg`)
    *   *Dimension*: 1200x630px (Landscape 1.91:1 aspect ratio) for full-width card presentations.
*   **`og:url`**: `https://elixiraesthetics.pk/`
*   **`og:type`**: `website`

---

## 3. Twitter / X Card Configuration
Designed for full-bleed rich image cards on X/Twitter feeds:

*   **`twitter:card`**: `summary_large_image`
    *   *Rationale*: Shows the high-resolution 1200x630px social banner rather than a tiny square thumbnail.
*   **`twitter:title`**: `Elixir Aesthetics & Health Care | Premier Medical Aesthetics Clinic Multan`
*   **`twitter:description`**: `Advanced medical aesthetics, lasers, and hair transplant solutions by board-certified physicians in Multan. Claim 50% OFF seasonal privilege rates.`
*   **`twitter:image`**: `https://elixiraesthetics.pk/assets/social-banner.jpg`

---

## 4. Search Engine Optimization & Meta Tags
Core crawling indicators for Google and Bing search indexers:

*   **Canonical URL**: `<link rel="canonical" href="https://elixiraesthetics.pk/" />`
    *   *Rationale*: Avoids duplicate content issues across HTTP/HTTPS, WWW/non-WWW, or dev/prod environments.
*   **Keywords**: `Hydra Facial, Hair Transplant, Laser Clinic Multan, PRP Therapy, Botox Multan, Laser Hair Removal, Skin Whitening, Micro-needling, Elixir Aesthetics`
*   **Author**: `Elixir Aesthetics & Health Care`
*   **Theme Color**: `#FDFCFB`
    *   *Rationale*: Seamless blending with the light luxury aesthetics of the website background, matching the Chrome/Safari browser status bars.

---

## 5. Asset Strategy & Social Banner
- **Format**: High-quality compressed `.jpg` or `.png`.
- **Dimensions**: Exactly `1200 x 630` pixels.
- **Visual Grid**: Centered typography with the Elixir "E" luxury monogram badge, and clean, high-end, balanced photos of clinic interiors on the sides (meeting the luxury guidelines with zero template placeholders).
- **Favicon Format**: Scalable Vector Graphic (SVG) allowing high-fidelity rendering from `16x16` up to `512x512` without pixelation.
