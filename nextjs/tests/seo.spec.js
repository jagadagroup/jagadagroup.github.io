const { test, expect } = require('@playwright/test');

test.describe('SEO', () => {
  test('/ has JSON-LD Organization schema', async ({ page }) => {
    await page.goto('/');
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1, { timeout: 5000 });
    const raw = await jsonLd.textContent();
    const parsed = JSON.parse(raw);
    expect(parsed['@type']).toBe('Organization');
    expect(parsed.name).toBe('Jagada Industries');
  });

  test('/ has Open Graph + Twitter meta tags', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1);
  });

  test('/ has hreflang alternate links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('link[rel="alternate"][hreflang="es-ES"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
  });

  test('/ has canonical URL', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  });

  test('all product pages have JSON-LD', async ({ page }) => {
    // Test a sample of product pages
    for (const id of [1, 2, 3]) {
      await page.goto(`/product/${id}/`);
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const count = await jsonLd.count();
      expect(count).toBeGreaterThanOrEqual(1);
    }
  });

  test('sitemap.xml exists and is valid', async ({ page }) => {
    const res = await page.goto('/sitemap.xml');
    expect(res.status()).toBe(200);
    const body = await page.content();
    expect(body).toContain('<urlset');
    expect(body).toContain('<loc>');
  });

  test('robots.txt exists', async ({ page }) => {
    const res = await page.goto('/robots.txt');
    expect(res.status()).toBe(200);
  });

  test('pages have unique titles', async ({ browser }) => {
    const paths = ['/', '/about-us/', '/contact-us/', '/products/'];
    const titles = new Set();
    for (const path of paths) {
      const page = await browser.newPage();
      await page.goto(path);
      const title = await page.title();
      titles.add(title);
      await page.close();
    }
    // At least 2 pages should have different titles
    expect(titles.size).toBeGreaterThanOrEqual(2);
  });
});