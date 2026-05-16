const { test, expect } = require('@playwright/test');

test.describe('Product Pages', () => {
  test('/products/ has 11 product cards', async ({ page }) => {
    await page.goto('/products/');
    // Product cards are inside the second container-fluid
    const cards = page.locator('.container-fluid .row.no-gutters').last().locator('.col-12');
    await expect(cards).toHaveCount(11);
  });

  test('/magnalium/ has 7 product cards', async ({ page }) => {
    await page.goto('/magnalium/');
    const cards = page.locator('.container-fluid .row.no-gutters').last().locator('.col-12');
    await expect(cards).toHaveCount(7);
  });

  test('/magnesium/ has 3 product cards', async ({ page }) => {
    await page.goto('/magnesium/');
    const cards = page.locator('.container-fluid .row.no-gutters').last().locator('.col-12');
    await expect(cards).toHaveCount(3);
  });

  for (let id = 1; id <= 11; id++) {
    test(`/product/${id}/ loads with tech data and back link`, async ({ page }) => {
      await page.goto(`/product/${id}/`);
      await expect(page.locator('#tech-back')).toHaveCount(1, { timeout: 5000 });
      await expect(page.locator('#tech-data .col-lg-3')).toHaveCount(4, { timeout: 5000 });
      await expect(page.locator('.product-holder')).toHaveCount(1, { timeout: 5000 });
    });
  }
});

test.describe('Under Construction Pages', () => {
  const ucs = [
    '/customers/', '/blogs/', '/jobs/', '/press/',
    '/resource-center/', '/help-center/', '/product-status/', '/support/',
  ];
  ucs.forEach((path) => {
    test(`${path} shows PAGE UNDER CONSTRUCTION`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('body')).toContainText('PAGE UNDER CONSTRUCTION');
      await expect(page.locator('a[href="/contact-us"]')).toContainText('CONTACT US');
    });
  });
});