const { test, expect } = require('@playwright/test');

test.describe('Product Catalog Pages', () => {
  test('/magnesium shows 3 products', async ({ page }) => {
    await page.goto('/magnesium');
    const pageHeading = page.locator('.about-head').first().locator('h2');
    await expect(pageHeading).toContainText('PRODUCT');
    const productCards = page.locator('.parallel-home');
    await expect(productCards).toHaveCount(3);
  });

  test('/products shows full catalog (11 items)', async ({ page }) => {
    await page.goto('/products');
    const pageHeading = page.locator('.about-head').first().locator('h2');
    await expect(pageHeading).toContainText('PRODUCT');
    await expect(page.locator('h3')).toContainText('Where quality meets customer');
    const productCards = page.locator('.parallel-home');
    await expect(productCards).toHaveCount(11);
  });

  test('/magnalium shows 7 products', async ({ page }) => {
    await page.goto('/magnalium');
    const pageHeading = page.locator('.about-head').first().locator('h2');
    await expect(pageHeading).toContainText('PRODUCT');
    const productCards = page.locator('.parallel-home');
    await expect(productCards).toHaveCount(7);
  });

  test('/product?id=1 shows detail with back button and data cards', async ({ page }) => {
    await page.goto('/product?id=1');
    await expect(page.locator('#tech-back[href="/products"]')).toHaveCount(1);
    await expect(page.locator('.product-holder .parallelogram')).toHaveCount(1);
    const dataCards = page.locator('#tech-data .col-lg-3');
    await expect(dataCards).toHaveCount(4);
  });

  test('all 11 product detail pages have valid tech data', async ({ browser }) => {
    for (const id of [1,2,3,4,5,6,7,8,9,10,11]) {
      const page = await browser.newPage();
      await page.goto(`/product?id=${id}`, { timeout: 15000 });
      const dataCards = page.locator('#tech-data .col-lg-3');
      await expect(dataCards).toHaveCount(4);
      const firstValue = dataCards.first().locator('.tech-value');
      await expect(firstValue).not.toBeEmpty();
      await page.close();
    }
  });
});