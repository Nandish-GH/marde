import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://localhost:3000';
const output = process.env.QA_OUTPUT || 'docs/qa/v2';
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
for(const width of [390,768,1440]) {
  const page = await browser.newPage({viewport:{width,height:900},reducedMotion:'no-preference'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base);await page.waitForTimeout(1100);
  await page.screenshot({path:`${output}/home-${width}.png`});
  for(const section of await page.locator('main section').all()){await section.scrollIntoViewIfNeeded();await page.waitForTimeout(180);}
  await page.waitForTimeout(1100);
  await page.screenshot({path:`${output}/home-full-${width}.png`,fullPage:true});
  await page.locator('#home-nexus').scrollIntoViewIfNeeded();await page.waitForTimeout(800);
  await page.screenshot({path:`${output}/nexus-${width}.png`});
  console.log(JSON.stringify({width,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),errors}));
  await page.close();
}
await browser.close();
