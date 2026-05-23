# Product-First SEO Strategy — Jagada Group

> Internal document. Not for commit.
> Strategy: Rank for product-specific keywords that buyers search for when sourcing metal powders.

---

## 1. Seed Keywords (Primary Products)

| Product Category | Seed Keywords |
|-----------------|---------------|
| **Magnalium** | Magnalium, Magnalium powder, Al-Mg alloy powder, Mg-Al alloy powder, Magnesium Aluminium alloy powder, pyrotechnic Magnalium |
| **Magnesium** | Magnesium powder, Magnesium granules, Magnesium ribbon, Magnesium fine powder, Magnesium exporters, pyrotechnic magnesium |
| **Aluminium** | Aluminium powder, Aluminum powder, Aluminium Magnesium Alloy |
| **Metal Powders (catch-all)** | Metal powder, non-ferrous metal powder, pyrotechnic raw materials |

---

## 2. Derived Long-Tail Keyword Matrix

Each product category × buyer intent × modifier generates long-tail keywords:

### 2.1 Magnalium Powder Keywords

**Product-specific:**
- 18 mesh Magnalium powder
- 40 mesh Magnalium powder
- 80 mesh Magnalium powder
- 100 mesh Magnalium powder
- 150 mesh Magnalium powder
- 200 mesh Magnalium powder
- 325 mesh Magnalium powder

**Buyer intent × Magnalium:**
- Magnalium powder manufacturers in India
- Magnalium powder suppliers
- Magnalium powder exporters
- Magnalium powder price per kg
- buy Magnalium powder online
- Magnalium powder for fireworks
- Magnalium powder for pyrotechnics
- Magnalium powder specification
- Magnalium powder density
- Aluminium Magnesium 50:50 alloy powder
- Al-Mg 50:50 powder manufacturer
- fireworks Magnalium powder India
- best quality Magnalium powder
- wholesale Magnalium powder
- Magnalium powder bulk order

**Comparison keywords:**
- Magnalium vs Magnesium powder
- Magnalium vs Aluminium powder
- Chinese Magnalium vs Indian Magnalium

### 2.2 Magnesium Powder Keywords

**Product-specific:**
- Grade 1 Magnesium powder
- Grade 1 Magnesium powder coated
- Grade 2 Magnesium powder
- Magnesium powder 40-80 mesh

**Buyer intent × Magnesium:**
- Magnesium powder manufacturers
- Magnesium powder suppliers India
- largest manufacturer of Magnesium powders
- Magnesium powder exporters from India
- Magnesium powder price India
- buy Magnesium powder
- Magnesium powder for fireworks
- Magnesium powder for pyrotechnics
- Magnesium powder specifications
- Magnesium powder purity 99.8%
- Magnesium fine powder manufacturers
- Magnesium granules supplier
- Magnesium ribbon manufacturer
- pyrotechnic grade Magnesium powder
- Magnesium powder wholesale
- Magnesium powder IS 2307 standard
- high purity Magnesium powder
- Magnesium metal powder India

### 2.3 Aluminium Powder Keywords

- Aluminium powder manufacturer India
- Aluminium Magnesium alloy powder
- Al-Mg alloy powder exporters
- Mg-Al alloy powder manufacturers
- Aluminium Magnesium powder for fireworks
- Aluminium metal powder supplier

### 2.4 General / Category Keywords

- Metal powder manufacturers India
- non-ferrous metal powder supplier
- pyrotechnic raw materials India
- fireworks powder manufacturer India
- pyrotechnic chemicals supplier
- metal powder for defense applications
- non-metal powder manufacturer (original keyword)
- powder metallurgy products India
- atomized metal powder manufacturer

### 2.5 Geo-Modified Keywords (Export Markets)

- Magnalium powder exporter to Europe
- Magnesium powder supplier for Vietnam
- Magnalium powder manufacturer for France
- Magnesium powder for Spanish fireworks industry
- metal powder supplier for Portuguese market

### 2.6 B2B Procurement Keywords

- Magnalium powder bulk supplier
- industrial Magnesium powder supplier
- Magnalium powder tender
- Magnesium powder contract manufacturer
- OEM Magnesium powder manufacturer
- private label metal powder supplier

---

## 3. Keyword-to-Page Mapping

| Target Keyword Group | Primary Page | Title Tag Suggestion |
|---------------------|-------------|---------------------|
| Magnalium powder (all mesh sizes) | `/magnalium/` | Magnalium Powder Manufacturer India — 18 to 325 Mesh |
| Magnesium powder (all grades) | `/magnesium/` | Magnesium Powder Manufacturer & Exporter — Grade 1 & 2 |
| 18 mesh Magnalium | `/product/18-mesh-magnalium-powder/` | 18 Mesh Magnalium Powder — Al-Mg Alloy for Pyrotechnics |
| Grade 1 Magnesium | `/product/grade-1-magnesium-powder/` | Grade 1 Magnesium Powder — 99.8% Purity IS 2307 |
| Company intro | `/about-us/` | Leading Magnalium & Magnesium Powder Manufacturer India |
| Contact / Quote | `/contact-us/` | Enquire Now — Magnalium & Magnesium Powder Supplier |
| FAQ | `/faq/` (to create) | Metal Powder FAQ — Magnalium, Magnesium Specifications |

