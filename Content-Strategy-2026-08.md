# Content Strategy — Jagada Group

> Derived from Google Search Console Performance data (18 May – 5 Aug 2026) and Coverage/Enhancement
> reports (9 Aug 2026 exports). Complements `Growth-Plan.md` (tracking/tools) and
> `SEO-AEO-Gap-Analysis.md` (keyword map) — this document is the prioritized content roadmap those
> two feed into, updated after the Aug 2026 technical SEO fixes (canonical tags, sitemap, noindex).

---

## 1. What the data says

### Current shape of performance (3-month window)
- **~110 total clicks, ~4,650 impressions**, average position ~7.4, average CTR ~2.4%.
- One page — `/blog/magnalium-vs-magnesium-vs-aluminum/` — drives **41% of all clicks** (45 of ~110)
  and 66% of impressions, at position 6.4. It did this *despite* a site-wide canonical bug that was
  actively telling Google to index the homepage instead (fixed 9 Aug 2026). This is the single
  strongest proof of what works: a specific, comparison-framed, buyer-intent title outranks every
  generic company page on the site.
- India and the US supply 87 of 110 clicks. India converts at a much higher CTR (4.8%) than its
  average position (9.1) would predict — brand recognition is doing real work domestically that
  the copy isn't doing internationally.
- Mobile edges out desktop on CTR (2.61% vs 2.04%) on comparable impression volume.

### The head keyword is not yet captured
"magnalium powder" — the core product term — gets 100 impressions at **position 14.1** (page 2) and
zero clicks. This is not a ranking-algorithm problem; until 9 Aug 2026 `/magnalium/` had no
self-referencing canonical tag, so Google was structurally discouraged from indexing it as a
distinct page at all. Re-crawl and content depth are now the two remaining levers.

### High position, zero clicks — a title/snippet problem, not a ranking problem
Several pages already rank well but convert none of that into clicks:

| Page | Position | Impressions | Clicks | Likely cause |
|---|---|---|---|---|
| `/production-technology/` | 2.4 | 8 | 0 | Title is just "Production Technology — Jagada Industries" — no query match, no reason to click |
| `/research-and-development/` | 3.8 | 79 | 0 | Same pattern — generic title against what are likely technical/process queries |
| query "magnesium powder for fireworks" | 2.9 | 7 | 0 | Page ranks almost top-3; title/description doesn't echo the query back |

### Striking-distance queries (page 1–2, real intent, low/no clicks)

| Query | Impr. | Position | Read |
|---|---|---|---|
| magnalium powder | 100 | 14.1 | Head term — now correctly canonicalized; watch it move over the next 2–4 weeks |
| what is magnalium | 19 | 7.8 | Informational, near page 1 — FAQ-shaped |
| magnalium composition | 11 | 15.3 | Buyers checking Al/Mg ratio before ordering — now exposed as Product JSON-LD `material`, needs matching visible copy |
| titanium and magnesium aluminum powder | 8 | 13.1 | `/product/titanium-powder/` is thin relative to demand |
| virudhunagar manufacturing company | 16 | 21 | Local/geo — no LocalBusiness schema or GBP listing yet |
| magnalium alloy uses source | 10 | 6.9 | Near page 1, use-case intent |

### What has near-zero signal (deprioritize)
- Tantalum-related queries ("tantalum powder mesh 325...") — Jagada doesn't appear to manufacture
  tantalum powder; these are likely mismatched crawl/query noise, not a market to chase.
- Non-English homonym queries ("jagatha in tamil", "झगड़ा" — Hindi/Tamil for "quarrel") — brand-name
  collision with an unrelated common word, not addressable through content.

---

## 2. Priority actions (ranked)

### P0 — Close the loop on pages that already rank well

1. **Rewrite titles/descriptions for pages with good position, zero CTR.**
   `/production-technology/`, `/research-and-development/`, and `/magnesium/` need titles that
   echo the query, not the org name. Pattern that already works (`/blog/magnalium-vs-magnesium-vs-aluminum/`):
   lead with the specific comparison/spec, put "Jagada Industries" last, not first.
   - `/production-technology/`: currently *"Production Technology — Jagada Industries"* →
     something naming the actual process (atomisation, OES testing) a buyer would search for.
   - `/magnesium/`: tighten toward *"magnesium powder for fireworks"* phrasing directly, since the
     page already sits at position 2.9 for it.

