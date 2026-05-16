const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/specs/static',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3001',
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
    command: 'npx serve -p 3001 -s .',
    port: 3001,
    timeout: 15 * 1000,
    reuseExistingServer: false,
  },
});