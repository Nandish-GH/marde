import {test,expect} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {teamProfiles} from "../lib/content/profiles";

test("all main pages and profiles hold their layout down to 320px",async({page})=>{
  await page.emulateMedia({reducedMotion:"reduce"});
  for(const width of [320,390,768,1024,1440]){
    await page.setViewportSize({width,height:900});
    for(const path of ["technology","mission","team","support","faq","privacy","nandish","snehi"]){
      await page.goto(`/${path}/`);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${path} at ${width}`).toBe(true);
    }
  }
});

test("every profile is usable, excluded from search and contains only approved contact fields",async({page,request})=>{
  const sitemap=await(await request.get("/sitemap.xml")).text();
  for(const person of teamProfiles){
    await page.goto(`/${person.slug}/`);
    await expect(page.getByRole("heading",{name:person.name})).toBeVisible();
    await expect(page.locator("nav,footer")).toHaveCount(0);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content","noindex, nofollow");
    expect(sitemap).not.toContain(`/${person.slug}`);
    const downloaded=page.waitForEvent("download");await page.getByRole("link",{name:"ADD TO CONTACTS"}).click();expect((await downloaded).suggestedFilename()).toBe(`${person.slug}.vcf`);
    const card=await(await request.get(`/contacts/${person.slug}.vcf`)).text();
    expect(card).toContain(`FN:${person.name}`);expect(card).toContain(`TITLE:${person.role}`);expect(card).toContain("END:VCARD");
    if(person.slug!=="nandish"){expect(card).not.toContain("TEL");expect(card).not.toContain("EMAIL");}
    const axe=await new AxeBuilder({page}).analyze();expect(axe.violations).toEqual([]);
  }
});

test("scheduler loads on request, traps focus and returns it on close",async({page})=>{
  let requests=0;
  await page.route("https://calendly.com/**",async route=>{requests++;await route.fulfill({contentType:"text/html",body:'<html lang="en"><title>Scheduling test fixture</title><body><h1>Choose a time</h1><button>Example slot</button></body></html>'});});
  await page.goto("/nandish/");expect(requests).toBe(0);await expect(page.locator("iframe")).toHaveCount(0);
  const trigger=page.getByRole("link",{name:"Schedule",exact:true});await trigger.click();
  const dialog=page.getByRole("dialog",{name:"Schedule with Nandish"});await expect(dialog).toBeVisible();
  await expect(page.frameLocator('iframe[title="Calendly scheduling with Nandish Panchal"]').getByRole("heading",{name:"Choose a time"})).toBeVisible();expect(requests).toBe(1);
  await expect(dialog.getByRole("link",{name:"Open scheduling page"})).toHaveAttribute("href","https://calendly.com/nandishmarde/30");
  const close=dialog.getByRole("button",{name:"Close scheduling dialog"});await close.focus();await page.keyboard.press("Shift+Tab");expect(await dialog.evaluate(el=>el.contains(document.activeElement))).toBe(true);
  await close.focus();await page.keyboard.press("Escape");await expect(dialog).toBeHidden();await expect(trigger).toBeFocused();await expect(page.locator("iframe")).toHaveCount(0);
  await trigger.click();await dialog.getByRole("button",{name:"Close scheduling dialog"}).click();await expect(trigger).toBeFocused();
});

test("scheduler has a direct no-JavaScript link",async({browser})=>{
  const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();
  await page.goto(`${process.env.QA_BASE_URL||"http://localhost:3000"}/nandish/`);
  await expect(page.getByRole("link",{name:"Schedule",exact:true})).toHaveAttribute("href","https://calendly.com/nandishmarde/30");await expect(page.locator("iframe")).toHaveCount(0);await context.close();
});

test("new graphics and editorial pages remain accessible without motion",async({page})=>{
  await page.emulateMedia({reducedMotion:"reduce"});
  for(const path of ["technology","mission","team","privacy"]){
    await page.goto(`/${path}/`);const axe=await new AxeBuilder({page}).analyze();expect(axe.violations.filter(v=>["critical","serious"].includes(v.impact||"")),path).toEqual([]);
  }
  await page.goto("/technology/#modules");await expect(page.getByRole("img",{name:/Modules.*Provisional/})).toBeVisible();
});