2. **Deepen `/magnalium/` and `/magnesium/` category copy** to target "magnalium powder" (100
   impr.) and "magnalium composition" (11 impr.) literally in the H1/first paragraph — currently
   both pages are a heading plus a product grid with no body copy at all. The Al/Mg composition
   data already exists (now in Product JSON-LD's `material`/`additionalProperty` fields per
   product) — surface it as visible on-page text too, since structured data alone doesn't rank.

### P1 — Capture informational/AEO queries

3. **Build the `/faq/` page** (scoped in `SEO-AEO-Gap-Analysis.md` §6.3, not yet built). Lead with
   "What is magnalium?" (19 impr., position 7.8 — closest query to page 1 in the entire dataset)
   and "What is the difference between Magnalium and Magnesium powder?". Add `FAQPage` JSON-LD.
   This is the highest-leverage single page not yet built — it directly answers the two
   highest-intent informational queries in the data and is a natural fit for AI/answer-engine
   surfaces (AEO), not just classic blue-link SERPs.

4. **Expand `/product/titanium-powder/`.** It's the only product page catching a distinct
   multi-word query ("titanium and magnesium aluminum powder", 8 impr.) but is otherwise thin
   relative to the 7-variant magnalium catalog. A short comparison paragraph (titanium vs.
   magnalium vs. magnesium — brightness, burn rate, cost) reuses the framework that already works
   on the top-performing blog post.

### P2 — Local & geo

5. **LocalBusiness schema + Google Business Profile.** "virudhunagar manufacturing company" (16
   impr., position 21) is a geo-intent query the site has zero structured signal for — no
   `LocalBusiness` schema (flagged since the original Growth-Plan draft, still not done), no GBP
   listing. This is the cheapest fix on this list relative to impact: the address/phone data
   already lives in `site-config.ts`.

### P3 — Blog pipeline

6. **Ship the next 3 blog posts already scoped in `SEO-AEO-Gap-Analysis.md` §6.4** — mesh-size
   guide, Al-Mg alloy ratio guide, Chinese-vs-Indian comparison. All 4 originally-planned posts are
   now live and correctly canonicalized (as of 9 Aug 2026), and one of them is proven to outperform
   every other page on the site. Do not deviate from that comparison/buyer-decision format — it's
   the only content type on the site with confirmed pull.

### P4 — Locale content (pt-PT / fr-FR / vi-VN)

7. **These three locales get real impressions with almost no supporting content** — each has only
   4 pages (home, about, contact, products), no category or blog content, so there's nothing for
   long-tail queries in those markets to match against. Before investing in full translation,
   confirm actual demand: `Countries.csv` shows meaningful impression volume from markets these
   locales don't map to 1:1 (UK, Canada, Germany, etc. show impressions with no dedicated locale),
   so prioritize by matching Country data to locale before commissioning translation work.

---

## 3. What NOT to do

- **Don't fabricate Product `offers`/`review`/`aggregateRating` schema** to chase the "Product
  snippets" rich-result eligibility flagged in Search Console (9 pages, see §4). Jagada is
  quote-based B2B with no published price and no collected reviews — adding either would violate
  Google's structured-data policy and risks a manual action, not a rich result.
- **Don't expand the "under construction" pages** (`/jobs/`, `/press/`, `/support/`, etc.) with
  placeholder content to make them look less thin. They're now `noindex` by design; either build
  them out with real content when there's something to say, or leave them alone.

---

## 4. Rich-result status (for reference — see full technical audit for detail)

| Enhancement | Status | Note |
|---|---|---|
| Breadcrumbs | ✅ Valid, 0 invalid | Growing from 1 → 9 valid pages as crawl coverage expands |
| Product snippets | ❌ 9 pages flagged | Needs `offers`, `review`, or `aggregateRating` — business decision (real pricing or reviews), not a content or code fix |
| FAQPage | Not yet implemented | See P1 §3 above |
| LocalBusiness | Not yet implemented | See P2 §5 above |

---

*Source: `jagadagroup.com-Performance-on-Search-2026-08-09.zip`, `jagadagroup.com-Coverage-2026-08-09.zip`,
`jagadagroup.com-Breadcrumbs-2026-08-09.zip`, `jagadagroup.com-Product-snippets-2026-08-09.zip`
(Google Search Console exports, not committed to this repo).*
