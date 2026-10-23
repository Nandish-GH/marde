import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const slugs = ["drone-aed-delivery-new-jersey", "teleoperated-ground-robot-emergency-response", "aed-delivery-before-ems-arrival", "for-ems-agencies"];

test("focused guides are discoverable, canonical and readable without JavaScript", async ({ page, request }) => {
  await page.goto("/");
  for (const slug of slugs) {
    await expect(page.locator(`main a[href="/${slug}/"]`)).toHaveCount(1);
    const response = await request.get(`/${slug}/`);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain("New Jersey");
    expect(html).toContain("pre-prototype");
    await page.goto(`/${slug}/`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://mardeinc.com/${slug}/`);
    const schemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(text => JSON.parse(text));
    expect(schemas.map(item => item["@type"])).toEqual(["WebPage", "BreadcrumbList"]);
    expect(schemas[0].url).toBe(`https://mardeinc.com/${slug}/`);
    expect(schemas[1].itemListElement[1].item).toBe(schemas[0].url);
    await expect(page.getByRole("navigation", { name: "Breadcrumb", exact: true })).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
    const meta = await page.locator('meta[name="description"]').getAttribute("content");
    expect(meta!.length).toBeLessThanOrEqual(155);
    const issues = await new AxeBuilder({ page }).analyze();
    expect(issues.violations.filter(issue => ["critical", "serious"].includes(issue.impact || ""))).toEqual([]);
    await page.goto("/");
  }
});

test("FAQ provides 20 concise practitioner answers with exact schema parity", async ({ page }) => {
  await page.goto("/faq/");
  const schema = JSON.parse((await page.locator('script[type="application/ld+json"]').first().textContent())!);
  expect(schema.mainEntity).toHaveLength(20);
  for (const item of schema.mainEntity) {
    const words = item.acceptedAnswer.text.trim().split(/\s+/).length;
    expect(words).toBeGreaterThanOrEqual(40);
    expect(words).toBeLessThanOrEqual(60);
    await expect(page.getByRole("heading", { name: item.name, exact: true })).toBeVisible();
    await expect(page.getByText(item.acceptedAnswer.text, { exact: true })).toBeVisible();
  }
});
