import { chromium } from '@playwright/test';

// Reuse the site's own type, wordmark and original architecture artwork.
// Run against a built export so the generated image matches production.
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: 'reduce' });
  const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3001';
  await page.goto(base);
  const source = await page.evaluate(async () => {
    await document.fonts.ready;
    const art = document.querySelector('[aria-label="Conceptual architecture: Air and Ground connected through Nexus, with adaptable Modules"]').outerHTML;
    return { art, classes: document.documentElement.className, styles: [...document.querySelectorAll('link[rel="stylesheet"],style')].map(el => el.outerHTML).join('') };
  });
  await page.setContent(`<html class="${source.classes}"><head><base href="${base}">${source.styles}</head><body></body></html>`);
  await page.evaluate(async ({ art }) => {
    document.body.innerHTML = `<div class="social"><img class="brand" src="/brand/marde-logo-horizontal-light.png" alt="MARDE"><div class="copy"><p class="eyebrow">EMERGENCY-RESPONSE ROBOTICS</p><h1>Response starts<br><em>before</em> arrival.</h1><p class="description">Air. Ground. Human control.<br>One coordinated response.</p></div><div class="art">${art}</div><footer><span>mardeinc.com</span><span>IN DEVELOPMENT</span></footer></div>`;
    const style = document.createElement('style');
    style.textContent = `html,body{width:1200px;height:630px;overflow:hidden;background:#111418}.social{position:relative;width:1200px;height:630px;padding:54px 60px;color:#f4f3ee;background:radial-gradient(ellipse at 80% 50%,#19283988,transparent 55%)}.brand{display:block;width:190px;height:auto}.copy{position:absolute;left:60px;top:183px;z-index:1}.eyebrow{font:11px var(--v-mono);letter-spacing:.1em;color:#afbbc9;margin:0 0 24px}h1{font:500 61px/1.08 var(--v-heading);letter-spacing:-.055em;margin:0}h1 em{font-style:normal;color:#8fbaff}.description{font:18px/1.6 var(--v-body);color:#bcc9d8;margin-top:26px}.art{position:absolute;right:38px;top:130px;width:570px}.art>div{aspect-ratio:1.4}.art [class*="sceneLabel"]{display:none}.art [class*="note"]{font-size:11px!important;bottom:-18px!important}.art [class*="node"]{animation:none}.art [class*="route"]{animation:none}.art [class*="terrain"]{opacity:.75}footer{position:absolute;bottom:32px;left:60px;right:60px;border-top:1px solid #35404b;padding-top:18px;display:flex;justify-content:space-between;font:12px var(--v-mono);color:#afbbc9}footer span:last-child{color:#8fbaff;letter-spacing:.08em}`;
    document.head.append(style);
    await Promise.all([...document.images].map(image => image.decode()));
    await document.fonts.ready;
  }, source);
  await page.screenshot({ path: 'public/og-v2.png' });
  console.log('Generated public/og-v2.png (1200 × 630)');
} finally {
  await browser.close();
}
