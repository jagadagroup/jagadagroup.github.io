const { test, expect } = require('@playwright/test');

test.describe('Navigation Menu', () => {
  test('has 6 top-level menu items', async ({ page }) => {
    await page.goto('/');
    const topItems = page.locator('nav .menu > li');
    await expect(topItems).toHaveCount(6);
  });

  test('home links to /home', async ({ page }) => {
    await page.goto('/');
    const homeLink = page.locator('nav .menu > li a[href="/home"]');
    await expect(homeLink).toContainText('home');
  });

  test('about us links to /about-us', async ({ page }) => {
    await page.goto('/');
    const aboutLink = page.locator('nav .menu > li a[href="/about-us"]');
    await expect(aboutLink).toContainText('about us');
  });

  test('products has submenu with Magnalium, Magnesium, Titanium', async ({ page }) => {
    await page.goto('/');
    const productRollout = page.locator('.menu-rollout[href="/products"]');
    await expect(productRollout).toContainText('products');

    const subContainer = productRollout.locator('..').locator('.menu-sub-container');
    const subItems = subContainer.locator('a');
    await expect(subItems).toHaveCount(3);
    await expect(subItems.nth(0)).toHaveAttribute('href', '/magnalium');
    await expect(subItems.nth(0)).toContainText('Magnalium Powder');
    await expect(subItems.nth(1)).toHaveAttribute('href', '/magnesium');
    await expect(subItems.nth(1)).toContainText('Magnesium Powder');
    await expect(subItems.nth(2)).toHaveAttribute('href', '/product?id=6');
    await expect(subItems.nth(2)).toContainText('Titanium Powder');
  });

  test('production technology has submenu with R&D', async ({ page }) => {
    await page.goto('/');
    const techRollout = page.locator('.menu-rollout[href="/production-technology"]');
    await expect(techRollout).toContainText('production technology');

    const subContainer = techRollout.locator('..').locator('.menu-sub-container');
    const subItems = subContainer.locator('a');
    await expect(subItems.nth(0)).toHaveAttribute('href', '/research-and-development');
    await expect(subItems.nth(0)).toContainText(/research.*Development/i);
  });

  test('production quality links to /production-quality', async ({ page }) => {
    await page.goto('/');
    const qualityLink = page.locator('nav .menu > li a[href="/production-quality"]');
    await expect(qualityLink).toContainText('Production Quality');
  });

  test('contact us links to /contact-us', async ({ page }) => {
    await page.goto('/');
    const contactLink = page.locator('nav .menu > li a[href="/contact-us"]');
    await expect(contactLink).toContainText('contact us');
  });
});