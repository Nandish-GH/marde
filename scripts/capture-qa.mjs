import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const baseURL = process.env.QA_BASE_URL ?? "http://localhost:3000";
const outputDirectory = new URL("../docs/qa/after/", import.meta.url);

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch();

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 1200 },
]) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  await page.goto(`${baseURL}/`, { waitUntil: "networkidle" });
  await page.screenshot({
    path: new URL(`homepage-${viewport.name}.png`, outputDirectory).pathname.slice(1),
    fullPage: true,
  });

  await page.goto(`${baseURL}/technology/#nexus`, { waitUntil: "networkidle" });
  await page.locator("#nexus").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: new URL(`technology-nexus-${viewport.name}.png`, outputDirectory).pathname.slice(1),
  });

  await context.close();
}

await browser.close();
