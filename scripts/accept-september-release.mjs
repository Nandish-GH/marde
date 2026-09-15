import { chromium, firefox, webkit } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:3001';
const output='docs/qa/september15';
await mkdir(output,{recursive:true});
const routes=['/','/technology/','/mission/','/team/','/support/','/faq/','/privacy/','/contact/','/thank-you/','/missing-release-check/','/nandish/','/snehi/','/aanya/','/arjun/','/saathvika/'];
const results=[];
for(const [name,engine] of Object.entries({chromium,firefox,webkit})){
 const browser=await engine.launch();
 try{
  for(const width of name==='chromium'?[320,390,768,1024,1440]:[390,1440]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
   for(const route of routes){
    const errors=[];const handler=e=>errors.push(e.message);page.on('pageerror',handler);
    const response=await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);
    const state=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,h1:document.querySelectorAll('h1').length,title:document.title,canonical:document.querySelector('link[rel="canonical"]')?.href,description:document.querySelector('meta[name="description"]')?.content}));
    results.push({browser:name,width,route,status:response.status(),...state,errors});
    if(name==='chromium'&&[390,1440].includes(width)){
     const slug=route==='/'?'home':route.split('/')[1];
     await page.screenshot({path:`${output}/${slug}-${width}.png`,fullPage:true});
    }
    page.off('pageerror',handler);
   }
   await page.close();
  }
  for(const width of [390,1440]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'no-preference'});
   await page.goto(base+'/technology/');
   for(const section of ['air','ground','modules']){
    await page.locator('#'+section).scrollIntoViewIfNeeded();await page.waitForTimeout(950);
    await page.screenshot({path:`${output}/${name}-${section}-${width}.png`});
   }
   if(width===390){
    await page.getByRole('button',{name:'Open main navigation'}).click();
    await page.waitForTimeout(400);await page.screenshot({path:`${output}/${name}-mobile-menu.png`});
    await page.getByRole('dialog').getByRole('link',{name:'MARDE home',exact:true}).click();
    await page.waitForURL(base+'/');
   }
   await page.locator('footer').scrollIntoViewIfNeeded();await page.screenshot({path:`${output}/${name}-footer-${width}.png`});
   await page.close();
  }
 }finally{await browser.close();}
}
for(const channel of ['chrome','msedge']){
 try{
  const browser=await chromium.launch({channel});
  const page=await browser.newPage({viewport:{width:1280,height:900}});
  await page.goto(base+'/');await page.waitForTimeout(1300);
  await page.keyboard.press('PageDown');await page.waitForTimeout(500);
  const keyboardScrolled=await page.evaluate(()=>scrollY>0);
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.getByRole('link',{name:'Explore the Technology',exact:true}).first().click();
  await page.waitForURL(base+'/technology/');
  results.push({channel,keyboardScrolled,runtimeReduce:await page.evaluate(()=>!document.documentElement.classList.contains('lenis')),technology:true});
  await browser.close();
 }catch(error){results.push({channel,unavailable:String(error)});}
}
await writeFile(`${output}/acceptance.json`,JSON.stringify(results,null,2));
const issues=results.filter(r=>r.overflow||r.errors?.length||r.h1!==undefined&&r.h1!==1||r.status!==undefined&&r.status!==(r.route==='/missing-release-check/'?404:200));
console.log(JSON.stringify({checks:results.length,issues,channels:results.filter(r=>r.channel)},null,2));
if(issues.length)process.exitCode=1;
