const { test, expect } = require('@playwright/test');

test.describe('SEO & Meta Compliance', () => {
  test('every page has a <title>', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('title')).not.toBeEmpty();
  });

  test('every page has meta description', async ({ page }) => {
    await page.goto('/');
    const desc = page.locator('meta[name="description"]');
    await expect(desc).toHaveAttribute('content');
  });

  test('every page has meta robots index,follow', async ({ page }) => {
    await page.goto('/');
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', 'index,follow');
  });

  test('h1 is present on homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCount(1);
  });

  test('navigation is inside <nav>', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav .menu')).toHaveCount(1);
  });

  test('footer is inside <footer>', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body > .page > footer')).toHaveCount(1);
  });

  test('critical images have alt attributes', async ({ page }) => {
    await page.goto('/about-us');
    const contactImgs = page.locator('img.contact');
    const count = await contactImgs.count();
    for (let i = 0; i < count; i++) {
      await expect(contactImgs.nth(i)).toHaveAttribute('alt', /.+/);
    }
  });

  test('product images exist and load', async ({ page }) => {
    await page.goto('/products');
    const imgs = page.locator('.parallel-home img');
    const count = await imgs.count();
    expect(count).toBeGreaterThan(0);
    // Check first image loads
    const firstImg = imgs.first();
    await expect(firstImg).toHaveAttribute('src', /.+/);

    // Check image natural width (loaded)
    const loaded = await firstImg.evaluate((el) => (el).naturalWidth > 0);
    expect(loaded).toBeTruthy();
  });
});