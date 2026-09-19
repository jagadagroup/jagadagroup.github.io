# Jagada Industries — SEO Utility & Content Backlog

See `docs/changelog/` for session history. This file tracks what to build next — any LLM session should read this before starting new work.

---

## Part 1: Utility Tools

All tools are client-side React (no backend, no external APIs). Place under `/tools/` route.

### Tool 1: Mesh Size Converter — P0
- **Route:** `/tools/mesh-size-converter/`
- **Keywords:** "mesh to micron converter", "100 mesh to micron", "mesh size chart", "mesh size to particle size"
- **What:** Enter mesh number → get µm, mm, inches. Or enter µm → get nearest mesh. Show which Jagada product uses that mesh with link.
- **Data (ASTM E11):** 18=1000µm, 40=420µm, 80=180µm, 100=150µm, 150=106µm, 200=75µm, 270=53µm, 325=45µm, 400=38µm
- **Status:** Queued

### Tool 2: Metal Powder Quantity Calculator — P1
- **Route:** `/tools/quantity-calculator/`
- **Keywords:** "metal powder weight calculator", "bulk density magnesium powder", "how much powder per kg"
- **What:** Enter volume (litres or ft³) + select product → weight in kg and lbs. Reverse too: enter weight → volume.
- **Data:** Magnalium bulk density ~1400–1600 g/L (varies by mesh), Mg Grade 1 ~600–800 g/L. Let user override.
- **Status:** Queued

### Tool 3: Magnalium Burn Rate Reference — P1
- **Route:** `/tools/burn-rate-reference/`
- **Keywords:** "magnalium burn rate", "magnesium powder burn rate chart", "metal powder burn rate pyrotechnics"
- **What:** Select product + mesh → burn rate category (slow/medium/fast/flash), typical application, safety note. Reference table, not a calculator. Label clearly as reference only.
- **Status:** Queued

### Tool 4: Pyrotechnic Unit Converter — P2
- **Route:** `/tools/unit-converter/`
- **Keywords:** "mesh to micron", "grain to gram converter pyrotechnics", "°C to °F flame temperature"
- **What:** mesh↔µm, g↔grains↔oz (US formulators use grains), °C↔°F, density (g/cc↔g/L↔lb/ft³)
- **Status:** Queued

### Tool 5: Shipping Weight Estimator — P2
- **Route:** `/tools/shipping-estimator/`
- **Keywords:** "magnesium powder shipping weight", "bulk metal powder freight estimate"
- **What:** Enter qty (kg) + country → volumetric weight, UN packaging type (UN 1418 / UN 1396), sea vs air guidance, CTA for exact quote.
- **Status:** Queued

---

## Part 2: Blog Posts Queue

Voice reference: match `/blog/magnalium-vs-magnesium-vs-aluminum/` — specific numbers, first-person manufacturer, no filler, opinionated conclusions. See `docs/changelog/2026-06-17-session-1.md` for anti-patterns to avoid.

### Post 3 — P0
- **File:** `nextjs/src/app/blog/40-mesh-vs-80-mesh-magnalium-waterfall-fountains/page.tsx`
- **Keyword:** "40 mesh vs 80 mesh magnalium", "magnalium powder for waterfall fountains"
- **Title:** `40 Mesh vs 80 Mesh Magnalium — Which Burns Better in Waterfall Fountains?`
- **Angle:** Formulators choosing between sizes. Compare burn duration, spark tail length, colour temperature. Be opinionated — we make both, so we can say which is better for what.
- **Status:** Queued

### Post 4 — P0
- **File:** `nextjs/src/app/blog/un-1418-magnesium-powder-dangerous-goods/page.tsx`
- **Keyword:** "UN 1418 magnesium powder", "magnesium powder dangerous goods classification"
- **Title:** `UN 1418 — Magnesium Powder Dangerous Goods Classification Explained`
- **Angle:** What UN 1418 means, packing groups II and III, how it differs from UN 1869 (Mg granules) and UN 1396 (Al-Mg alloy powder), IATA vs IMDG restrictions, what happens if mis-declared at customs.
- **Status:** Queued

