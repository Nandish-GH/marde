import {chromium} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
const base=process.env.QA_BASE_URL||'http://localhost:3000';
const out=process.env.QA_OUTPUT||'docs/qa/session2';
await mkdir(out,{recursive:true});
const browser=await chromium.launch();
const routes=['technology','mission','team','support','faq','privacy','contact','nandish','snehi','aanya','arjun','saathvika','thank-you'];
for(const width of (process.env.QA_WIDTHS||"390,768,1024,1440").split(",").map(Number)){
 const page=await browser.newPage({viewport:{width,height:950},reducedMotion:'no-preference'});
 for(const route of routes){
  const errors=[];const error=e=>errors.push(e.message);page.on('pageerror',error);
  await page.goto(`${base}/${route}/`);await page.waitForTimeout(950);
  await page.screenshot({path:`${out}/${route}-${width}.png`});
  for(const section of await page.locator('main section').all()){await section.scrollIntoViewIfNeeded();await page.waitForTimeout(120);}
  await page.waitForTimeout(750);
  await page.screenshot({path:`${out}/${route}-full-${width}.png`,fullPage:true,style:"[data-v2-header],.skip-link,nextjs-portal{visibility:hidden!important}"});
  if(route==='technology')await page.addStyleTag({content:'[data-v2-header],.skip-link,nextjs-portal{visibility:hidden!important}'});
  if(route==='technology')for(const id of ['air','ground','nexus','modules']){await page.locator(`#${id}`).scrollIntoViewIfNeeded();await page.waitForTimeout(750);await page.locator(`#${id}`).screenshot({path:`${out}/${id}-${width}.png`});}
  console.log(JSON.stringify({route,width,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),errors}));
  page.off('pageerror',error);
 }
 await page.close();
}
await browser.close();
