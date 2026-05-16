const { test, expect } = require('@playwright/test');

test.describe('About Us Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about-us');
  });

  test('has heading', async ({ page }) => {
    await expect(page.locator('.about-head h2')).toContainText("LET'S WORK TOGETHER");
  });

  test('shows two contact cards', async ({ page }) => {
    await expect(page.locator('.about-us h4').first()).toContainText('DELEEPKUMAR');
    await expect(page.locator('.about-us')).toContainText('Engineer in Metallurgy');
    await expect(page.locator('.about-us')).toContainText('+91-95855-44719');
  });

  test('has brochure download link', async ({ page }) => {
    const downloadLink = page.locator('a[href="/docs/magnaliumLabReport.pdf"]');
    await expect(downloadLink).toHaveCount(1);
    await expect(downloadLink).toContainText('DOWNLOAD');
  });

  test('includes aboutUs.js', async ({ page }) => {
    await expect(page.locator('script[src="/javascripts/aboutUs.js"]')).toHaveCount(1);
  });
});

test.describe('Contact Us Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact-us');
  });

  test('has contact header', async ({ page }) => {
    await expect(page.locator('#contact-header')).toContainText('MEET OUR EXPERTISE AT WORK');
  });

  test('shows 4 contact info cards', async ({ page }) => {
    const cards = page.locator('#contact-us .contact-child');
    await expect(cards).toHaveCount(4);

    await expect(page.locator('#contact-us')).toContainText('E-MAIL US');
    await expect(page.locator('#contact-us')).toContainText('PHONE NUMBER');
    await expect(page.locator('#contact-us')).toContainText('WEBSITE');
    await expect(page.locator('#contact-us')).toContainText('ADDRESS');
  });

  test('has enquiry form with required fields', async ({ page }) => {
    // Scope to contact page form specifically (not footer form)
    const allForms = page.locator('form.newsletter');
    const count = await allForms.count();
    expect(count).toBeGreaterThanOrEqual(1); // page form + footer form

    const form = allForms.filter({ has: page.locator('#contact-name') });
    await expect(form).toHaveCount(1);
    await expect(form.locator('h2')).toContainText('Enquiry / Feedback Form');

    // Form fields
    await expect(page.locator('#contact-name')).toHaveCount(1);
    await expect(page.locator('#contact-address')).toHaveCount(1);
    await expect(page.locator('#contact-phone')).toHaveCount(1);
    await expect(page.locator('#contact-email')).toHaveCount(1);
    await expect(page.locator('#contact-comments')).toHaveCount(1);

    // Submit/Reset buttons
    await expect(form.locator('button[type="submit"]')).toHaveCount(1);
    await expect(form.locator('button[type="reset"]')).toHaveCount(1);

    // Mandatory fields note
    await expect(page.locator('.form-text')).toContainText('Marked fields are mandatory');
  });

  test('includes contactUs.js', async ({ page }) => {
    await expect(page.locator('script[src="/javascripts/contactUs.js"]')).toHaveCount(1);
  });
});

test.describe('Production Technology Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/production-technology');
  });

  test('has heading', async ({ page }) => {
    await expect(page.locator('.about-head h2')).toContainText("LET'S WORK TOGETHER");
  });

  test('has brochure download', async ({ page }) => {
    const downloadLink = page.locator('.window a');
    await expect(downloadLink).toContainText('DOWNLOAD');
  });

  test('includes productionTechnology.js', async ({ page }) => {
    await expect(page.locator('script[src="/javascripts/productionTechnology.js"]')).toHaveCount(1);
  });
});

test.describe('Production Quality Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/production-quality');
  });

  test('has heading', async ({ page }) => {
    await expect(page.locator('.about-head h2')).toContainText('PLEDGE OF QUALITY');
  });

  test('shows test method sections', async ({ page }) => {
    await expect(page.locator('.about-us')).toContainText('Magnalium Uncoated Test methods');
    await expect(page.locator('.about-us')).toContainText('Magnalium Coated Test methods');
  });

  test('includes productionQuality.js', async ({ page }) => {
    await expect(page.locator('script[src="/javascripts/productionQuality.js"]')).toHaveCount(1);
  });
});

test.describe('Research & Development Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/research-and-development');
  });

  test('has R&D content sections', async ({ page }) => {
    await expect(page.locator('.rnd')).toContainText('Testing methods');
    await expect(page.locator('.rnd')).toContainText('Powder Range');
    await expect(page.locator('.rnd')).toContainText('Powder Lab');
  });

  test('has video placeholder', async ({ page }) => {
    await expect(page.locator('.video i.fa-play-circle')).toHaveCount(1);
  });

  test('includes researchDev.js', async ({ page }) => {
    await expect(page.locator('script[src="/javascripts/researchDev.js"]')).toHaveCount(1);
  });
});