import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const output = 'docs/qa/session3-motion';
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'no-preference' });
  await page.addInitScript(() => {
    window.qaRafCount = 0;
    const raf = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = callback => raf(time => { window.qaRafCount++; callback(time); });
  });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(process.env.QA_BASE_URL || 'http://127.0.0.1:3001');
  await page.waitForTimeout(1600);
  await page.mouse.move(500, 350);
  await page.mouse.wheel(0, 1200);
  const samples = [];
  for (const delay of [50, 150, 500, 1000]) {
    await page.waitForTimeout(delay);
    samples.push(await page.evaluate(() => ({ y: scrollY, animations: document.getAnimations().length, classes: document.documentElement.className })));
    await page.screenshot({ path: `${output}/wheel-${samples.length}.png` });
  }
  const before = await page.evaluate(() => window.qaRafCount);
  await page.waitForTimeout(1000);
  const idleCallbacks = await page.evaluate(() => window.qaRafCount) - before;
  await page.keyboard.press('PageDown');
  await page.waitForTimeout(500);
  const keyboardY = await page.evaluate(() => scrollY);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => !document.documentElement.classList.contains('lenis'));
  const reduced = await page.evaluate(() => ({ smooth: document.documentElement.classList.contains('lenis'), cursor: getComputedStyle(document.querySelector('.v2-cursor')).display, values: [...document.querySelectorAll('[data-count]')].map(el => el.textContent) }));
  const result = { samples, idleCallbacks, keyboardY, reduced, errors };
  await writeFile(`${output}/observations.json`, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result));
} finally { await browser.close(); }
