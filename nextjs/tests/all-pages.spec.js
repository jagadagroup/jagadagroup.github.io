const { test, expect } = require('@playwright/test');

const PAGES = [
  { path: '/', name: 'Homepage', checkTitle: true, checkH1: true },
  { path: '/home/', name: 'Home (duplicate)', checkTitle: true },
  { path: '/about-us/', name: 'About Us', checkTitle: true },
  { path: '/contact-us/', name: 'Contact Us', checkTitle: true },
  { path: '/products/', name: 'Products', checkTitle: true },
  { path: '/magnalium/', name: 'Magnalium', checkTitle: true },
  { path: '/magnesium/', name: 'Magnesium', checkTitle: true },
  { path: '/production-technology/', name: 'Production Technology', checkTitle: true },
  { path: '/production-quality/', name: 'Production Quality', checkTitle: true },
  { path: '/research-and-development/', name: 'R&D', checkTitle: true },
  { path: '/customers/', name: 'Customers', checkTitle: true },
  { path: '/blogs/', name: 'Blogs', checkTitle: true },
  { path: '/jobs/', name: 'Jobs', checkTitle: true },
  { path: '/press/', name: 'Press', checkTitle: true },
  { path: '/resource-center/', name: 'Resource Center', checkTitle: true },
  { path: '/help-center/', name: 'Help Center', checkTitle: true },
  { path: '/product-status/', name: 'Product Status', checkTitle: true },
  { path: '/support/', name: 'Support', checkTitle: true },
];

PAGES.forEach(({ path, name, checkH1 }) => {
  test(`${name} page (${path}) returns 200 and renders footer`, async ({ page }) => {
    const res = await page.goto(path, { timeout: 10000 });
    expect(res.status()).toBe(200);

    // All pages must have the footer
    await expect(page.locator('footer')).toHaveCount(1, { timeout: 5000 });

    // All pages must have a title tag
    await expect(page.locator('title')).not.toBeEmpty({ timeout: 5000 });

    if (checkH1) {
      await expect(page.locator('h1')).toHaveCount(1, { timeout: 5000 });
    }
  });
});