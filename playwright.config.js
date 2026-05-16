const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/specs',
  testIgnore: ['**/data-integrity.spec.js'],
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
    {
      name: 'mobile',
      use: { viewport: { width: 375, height: 812 } },
    },
  ],
  webServer: {
    command: 'node ./bin/www',
    port: 3000,
    timeout: 15 * 1000,
    reuseExistingServer: true,
  },
});