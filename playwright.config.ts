import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3348",
    trace: "retain-on-failure",
    channel: process.env.CI ? undefined : "chrome",
  },
  webServer: {
    command: "pnpm start --hostname 127.0.0.1 --port 3348",
    url: "http://127.0.0.1:3348",
    reuseExistingServer: false,
    timeout: 60_000,
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 900 },
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 402, height: 874 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
