import { chromium, firefox, webkit } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const output = 'docs/qa/september14';
await mkdir(output, { recursive: true });
const results = [];
for (const [name, engine] of Object.entries({ chromium, firefox, webkit })) {
  const browser = await engine.launch();
  try {
    for (const width of [390, 1440]) for (const mode of ['no-preference', 'reduce']) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: mode });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto('http://127.0.0.1:3001');
      if (name === 'chromium' && width === 1440 && mode === 'no-preference') {
        await page.locator('.v2-opening[data-running="true"]').waitFor({ timeout: 1400 });
        await page.screenshot({ path: `${output}/opening-logo.png` });
        await page.waitForTimeout(500);
        await page.screenshot({ path: `${output}/opening-handoff.png` });
      }
      await page.waitForTimeout(1900);
      await page.screenshot({ path: `${output}/${name}-${width}-${mode}-home.png` });
      await page.locator('#home-nexus').scrollIntoViewIfNeeded();
      await page.getByRole('button', { name: 'Human authorization' }).click();
      await page.waitForTimeout(100);
      await page.screenshot({ path: `${output}/${name}-${width}-${mode}-nexus.png` });
      await page.locator('#close-heading').scrollIntoViewIfNeeded();
      await page.waitForTimeout(750);
      await page.screenshot({ path: `${output}/${name}-${width}-${mode}-close.png` });
      results.push({ browser: name, width, mode, overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), errors });
      await page.close();
    }
  } finally { await browser.close(); }
}
await writeFile(`${output}/browser-checks.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify(results));