---

## 4. Meta Tags — Status

### `<meta name="keywords">` ✅ DONE
Product-first keywords live in `layout.tsx`.

### Per-Page Titles ✅ DONE
All core pages updated to product-first titles in layout.tsx and individual page.tsx files.

---

## 5. Product Schema Keyword Optimization ✅ DONE

ProductJsonLd and BreadcrumbJsonLd components exist in `JsonLd.tsx` and are used on product pages.

**Still TODO:**
- Add `offers` block to ProductJsonLd (availability, priceCurrency, priceValidUntil) to unlock Product rich results in SERP
- Add `category` and `material` fields to ProductJsonLd
- Add `WebSite` + `SearchAction` schema for Sitelinks Searchbox

---

## 6. Content Strategy (Product-First)

### 6.1 Product Pages ✅ DONE
Individual product pages have title, specs, image, and JSON-LD.

### 6.2 Category Pages — /magnalium/ & /magnesium/
**TODO:** Add keyword-rich intro paragraph to both category pages.

### 6.3 FAQ Page — /faq/
**TODO (create from scratch):**
- 6-8 product-focused Q&A with FAQPage JSON-LD schema
- Unlocks FAQ rich results in Google SERP
- Suggested questions:
  - "What is the difference between Magnalium and Magnesium powder?"
  - "What mesh size of Magnalium powder is best for fireworks?"
  - "Do you export Magnesium powder to [country]?"
  - "What is the purity of your Grade 1 Magnesium powder?"
  - "What certifications does Jagada Industries hold?"

### 6.4 Blog Posts
**Live:** 1 post — Magnalium vs Magnesium vs Aluminum (May 2026)
**TODO (use PHMSA-Report-Summary-for-Blog.md as research source):**
- "How to Choose the Right Mesh Size for Pyrotechnic Powders" — targets all 7 mesh-size keywords
- "Understanding Al-Mg Alloy Ratios in Magnalium Powder" — targets Al-Mg 50:50 keywords
- "Why Indian Magnalium Powder Outperforms Chinese Alternatives" — competitive keyword
- "Grade 1 vs Grade 2 Magnesium Powder: Which Grade for Your Application?" — grade keywords

---

## 7. Internal Linking Structure

```
Homepage
  → /products/ (Metal Powder Catalog)
    → /magnalium/ (Magnalium Powder — all mesh sizes)
      → /product/18-mesh-magnalium-powder/
      → /product/40-mesh-magnalium-powder/
      → ... (7 products)
    → /magnesium/ (Magnesium Powder — all grades)
      → /product/grade-1-magnesium-powder/
      → /product/grade-1-magnesium-powder-coated/
      → /product/grade-2-magnesium-powder/
    → /product/titanium-powder/
  → /about-us/ (About Manufacturer)
  → /contact-us/ (Enquire / Get Quote)
  → /faq/ (Product FAQ — to create)
  → /production-quality/ (Quality Certifications)
```

---

## 8. Title Tag & Description Priority

### Immediate Changes (implement now)

| Page | New Title | New Description |
|------|-----------|-----------------|
| Homepage | Magnalium & Magnesium Powder Manufacturer India — Jagada Industries | Leading manufacturer of Magnalium powder, Magnesium powder, and Al-Mg alloy powders for pyrotechnics, fireworks, and industrial use. ISO 9001:2008 certified. Est. 1992. |
| /magnalium/ | Magnalium Powder — Al-Mg Alloy 18 to 325 Mesh | Premium Magnalium (Aluminium-Magnesium alloy) powder in 18, 40, 80, 100, 150, 200, 325 mesh. Made from virgin metals. Manufacturer & exporter since 1992. |
| /magnesium/ | Magnesium Powder Manufacturer & Exporter India — Grade 1 & 2 | High-purity Magnesium powder (99.8% IS 2307) in Grade 1, Grade 1 Coated, and Grade 2. Exported worldwide for fireworks and industrial applications. |
| /products/ | Metal Powder Catalog — Magnalium, Magnesium, Titanium | Browse our complete metal powder catalog: Magnalium powder, Magnesium powder, and Titanium powder for pyrotechnics, fireworks, and defense. |
| /about-us/ | About Jagada Industries — Metal Powder Manufacturer Since 1992 | Jagada Industries, established 1992, is India's leading manufacturer of Magnalium, Magnesium, and non-ferrous metal powders. ISO 9001:2008 & ISO 14001 certified. |
| /contact-us/ | Get Quote — Contact Jagada Industries for Metal Powders | Contact Jagada Industries for Magnalium powder, Magnesium powder, and Al-Mg alloy powder pricing. Phone, email, and enquiry form available. |
| /product/[slug]/ | {Product Name} — {Key Spec} — Jagada Industries | Technical specifications, particle size, density, and composition for {Product Name}. Manufactured by Jagada Industries, India. |