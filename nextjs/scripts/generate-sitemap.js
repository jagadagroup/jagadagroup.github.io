const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.jagadagroup.com';

const pages = [
  { path: '', priority: '1.00', changefreq: 'weekly' },
  { path: 'home', priority: '0.80', changefreq: 'weekly' },
  { path: 'about-us', priority: '0.80', changefreq: 'monthly' },
  { path: 'contact-us', priority: '0.80', changefreq: 'monthly' },
  { path: 'products', priority: '0.80', changefreq: 'weekly' },
  { path: 'magnalium', priority: '0.80', changefreq: 'weekly' },
  { path: 'magnesium', priority: '0.80', changefreq: 'weekly' },
  { path: 'production-technology', priority: '0.64', changefreq: 'monthly' },
  { path: 'production-quality', priority: '0.64', changefreq: 'monthly' },
  { path: 'research-and-development', priority: '0.64', changefreq: 'monthly' },
  { path: 'customers', priority: '0.64', changefreq: 'monthly' },
  { path: 'blogs', priority: '0.64', changefreq: 'monthly' },
  { path: 'jobs', priority: '0.64', changefreq: 'monthly' },
  { path: 'press', priority: '0.64', changefreq: 'monthly' },
  { path: 'resource-center', priority: '0.64', changefreq: 'monthly' },
  { path: 'help-center', priority: '0.64', changefreq: 'monthly' },
  { path: 'product-status', priority: '0.64', changefreq: 'monthly' },
  { path: 'support', priority: '0.64', changefreq: 'monthly' },
];

// Other locale pages (fr-FR, de-DE, it-IT — SEO landing pages)
['fr-FR', 'de-DE', 'it-IT'].forEach((loc) => {
  pages.push(
    { path: loc, priority: '0.64', changefreq: 'monthly' },
    { path: `${loc}/about-us`, priority: '0.64', changefreq: 'monthly' },
    { path: `${loc}/contact-us`, priority: '0.64', changefreq: 'monthly' },
    { path: `${loc}/products`, priority: '0.64', changefreq: 'monthly' },
  );
});

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

// Spanish locale pages
const esPages = [
  { path: 'es-ES', priority: '0.80', changefreq: 'weekly' },
  { path: 'es-ES/home', priority: '0.64', changefreq: 'weekly' },
  { path: 'es-ES/about-us', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/contact-us', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/products', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/magnalium', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/magnesium', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/production-technology', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/production-quality', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/research-and-development', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/customers', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/blogs', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/jobs', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/press', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/resource-center', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/help-center', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/product-status', priority: '0.64', changefreq: 'monthly' },
  { path: 'es-ES/support', priority: '0.64', changefreq: 'monthly' },
];
pages.push(...esPages);

const today = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${baseUrl}/${p.path}</loc>
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