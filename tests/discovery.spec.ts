import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage exposes research links and scanner-readable FAQ schema", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Research informs the next test." })).toBeVisible();
  for (const [name, href] of [["Read the research", "/research/"], ["EMS requirements", "/ems-partners/"], ["Development status", "/updates/"]]) {
    await expect(page.getByRole("link", { name, exact: true })).toHaveAttribute("href", href);
  }
  const entities = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(text => JSON.parse(text));
  expect(entities.map(item => item["@type"])).toEqual(["Organization", "WebSite", "FAQPage"]);
  const org = entities.find(item => item["@type"] === "Organization");
  const website = entities.find(item => item["@type"] === "WebSite");
  expect(org.name).toBe("MARDE Inc.");
  expect(org.legalName).toBe(org.name);
  expect(org.alternateName).toBe(website.name);
  expect(website.alternateName).toBe(org.name);
  expect(website.url).toBe("https://mardeinc.com/");
  expect(org.url).toBe(website.url);
  expect(website.publisher["@id"]).toBe(org["@id"]);
  const faq = entities.find(item => item["@type"] === "FAQPage");
  expect(faq.mainEntity).toHaveLength(4);
  for (const item of faq.mainEntity) {
    await expect(page.getByRole("button", { name: item.name })).toBeVisible();
    expect(await page.locator("main").textContent()).toContain(item.acceptedAnswer.text);
  }
});

test("discovery pages render on desktop and mobile without horizontal overflow", async ({ page }) => {
  for (const route of ["about", "ems-partners", "research", "updates", "technology/air", "technology/ground", "technology/nexus", "technology/modules", "research/drone-aed-evidence", "research/final-access", "research/human-oversight", "research/aviation-pathway", "research/response-gap", "research/evaluating-early-stage-partners"]) {
    await page.goto(`/${route}/`);
    await expect(page.locator("h1")).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  }
});
test("FAQ answers are openly visible and agree with schema", async ({ page }) => {
  await page.goto("/faq/");
  const data = await page.locator('script[type="application/ld+json"]').first().textContent();
  const schema = JSON.parse(data!);
  expect(schema.mainEntity).toHaveLength(20);
  for (const item of schema.mainEntity) await expect(page.getByText(item.acceptedAnswer.text, { exact: true })).toBeVisible();
});
test("new editorial pages have no serious accessibility violations", async ({ page }) => {
  for (const route of ["/about/", "/research/", "/technology/air/", "/faq/"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter(item => ["serious", "critical"].includes(item.impact || ""))).toEqual([]);
  }
});
test("homepage accordion starts closed with answer text present in HTML", async ({ page, request }) => {
  const html = await (await request.get("/")).text();
  expect(html).toContain("There are no deployed systems, commercial pilots");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Is the system deployed today?", exact: true });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  const answer = page.getByText(/No\. MARDE is pre-seed, pre-prototype and pre-revenue\./);
  await expect(answer).toBeHidden();
  await trigger.click();
  await expect(answer).toBeVisible();
});
