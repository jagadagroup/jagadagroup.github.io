const { test, expect } = require('@playwright/test');

test('shared layout chrome present on "/"', async ({ page }) => {
  await page.goto('/');

  // HTML tag
  await expect(page.locator('html')).toHaveCount(1);

  // Core SEO meta
  const title = await page.title();
  expect(title).toBe('Jagada Industries');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', 'Pyrotechnic raw materials');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'index,follow');
  await expect(page.locator('meta[name="google-site-verification"]')).toHaveAttribute('content');
  await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content', 'width=device-width, initial-scale=1');

  // CSS links
  await expect(page.locator('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"]')).toHaveCount(1);
  await expect(page.locator('link[href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"]')).toHaveCount(1);
  await expect(page.locator('link[href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed"]')).toHaveCount(1);
  await expect(page.locator('link[href="/stylesheets/global.css"]')).toHaveCount(1);
  await expect(page.locator('link[href="/stylesheets/layout.css"]')).toHaveCount(1);

  // Navigation menu (shared)
  await expect(page.locator('nav .menu')).toHaveCount(1);

  // Google Translate (shared)
  await expect(page.locator('#google_translate_element')).toHaveCount(1);

  // Hamburger button
  await expect(page.locator('#menu-button')).toHaveCount(1);

  // Footer
  await expect(page.locator('.footer')).toHaveCount(1);

  // jQuery CDN
  await expect(page.locator('script[src*="jquery-3.3.1.js"]')).toHaveCount(1);
});

test('all page-specific stylesheets load on their respective pages', async ({ browser }) => {
  const pageTests = [
    { path: '/', css: '/stylesheets/index.css' },
    { path: '/about-us', css: '/stylesheets/aboutUs.css' },
    { path: '/contact-us', css: '/stylesheets/contactUs.css' },
    { path: '/products', css: '/stylesheets/productum.css' },
    { path: '/product?id=1', css: '/stylesheets/product.css' },
    { path: '/production-technology', css: '/stylesheets/productionTechnology.css' },
    { path: '/production-quality', css: '/stylesheets/productionQuality.css' },
    { path: '/research-and-development', css: '/stylesheets/researchDev.css' },
  ];

  for (const { path, css } of pageTests) {
    const page = await browser.newPage();
    await page.goto(path);
    await expect(page.locator(`link[href="${css}"]`)).toHaveCount(1);
    await page.close();
  }
});