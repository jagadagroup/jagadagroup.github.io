const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testMatch: '**/tests/specs/**/*.spec.js',
  testIgnore: ['**/data-integrity.spec.js', '**/tests/specs/static/*'],
  timeout: 15000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 1280, height: 800 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { viewport: { width: 1280, height: 800 } },
    },
  ],
  webServer: {
    command: 'npx serve -p 3000 -s ./nextjs/out',
    port: 3000,
    timeout: 10 * 1000,
    reuseExistingServer: false,
  },
});