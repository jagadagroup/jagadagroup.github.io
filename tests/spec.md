# Jagada Group Website — Migration Parity Specification

> **Purpose:** Capture the current site's behavior as a contract. The migrated Next.js site must pass all the same tests. This spec defines WHAT the site does, not HOW (Pug/Express).

## Phase 0: Testing — COMPLETE (2026-05-16)

- **100 tests passing** — 85 Playwright E2E (desktop + mobile) + 15 Jest data integrity
- Express dev server fixed for testing (removed broken node-sass, reordered middleware)
- All tests verify the production site's current behavior as a baseline for migration parity

---

## 1. URL Routes & Pages

| # | Route | Title (from `<title>`) | Status |
|---|-------|------------------------|--------|
| 1 | `/` | Jagada Industries | Root homepage |
| 2 | `/home` | Jagada Industries | Duplicate of `/` |
| 3 | `/about-us` | Jagada Industries | About + contacts |
| 4 | `/contact-us` | Jagada Industries | Contact info + enquiry form |
| 5 | `/products` | Jagada Industries | Full product catalog grid |
| 6 | `/magnalium` | Jagada Industries | Magnalium-only product grid |
| 7 | `/magnesium` | Jagada Industries | Magnesium-only product grid |
| 8 | `/product?id=1` | Jagada Industries | Product detail (dynamic `id` 1-11) |
| 9 | `/production-technology` | Jagada Industries | Prod tech page |
| 10 | `/production-quality` | Jagada Industries | Quality page |
| 11 | `/research-and-development` | Jagada Industries | R&D page |
| 12 | `/customers` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 13 | `/blogs` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 14 | `/jobs` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 15 | `/press` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 16 | `/resource-center` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 17 | `/help-center` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 18 | `/product-status` | Jagada Industries | PAGE UNDER CONSTRUCTION |
| 19 | `/support` | Jagada Industries | PAGE UNDER CONSTRUCTION |

**Also:** `/es-ES/*` — Spanish locale mirror of pages 1-17 (minus `/es-ES/product-status`).

---

## 2. Shared Chrome (Layout) — Present On All Pages

### 2.1 HTML Structure

- `<html>` — no `lang` attribute
- `<head>` contains:
  - `<meta name="keywords">` — multi-language pyrotechnic keywords
  - `<title>` — "Jagada Industries" (same on every page)
  - `<meta name="description">` — "Pyrotechnic raw materials"
  - `<meta name="robots">` — `index,follow`
  - `<meta name="google-site-verification">` — present
  - Bootstrap 4.1 CSS (CDN)
  - Font Awesome 4.7 CSS (CDN)
  - Google Fonts: Roboto, Roboto Condensed (CDN)
  - `/stylesheets/global.css` (local)
  - `<meta name="viewport">` — `width=device-width, initial-scale=1`
  - `/stylesheets/layout.css` (local)
  - Per-page stylesheet (e.g., `/stylesheets/index.css`)
- `<body>` begins with:
  - Google Translate inline script (`googleTranslateElementInit`)
  - Google Translate external script (`translate.google.com/translate_a/element.js`)
  - `.container-fluid.position-fixed > .row.decorator` (top decorator bar)
  - Navigation menu (`<nav>`)
  - `<div class="page w-100">` — page content wrapper
    - `<header>` (empty block)
    - Page-specific content
    - `<footer>` containing footer partial
  - `<div id="menu-button">` — hamburger trigger (3 empty spans)
  - CDN scripts: jQuery 3.3.1, Popper 1.14, Bootstrap 4.1 JS
  - `/javascripts/master.js`
  - Per-page JS (e.g., `/javascripts/index.js`)

### 2.2 Navigation Menu

- `<nav.row.no-gutters.d-flex>` contains a `<ul.menu>` with 6 top-level items:
  1. `home` → `/home`
  2. `about us` → `/about-us`
  3. `products` → `/products` (expandable submenu)
     - `Magnalium Powder` → `/magnalium`
     - `Magnesium Powder` → `/magnesium`
     - `Titanium Powder` → `/product?id=6`
  4. `production technology` → `/production-technology` (expandable submenu)
     - `research & Development` → `/research-and-development`
  5. `Production Quality` → `/production-quality`
  6. `contact us` → `/contact-us`
- Menu items have white text (`color:#fff`)
- Submenus use `.menu-rollout` prefix `+  ` before name
- Submenus hidden by default (`.d-none`)
- Hamburger button (`#menu-button`) triggers off-canvas menu animation

### 2.3 Footer

Footer present on all pages with 7 sections:

1. **PRODUCTS** — lists all 11 products from `products.json`, last one (Titanium) links via `href="/product?id=6"`
2. **COMPANY** — About Us, Customers, Press, Jobs
3. **RESOURCES** — Resource Center, Blogs
4. **SUPPORT** — Help Center, Product Status, Support
5. **NEWSLETTER / QUERY** — form with text input, email input, submit button
6. **SOCIAL** — Facebook, LinkedIn (visible only on lg screens)
7. **CONNECT WITH US** — phone numbers (`+91 9443144719`, `+91 9585544719`), address (Jagada Industries, 3/1224-6, Sattur Road, Virudhunagar - 626002, TN), email (`info@jagadagroup.com`)
8. **Google Translate** widget (`#google_translate_element`)

---

## 3. Per-Page Specifics

### 3.1 `/` (Homepage)

