const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders ISO certification images', async ({ page }) => {
    await expect(page.locator('img[src="/images/ISO-9001-2008.png"]')).toHaveCount(1);
    await expect(page.locator('img[src="/images/ISO-14001.png"]')).toHaveCount(1);
  });

  test('shows estd 1992 logo', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('jagada industries');
    await expect(page.locator('h2.lead.english')).toContainText('Pioneers in Pyrotechnic & Non Ferrous Metal Powders');
    await expect(page.locator('.estd')).toContainText('estd');
    await expect(page.locator('.estd')).toContainText('1992');
  });

  test('has 4 feature cards', async ({ page }) => {
    const cards = page.locator('#head-points .head-point');
    await expect(cards).toHaveCount(4);
    await expect(page.locator('#head-points')).toContainText('Global Leaders in');
    await expect(page.locator('#head-points')).toContainText('Quality standards');
    await expect(page.locator('#head-points')).toContainText('Why Us?');
    await expect(page.locator('#head-points')).toContainText('Advanced');
  });

  test('has info section', async ({ page }) => {
    await expect(page.locator('.info')).toContainText('Begin your journey of Quality Products with us');
    await expect(page.locator('.info')).toContainText('Somethings aren\'t too good to be true. Experience the quality with us.');
  });

  test('has animated counters (1992, 50+, 10+, #1)', async ({ page }) => {
    const counters = page.locator('#inspired .emulate');
    await expect(counters).toHaveCount(4);
  });

  test('has 11 product grid images linking to /product?id=N', async ({ page }) => {
    // Product grid inside the section, not counting footer/nav links
    const productGrid = page.locator('section .parallel-home').first().locator('..');
    const productLinks = productGrid.locator('a[href^="/product?id="]');
    await expect(productLinks).toHaveCount(11);

    // Product images present
    const imgs = productGrid.locator('img');
    await expect(imgs.first()).toHaveAttribute('src', /.+/);
  });

  test('includes page-specific JS (index.js)', async ({ page }) => {
    await expect(page.locator('script[src="/javascripts/index.js"]')).toHaveCount(1);
  });
});