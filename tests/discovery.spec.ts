import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("homepage exposes research links and scanner-readable FAQ schema", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Emergency robotics research. Evidence before claims." })).toBeVisible();
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
  expect(org.description).toContain("New Jersey");
  expect(org.description).toContain("Pre-prototype; no deployed systems.");
  for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
    await expect(page.locator(selector)).toHaveAttribute("content", org.description);
  }
  await expect(page.locator('[aria-labelledby="hero-heading"]')).toContainText(org.description);
  const preferred = page.getByRole("link", { name: "Add MARDE as a preferred source", exact: true });
  await expect(preferred).toHaveAttribute("href", "https://www.google.com/preferences/source?q=mardeinc.com");
  await expect(preferred).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.getByRole("heading", { name: "Teleoperated Ground. The final approach." })).toBeVisible();
  await expect(page.getByRole("link", { name: "EMS evaluation guide", exact: true })).toHaveAttribute("href", "/for-ems-agencies/");
  expect(org.sameAs).toEqual([
    "https://www.instagram.com/marde.inc",
    "https://www.tiktok.com/@marde.inc",
    "https://www.crunchbase.com/organization/marde",
    "https://www.linkedin.com/company/mardeinc/",
    "https://wellfound.com/company/marde",
  ]);
  expect(website.publisher["@id"]).toBe(org["@id"]);
  const faq = entities.find(item => item["@type"] === "FAQPage");
  expect(faq.mainEntity).toHaveLength(4);
  for (const item of faq.mainEntity) {
    await expect(page.getByRole("button", { name: item.name })).toBeVisible();
    expect(await page.locator("main").textContent()).toContain(item.acceptedAnswer.text);
  }
});

test("research schema identifies the canonical article and its visible primary sources", async ({ page }) => {
  for (const slug of ["drone-aed-evidence", "final-access", "human-oversight", "aviation-pathway", "response-gap", "evaluating-early-stage-partners"]) {
    await page.goto(`/research/${slug}/`);
    const article = JSON.parse((await page.locator('script[type="application/ld+json"]').first().textContent())!);
    expect(article["@type"]).toBe("Article");
    expect(article.mainEntityOfPage["@id"]).toBe(await page.locator('link[rel="canonical"]').getAttribute("href"));
    expect(article.author.url).toBe("https://mardeinc.com/research/");
    await expect(page.locator('time[datetime="2026-10-01"]')).toHaveText(article.datePublished);
    expect(article.dateModified).toBe("2026-10-15");
    await expect(page.locator('time[datetime="2026-10-15"]')).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key answer", exact: true })).toBeVisible();
    await expect(page.getByText(/Prepared by MARDE Inc. as an editorial synthesis/)).toBeVisible();
    const related = page.getByRole("navigation", { name: "Related research and platform pages", exact: true });
    await expect(related.getByRole("link")).toHaveCount(2);
    expect(article.citation.length).toBeGreaterThan(0);
    for (const source of article.citation) {
      await expect(page.getByRole("link", { name: source.name, exact: true })).toHaveAttribute("href", source.url);
    }
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
  expect(html).toContain("MARDE has no deployed systems, announced commercial pilots");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Can an EMS agency buy or deploy a MARDE system today?", exact: true });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  const answer = page.getByText(/No\. MARDE has no deployed systems, announced commercial pilots/);
  await expect(answer).toBeHidden();
  await trigger.click();
  await expect(answer).toBeVisible();
});
