const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.jagadagroup.com';

// Only canonical, indexable URLs belong here — noindex'd stub pages and
// duplicate routes (e.g. /home/, which canonicalizes to /) are deliberately excluded.
// Trailing slash on all locs — matches next.config trailingSlash and avoids GSC redirect noise.
function loc(p) {
  if (!p) return `${baseUrl}/`;
  return `${baseUrl}/${p.replace(/^\/|\/$/g, '')}/`;
}

const pages = [
  { path: '', priority: '1.00', changefreq: 'weekly' },
  { path: 'about-us', priority: '0.80', changefreq: 'monthly' },
  { path: 'contact-us', priority: '0.80', changefreq: 'monthly' },
  { path: 'products', priority: '0.80', changefreq: 'weekly' },
  { path: 'magnalium', priority: '0.90', changefreq: 'weekly' },
  { path: 'magnesium', priority: '0.90', changefreq: 'weekly' },
  { path: 'faq', priority: '0.70', changefreq: 'monthly' },
  { path: 'production-technology', priority: '0.64', changefreq: 'monthly' },
  { path: 'production-quality', priority: '0.70', changefreq: 'monthly' },
  { path: 'research-and-development', priority: '0.64', changefreq: 'monthly' },
  { path: 'blogs', priority: '0.80', changefreq: 'weekly' },

  // Application / commercial landings
  { path: 'magnesium-powder-for-defense', priority: '0.90', changefreq: 'monthly' },
  { path: 'magnesium-powder-for-fireworks', priority: '0.90', changefreq: 'monthly' },
  { path: 'high-purity-magnesium-powder', priority: '0.90', changefreq: 'monthly' },
  { path: 'metal-powder-for-defense', priority: '0.85', changefreq: 'monthly' },
  { path: 'magnalium-for-fireworks', priority: '0.90', changefreq: 'monthly' },
  { path: 'magnesium-for-pyrotechnics', priority: '0.85', changefreq: 'monthly' },
  { path: 'magnesium-exporters', priority: '0.90', changefreq: 'monthly' },

  // Export markets
  { path: 'location', priority: '0.75', changefreq: 'monthly' },
  { path: 'location/mexico', priority: '0.80', changefreq: 'monthly' },
  { path: 'location/brazil', priority: '0.80', changefreq: 'monthly' },
  { path: 'location/peru', priority: '0.75', changefreq: 'monthly' },
  { path: 'location/vietnam', priority: '0.80', changefreq: 'monthly' },

  // Blogs
  { path: 'blog/magnalium-vs-magnesium-vs-aluminum', priority: '0.85', changefreq: 'monthly' },
  { path: 'blog/grade-1-vs-grade-2-magnesium-powder', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/how-to-choose-mesh-size-magnalium-powder', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/why-indian-magnalium-powder-outperforms-chinese-alternatives', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/understanding-al-mg-alloy-ratios-in-magnalium-powder', priority: '0.70', changefreq: 'monthly' },
  { path: 'blog/metal-powder-for-defense-pyrotechnics', priority: '0.85', changefreq: 'monthly' },
  { path: 'blog/magnesium-powder-quality-control', priority: '0.85', changefreq: 'monthly' },
  { path: 'blog/is-2307-magnesium-powder-standard', priority: '0.90', changefreq: 'monthly' },
  { path: 'blog/magnesium-powder-hs-code-import-guide', priority: '0.90', changefreq: 'monthly' },
];

// Other locale pages (pt-PT, fr-FR, vi-VN — SEO landing pages).
['pt-PT', 'fr-FR', 'vi-VN'].forEach((locale) => {
  pages.push(
    { path: locale, priority: '0.60', changefreq: 'weekly' },
    { path: `${locale}/about-us`, priority: '0.50', changefreq: 'monthly' },
    { path: `${locale}/contact-us`, priority: '0.50', changefreq: 'monthly' },
    { path: `${locale}/products`, priority: '0.50', changefreq: 'monthly' },
  );
});

pages.push(
  { path: 'vi-VN/magnalium', priority: '0.60', changefreq: 'monthly' },
  { path: 'vi-VN/magnesium', priority: '0.60', changefreq: 'monthly' },
);

// Product detail pages — SEO-friendly slugs
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'products.json'), 'utf8')
);

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

// Spanish locale pages — only routes with real translated content
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

const seen = new Set();
const uniquePages = pages.filter((p) => {
  if (seen.has(p.path)) return false;
  seen.add(p.path);
  return true;
});

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${uniquePages
  .map(
    (p) => `  <url>
    <loc>${loc(p.path)}</loc>
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
Disallow: /home/
Sitemap: ${baseUrl}/sitemap.xml
`;

const outDir = path.join(__dirname, '..', 'out');

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt);

console.log(`Generated sitemap.xml (${uniquePages.length} URLs) and robots.txt in ${outDir}`);
