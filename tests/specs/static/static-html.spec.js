const { test, expect } = require('@playwright/test');

const pages = [
  '/',
  '/home/',
  '/about-us/',
  '/contact-us/',
  '/products/',
  '/magnalium/',
  '/magnesium/',
  '/customers/',
  '/blogs/',
  '/jobs/',
  '/press/',
  '/resource-center/',
  '/help-center/',
  '/product-status/',
  '/support/',
  '/production-technology/',
  '/production-quality/',
  '/research-and-development/',
];

pages.forEach((route) => {
  test(`static HTML "${route}" renders with footer and menu button`, async ({ page }) => {
    const res = await page.goto(route);
    expect(res.status()).toBe(200);

    // Must have footer
    await expect(page.locator('.footer')).toHaveCount(1, { timeout: 10000 });

    // Must have menu button
    await expect(page.locator('#menu-button')).toHaveCount(1, { timeout: 10000 });
  });
});

test('/product/ static page renders (has product ID 1)', async ({ page }) => {
  // This test verifies the pre-generated static HTML file at /product/index.html
  // Navigating to /product/ via Express may redirect; we load the file directly
  await page.goto('/product/index.html', { timeout: 15000 });
  // The static product page always shows product 1
  await expect(page.locator('#tech-back')).toHaveCount(1, { timeout: 10000 });
  await expect(page.locator('.product-holder .parallelogram')).toHaveCount(1, { timeout: 10000 });
});

test('es-ES static pages render', async ({ page }) => {
  const esPages = [
    '/es-ES/',
    '/es-ES/home/',
    '/es-ES/about-us/',
    '/es-ES/contact-us/',
    '/es-ES/products/',
    '/es-ES/magnalium/',
    '/es-ES/magnesium/',
  ];

  for (const route of esPages) {
    const res = await page.goto(route);
    expect(res.status()).toBe(200);
    await expect(page.locator('.footer')).toHaveCount(1, { timeout: 10000 });
  }
});