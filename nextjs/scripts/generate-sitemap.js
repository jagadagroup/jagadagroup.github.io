const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.jagadagroup.com';

// Only canonical, indexable URLs belong here — noindex'd stub pages and
// duplicate routes (e.g. /home/, which canonicalizes to /) are deliberately excluded.
const pages = [
  { path: '', priority: '1.00', changefreq: 'weekly' },
  { path: 'about-us', priority: '0.80', changefreq: 'monthly' },
  { path: 'contact-us', priority: '0.80', changefreq: 'monthly' },
  { path: 'products', priority: '0.80', changefreq: 'weekly' },
  { path: 'magnalium', priority: '0.80', changefreq: 'weekly' },
  { path: 'magnesium', priority: '0.80', changefreq: 'weekly' },
  { path: 'faq', priority: '0.70', changefreq: 'monthly' },
  { path: 'production-technology', priority: '0.64', changefreq: 'monthly' },
  { path: 'production-quality', priority: '0.64', changefreq: 'monthly' },
  { path: 'research-and-development', priority: '0.64', changefreq: 'monthly' },
  { path: 'blogs', priority: '0.64', changefreq: 'monthly' },
  { path: 'blog/magnalium-vs-magnesium-vs-aluminum', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/grade-1-vs-grade-2-magnesium-powder', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/how-to-choose-mesh-size-magnalium-powder', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/why-indian-magnalium-powder-outperforms-chinese-alternatives', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/understanding-al-mg-alloy-ratios-in-magnalium-powder', priority: '0.70', changefreq: 'monthly' },
];

// Other locale pages (pt-PT, fr-FR, vi-VN — SEO landing pages).
// These routes actually exist (src/app/<locale>/{about-us,contact-us,products}); the
// previous 'blogs' / 'blog/...' entries here 404'd because no such locale routes exist.
['pt-PT', 'fr-FR', 'vi-VN'].forEach((loc) => {
  pages.push(
    { path: loc, priority: '0.60', changefreq: 'weekly' },
    { path: `${loc}/about-us`, priority: '0.50', changefreq: 'monthly' },
    { path: `${loc}/contact-us`, priority: '0.50', changefreq: 'monthly' },
    { path: `${loc}/products`, priority: '0.50', changefreq: 'monthly' },
  );
});

// vi-VN has the strongest demand-to-content ratio of any locale (see
// Content-Strategy-2026-08.md P4) — the only locale with dedicated category pages so far.
pages.push(
  { path: 'vi-VN/magnalium', priority: '0.60', changefreq: 'monthly' },
  { path: 'vi-VN/magnesium', priority: '0.60', changefreq: 'monthly' },
);

// Product detail pages — SEO-friendly slugs
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'products.json'), 'utf8'));

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

for (const product of products) {
  pages.push({
    path: `product/${slugify(product.text)}`,
    priority: '0.80',
    changefreq: 'monthly',
  });
}

// Spanish locale pages — only routes with real translated content;
// the 8 "under construction" stub routes are noindex'd and excluded here.
const esPages = [
  { path: 'es-ES', priority: '0.80', changefreq: 'weekly' },
  { path: 'es-ES/about-us', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/contact-us', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/products', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/magnalium', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/magnesium', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/production-technology', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/production-quality', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/research-and-development', priority: '0.64', changefreq: 'monthly' },
];
pages.push(...esPages);

const today = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${baseUrl}/${p.path}${p.path ? '/' : ''}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;

const outDir = path.join(__dirname, '..', 'out');

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt);

console.log(`Generated sitemap.xml (${pages.length} URLs) and robots.txt in ${outDir}`);