### Post 5 — P0
- **File:** `nextjs/src/app/blog/coated-vs-uncoated-magnesium-powder/page.tsx`
- **Keyword:** "coated magnesium powder vs uncoated", "Grade 1 coated magnesium"
- **Title:** `Coated vs Uncoated Magnesium Powder — When the Coating Actually Matters`
- **Angle:** What the coating is (thin polymer, not oxide), what it does to moisture resistance, what it does NOT change (purity, IS 2307 compliance), humidity threshold (~65% RH sustained), cost difference, shelf life comparison. Strong conclusion.
- **Status:** Queued

### Post 6 — P1
- **File:** `nextjs/src/app/blog/recycled-vs-virgin-metals-magnalium/page.tsx`
- **Keyword:** "Chinese magnalium powder quality", "recycled vs virgin magnalium"
- **Title:** `Recycled vs Virgin Metals in Magnalium Production — Why It Changes Everything`
- **Angle:** Technical — impurity profiles in recycled vs virgin metal Magnalium, how iron contamination affects burn characteristics, spectral differences. More chemistry than the existing Chinese vs Indian post.
- **Status:** Queued

### Post 7 — P1
- **File:** `nextjs/src/app/blog/magnesium-powder-storage-guide/page.tsx`
- **Keyword:** "magnesium powder storage", "how to store magnesium powder safely"
- **Title:** `How to Store Magnesium Powder Safely — Temperature, Humidity, Containers, Fire Response`
- **Angle:** Temperature thresholds, steel drum vs HDPE container recommendations, incompatible materials, what to do if it catches fire (NOT water — Class D or dry sand only), PESO/OSHA storage regs. Practical, not generic.
- **Status:** Queued

### Post 8 — P1
- **File:** `nextjs/src/app/blog/metal-powder-for-defense-pyrotechnics/page.tsx`
- **Keyword:** "metal powder defense pyrotechnics", "magnesium powder illuminating flares"
- **Title:** `Metal Powder in Defense Pyrotechnics — Illuminating Flares, Signals, and Countermeasures`
- **Angle:** Types of defense pyrotechnic compositions, which metal powders used in each, purity/consistency requirements for defense, export control considerations, IS 2307 as benchmark.
- **Status:** Done (2026-09-19)

### Post 9 — P2 (Brazilian Portuguese)
- **File:** `nextjs/src/app/blog/magnesium-powder-fireworks-brazil/page.tsx`
- **Keyword:** "pó de magnésio para fogos de artifício Brasil", "fornecedor pó de magnésio Brasil"
- **Title:** `Pó de Magnésio para Fogos de Artifício — Guia para Fabricantes Brasileiros`
- **Language:** Brazilian Portuguese
- **Status:** Queued

### Post 10 — P2 (Spanish)
- **File:** `nextjs/src/app/blog/magnesium-powder-mexico-import/page.tsx`
- **Keyword:** "polvo de magnesio para pirotecnia México", "importar polvo de magnesio desde India"
- **Title:** `Polvo de Magnesio para Pirotecnia — Guía de Importación desde India para México`
- **Language:** Spanish
- **Status:** Queued

---

## Schema Upgrades Pending

- [ ] LocalBusiness schema — Google Maps / local pack visibility
- [ ] BlogPosting schema on each blog post — author, datePublished, image
- [ ] WebSite + SearchAction schema — Sitelinks Searchbox
- [ ] AggregateRating on product pages

---

## Session Notes

- Do NOT build `de-DE` locale — German traffic (25 users, 0.12 engagement) is bots; Germany bans most pyrotechnic imports
- `pt-BR` added 2026-06-17 as separate locale from `pt-PT`
- Blog voice: match `magnalium-vs-magnesium-vs-aluminum` post — specific numbers, manufacturer POV, no hedging
- Commits: do NOT push immediately — batch to avoid exhausting GitHub Actions free tier
- Canonical bug fix (2026-06-17): removed global `canonical: '/'` from layout.tsx — was blocking indexing of all pages
