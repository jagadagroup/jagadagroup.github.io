const { test, expect } = require('@playwright/test');

test.describe('Spanish (es-ES) Locale', () => {
  test('/es-ES/ root page renders successfully', async ({ page }) => {
    const res = await page.goto('/es-ES/index.html');
    expect(res.status()).toBe(200);
    await expect(page.locator('.page')).toHaveCount(1);
    await expect(page.locator('.footer')).toHaveCount(1);
    await expect(page.locator('#menu-button')).toHaveCount(1);
  });

  test('/es-ES/home renders homepage content', async ({ page }) => {
    await page.goto('/es-ES/home/index.html');
    // Title is the same in Spanish (not translated)
    await expect(page.locator('.estd')).toContainText('1992');
  });
});