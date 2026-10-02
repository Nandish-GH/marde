import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: false,
  workers: 2,
  forbidOnly: true,
  retries: 0,
  reporter: "list",
  use: {
    baseURL: process.env.QA_BASE_URL || (process.env.QA_EXPORT ? "http://127.0.0.1:3001" : "http://localhost:3000"),
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 1000 } } },
    { name: "mobile", use: { ...devices["Pixel 7"], viewport: { width: 390, height: 1200 } } },
  ],
  webServer: process.env.QA_BASE_URL ? undefined : {
    command: process.env.QA_EXPORT ? "node scripts/serve-export.mjs" : "npm run dev",
    url: process.env.QA_EXPORT ? "http://127.0.0.1:3001" : "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
