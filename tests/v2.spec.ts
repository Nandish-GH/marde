import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('V2 homepage fits all target widths with stable stats and equal system links',async({page})=>{
  for(const width of [320,390,768,1024,1440]){
    await page.setViewportSize({width,height:900});await page.goto('/');
    await expect(page.getByRole('heading',{level:1})).toHaveText('Response startsbefore arrival.');
    for(const el of await page.locator('[data-count]').all()){
      await el.scrollIntoViewIfNeeded();await expect(el).toHaveText(await el.getAttribute('data-count')||'');
      const {box,label}=await el.evaluate(node=>{const box=node.getBoundingClientRect();const label=node.parentElement?.parentElement?.querySelector('h3')?.getBoundingClientRect();return {box:{x:box.x,y:box.y,width:box.width,height:box.height},label:label?{x:label.x,y:label.y,width:label.width,height:label.height}:null};});
      expect(box && label && (box.y+box.height<=label.y || box.x+box.width<=label.x)).toBeTruthy();
    }
    for(const id of ['air','ground','nexus','modules']){
      const link=page.locator(`#system a[href="/technology/#${id}"]`);await expect(link).toHaveCount(1);await expect(link.locator('a,button')).toHaveCount(0);
    }
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
});

test('workflow and Nexus controls explain each stage without live mission claims',async({page})=>{
  await page.goto('/');
  for(const name of ['MARDE Nexus','MARDE Air','MARDE Ground','Intervention module','EMS handoff']){
    await page.getByRole('button',{name:new RegExp(name)}).click();await expect(page.locator('#response-detail h3')).toHaveText(name);
  }
  await page.getByRole('button',{name:'Human authorization 02'}).click();await expect(page.getByRole('heading',{name:'Consequential actions stay human.'})).toBeVisible();
  await page.getByRole('button',{name:'Air–Ground handoff 03'}).click();await expect(page.getByRole('heading',{name:'Coordinate the transition.'})).toBeVisible();
  await expect(page.getByText('V1 CONCEPT INTERFACE')).toBeVisible();
});

test('V2 menus, keyboard focus, reduced-motion changes and contact failure recovery',async({page})=>{
  await page.setViewportSize({width:390,height:844});await page.goto('/');
  const trigger=page.getByRole('button',{name:'Open main navigation'});await trigger.click();
  await expect(page.getByRole('dialog',{name:'Navigation'})).toBeVisible();await page.keyboard.press('Escape');await expect(trigger).toBeFocused();
  await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator('html')).not.toHaveClass(/lenis/);await expect(page.locator('.v2-opening')).toBeHidden();
  const question=page.getByRole('button',{name:'Is MARDE autonomous?',exact:true});await question.click();await expect(question).toHaveAttribute('aria-expanded','true');
  await page.goto('/contact/');await page.route('https://formspree.io/**',route=>route.fulfill({status:503,body:'unavailable'}));
  await page.getByLabel('Name',{exact:true}).fill('QA Test');await page.getByLabel('Email',{exact:true}).fill('qa@example.com');await page.getByLabel('What would you like to discuss?').fill('Test intercepted locally. Do not send.');
  await page.getByRole('button',{name:'Send message'}).click();await expect(page.locator('form').getByRole('alert')).toContainText('could not be sent');await expect(page.getByLabel('Name',{exact:true})).toHaveValue('QA Test');
  await page.route('https://formspree.io/**',route=>route.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'}));
  await page.getByRole('button',{name:'Send message'}).click();await expect(page.getByRole('heading',{name:'Thank you for reaching out.'})).toBeVisible();
});

test('homepage and Contact have no serious accessibility violations',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'});
  for(const route of ['/','/contact/']){await page.goto(route);const results=await new AxeBuilder({page}).analyze();expect(results.violations.filter(v=>['critical','serious'].includes(v.impact||''))).toEqual([]);}
});

test('V2 no-JavaScript fallback has content, navigation and visible final values',async({browser})=>{
  const context=await browser.newContext({javaScriptEnabled:false,baseURL:process.env.QA_BASE_URL||'http://localhost:3000',viewport:{width:390,height:844}});const page=await context.newPage();await page.goto('/');
  await expect(page.getByRole('heading',{level:1})).toBeVisible();await expect(page.locator('.v2-opening')).toBeHidden();await expect(page.locator('[data-count="7.6"]')).toHaveText('7.6');await expect(page.locator('footer').getByRole('link',{name:'Contact',exact:true})).toHaveAttribute('href','/contact/');await context.close();
});

test('desktop cursor switches contrast and editing retains native cursor',async({page,isMobile})=>{
  test.skip(isMobile);await page.goto('/');await expect(page.locator('html')).toHaveClass(/marde-intro-complete/);await page.mouse.move(320,240);await expect(page.locator('.v2-cursor')).toHaveAttribute('data-visible','true');await expect(page.locator('.v2-cursor')).toHaveCSS('mix-blend-mode','difference');
  await page.locator('#response-gap').scrollIntoViewIfNeeded();await page.mouse.move(330,260);await expect(page.locator('.v2-cursor span').first()).toBeVisible();
  await page.goto('/contact/');await page.getByLabel('Name',{exact:true}).hover();await expect(page.locator('.v2-cursor')).toHaveAttribute('data-visible','false');await expect(page.getByLabel('Name',{exact:true})).toHaveCSS('cursor','text');
  await page.emulateMedia({reducedMotion:'reduce'});await expect(page.locator('html')).not.toHaveClass(/v2-cursor-ready|lenis/);
});