- `<h1>` — "jagada industries" (lowercase)
- `<h2 class="lead english">` — "Pioneers in Pyrotechnic & Non Ferrous Metal Powders"
- 2 ISO certification images: ISO-9001-2008, ISO-14001
- "estd" / logo / "1992" display
- 4 feature cards: "Global Leaders in Industry", "Quality standards", "Why Us?", "Advanced Instrumentation"
- Stats counters: "1992", "50+", "10+", "#1"
- "LET'S WORK TOGETHER" section heading
- 11 product grid images linking to `/product?id=N` (N=1..11)
- Page-specific JS: `/javascripts/index.js`

### 3.2 `/about-us`

- Heading: "LET'S WORK TOGETHER"
- Two contact cards: Deleepkumar (Engineer in Metallurgy) + Sales Person
- Brochure download link → `/docs/magnaliumLabReport.pdf`
- Page-specific JS: `/javascripts/aboutUs.js`

### 3.3 `/contact-us`

- Header with "MEET OUR EXPERTISE AT WORK"
- 4 info cards: E-MAIL, PHONE NUMBER, WEBSITE, ADDRESS
- Enquiry/Feedback form with fields: Name*, Address*, Telephone, E-mail ID*, Comments
- Submit + Reset buttons
- Page-specific JS: `/javascripts/contactUs.js`

### 3.4 `/products`, `/magnalium`, `/magnesium`

- Heading: "PRODUCT CATALOG"
- Subheading: "Where quality meets customer"
- Product grid (all 11 / magnalium-only 7 / magnesium-only 3)
- Each product links to `/product?id=N`
- Page-specific JS: `/javascripts/productum.js`

### 3.5 `/product?id=N` (Dynamic, N=1..11)

- Back arrow link → `/products`
- Full-screen product image
- 4 technical data cards: Particle Size (Mesh), Particle Size (μm), Real Density (gm/l), Composition (%)
- Page-specific JS: `/javascripts/product.js`

### 3.6 `/production-technology`

- Same structure as aboutUs but with Sales Person contacts
- Page-specific JS: `/javascripts/productionTechnology.js`

### 3.7 `/production-quality`

- Heading: "PLEDGE OF QUALITY"
- Two test method sections: Magnalium Uncoated, Magnalium Coated
- Page-specific JS: `/javascripts/productionQuality.js`

### 3.8 `/research-and-development`

- Testing methods section, Powder Range, Powder Lab, Global market section
- Video placeholder (play icon)
- Page-specific JS: `/javascripts/researchDev.js`

### 3.9 "Under Construction" Pages (8 pages)

All share identical structure:
- Heading: "LET'S WORK TOGETHER"
- Under construction image (`/images/under-construction.png`)
- "PAGE UNDER CONSTRUCTION" text
- "KEEP IN TOUCH" → "CONTACT US" button linking to `/contact-us`
- Same layout as aboutUs, using aboutUs.css

---

## 4. i18n — Spanish (es-ES)

- Mirror of English pages under `/es-ES/`
- Uses relative links for menus (e.g., `href="home"` not `/home`)
- Footer email differs: `jagadagroupofindustries@gmail.com` (instead of `info@jagadagroup.com`)
- Contact phone numbers differ
- No `/es-ES/product-status/` directory exists
- Google Translate widget present for other languages (de, fr, it)

---

## 5. Assets

### Images
- Product photos: 11 files in `/images/`
- ISO certs: ISO-9001-2008.png, ISO-14001.png
- Under construction: under-construction.png
- SVG icons: 26 files in `/svgs/`

### Documents
- `/docs/magnaliumLabReport.pdf`

### Fonts
- 4 custom fonts in `/fonts/` (.otf, .woff)

### JavaScript
- `master.js` — Hamburger menu toggle, responsive resize
- All other JS files are empty (0 bytes) or minimal stubs
- CDN: jQuery CDN, Popper CDN, Bootstrap JS CDN

---

## 6. SEO / Meta (Current State — Will Be Enhanced)

| Element | Current Value | Enhancement Needed |
|---------|--------------|-------------------|
| `<title>` | "Jagada Industries" (all pages) | Per-page unique titles |
| `<meta description>` | "Pyrotechnic raw materials" (all pages) | Per-page unique descriptions |
| `<link rel="canonical">` | Missing | Add canonical URLs |
| OG tags | Missing | Add og:title, og:description, og:image |
| Twitter Card | Missing | Add twitter:card |
| JSON-LD | Missing | Add Organization schema |
| `<html lang>` | Missing | Add `lang="en"` (and per-locale) |
| `hreflang` | Missing | Add for i18n pages |
| `robots.txt` | Missing | Add |
| `sitemap.xml` | Outdated (2018) | Auto-generate |
| Image `alt` | Partial | Ensure all images have alt text |

---

## 7. Technical Constraints

- Deployed to GitHub Pages (static files)
- Domain: `www.jagadagroup.com` (CNAME file)
- No server-side processing (static HTML)
- `.nojekyll` present (disables Jekyll processing)
- Contact form has no backend (form action not set)
- Must work without JavaScript (static fallback)

---

## 8. Migration Contract

The migrated site must:
1. Serve the **exact same URL paths** (or 301 redirects for changed paths)
2. Render the **same content and structure** on every page
3. Include all **same assets** (images, SVGs, fonts, PDF)
4. Maintain **menu behavior** (hamburger + submenu expand)
5. Preserve **footer content** (products, links, address, phones, email)
6. Support **Spanish locale** (`/es-ES/*`) with proper hreflang
7. **Enhance** SEO (per-page titles, descriptions, OG, JSON-LD, canonical, sitemap, robots.txt)
8. Work as fully **static** output (no Node.js server in production)
9. Preserve the **CNAME** file for custom domain