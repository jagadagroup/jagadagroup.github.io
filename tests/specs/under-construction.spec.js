const { test, expect } = require('@playwright/test');

const underConstructionPages = [
  '/customers',
  '/blogs',
  '/jobs',
  '/press',
  '/resource-center',
  '/help-center',
  '/product-status',
  '/support',
];

underConstructionPages.forEach((route) => {
  test(`"${route}" shows PAGE UNDER CONSTRUCTION`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('.about-us')).toContainText('PAGE UNDER CONSTRUCTION');
    await expect(page.locator('img[src="/images/under-construction.png"]')).toHaveCount(1);

    // "KEEP IN TOUCH" + "CONTACT US" link
    await expect(page.locator('.window')).toContainText('KEEP IN TOUCH');
    const contactLink = page.locator('.window a[href="/contact-us"]');
    await expect(contactLink).toContainText('CONTACT US');
  });
});