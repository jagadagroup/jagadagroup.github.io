const { test, expect } = require('@playwright/test');

test.describe('Footer', () => {
  test('footer sections present on homepage', async ({ page }) => {
    await page.goto('/');

    // Footer is visible
    await expect(page.locator('.footer')).toBeVisible();

    // Section headings
    await expect(page.locator('.footer .gold').filter({ hasText: 'PRODUCTS' })).toHaveCount(1);
    await expect(page.locator('.footer .gold').filter({ hasText: 'COMPANY' })).toHaveCount(1);
    await expect(page.locator('.footer .gold').filter({ hasText: 'RESOURCES' })).toHaveCount(1);
    await expect(page.locator('.footer .gold').filter({ hasText: 'SUPPORT' })).toHaveCount(1);
    await expect(page.locator('.footer .gold').filter({ hasText: 'CONNECT WITH US' })).toHaveCount(1);
  });

  test('footer lists all 11 products', async ({ page }) => {
    await page.goto('/');
    const productLinks = page.locator('.footer ul').first().locator('li');
    // PRODUCTS heading + 11 products = 12 list items
    await expect(productLinks).toHaveCount(12);

    // Titanium Powder (last) has href
    await expect(page.locator('.footer a[href="/product?id=6"]').filter({ hasText: 'Titanium Powder' })).toHaveCount(1);
  });

  test('footer has company links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.footer a[href="/about-us"]')).toHaveCount(1);
    await expect(page.locator('.footer a[href="/customers"]')).toHaveCount(1);
    await expect(page.locator('.footer a[href="/press"]')).toHaveCount(1);
    await expect(page.locator('.footer a[href="/jobs"]')).toHaveCount(1);
  });

  test('footer has resource links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.footer a[href="/resource-center"]')).toHaveCount(1);
    await expect(page.locator('.footer a[href="/blogs"]')).toHaveCount(1);
  });

  test('footer has support links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.footer a[href="/help-center"]')).toHaveCount(1);
    await expect(page.locator('.footer a[href="/product-status"]')).toHaveCount(1);
    await expect(page.locator('.footer a[href="/support"]')).toHaveCount(1);
  });

  test('footer has newsletter/query form', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('.footer form.newsletter');
    await expect(form).toHaveCount(1);
    await expect(form.locator('input[type="text"]')).toHaveCount(1);
    await expect(form.locator('input[type="email"]')).toHaveCount(1);
    await expect(form.locator('input[type="submit"]')).toHaveCount(1);
  });

  test('footer has social links', async ({ page }) => {
    await page.goto('/');
    const fbLink = page.locator('.social-footer a.social-icon').first();
    await expect(fbLink).toHaveCount(1);
    await expect(fbLink.locator('i.fa-facebook')).toHaveCount(1);
    const linkedin = page.locator('.footer a[href="https://www.linkedin.com/in/deleep-kumar-504813141/"]');
    await expect(linkedin).toHaveCount(1);
  });

  test('footer has contact info (phone, address, email)', async ({ page }) => {
    await page.goto('/');
    // Phone numbers
    await expect(page.locator('.footer')).toContainText('+91 9443144719');
    await expect(page.locator('.footer')).toContainText('+91 9585544719');
    // Address
    await expect(page.locator('.footer')).toContainText('Jagada Industries');
    await expect(page.locator('.footer')).toContainText('3/1224-6, Sattur Road');
    await expect(page.locator('.footer')).toContainText('Virudhunagar - 626002, TN');
    // Email
    await expect(page.locator('.footer a[href="mailto:info@jagadagroup.com"]')).toHaveCount(1);
  });

  test('footer has Google Translate widget', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#google_translate_element')).toHaveCount(1);
  });
});