const { test, expect } = require('@playwright/test');

test.describe('i18n', () => {
  test('/es-ES/ renders with Spanish content', async ({ page }) => {
    await page.goto('/es-ES/');
    await expect(page.locator('h2')).toContainText('Pioneros');
    await expect(page.locator('footer')).toHaveCount(1);
  });

  test('/es-ES/about-us renders with Spanish heading', async ({ page }) => {
    await page.goto('/es-ES/about-us/');
    const heading = page.locator('.about-head h2');
    await expect(heading).toContainText('TRABAJEMOS');
  });

  test('/es-ES/contact-us renders with Spanish form labels', async ({ page }) => {
    await page.goto('/es-ES/contact-us/');
    await expect(page.locator('#contact-us')).toContainText('ENVÍENOS UN CORREO');
    await expect(page.locator('form')).toContainText('Nombre');
  });

  test('/es-ES/products renders product catalog', async ({ page }) => {
    await page.goto('/es-ES/products/');
    await expect(page.locator('h2')).toContainText('CATÁLOGO');
  });

  test('/es-ES/ pages have hreflang back to /en/', async ({ page }) => {
    await page.goto('/es-ES/');
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
  });
});