import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/technology/", "/team/", "/mission/", "/support/", "/faq/", "/privacy/", "/thank-you/"];

for (const route of routes) {
  test(`${route} renders without overflow`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  });
}

test("Technology Nexus preserves its anchor, hierarchy, and Human Authorization treatment", async ({ page }) => {
  await page.goto("/technology/#nexus");
  await expect(page).toHaveURL(/\/technology\/#nexus$/);
  await expect(page.locator("#nexus")).toBeVisible();
  await expect(page.getByRole("heading", { name: "HUMAN AUTHORIZATION" })).toBeVisible();
  await expect(page.getByText("FINAL DECISION AUTHORITY", { exact: true })).toBeVisible();
  await expect(page.getByText("AWAITING AUTHORIZATION", { exact: true })).toBeVisible();
});

test("Homepage Nexus keeps the approved coordination preview", async ({ page }) => {
  await page.goto("/#home-nexus");
  const nexus = page.locator("#home-nexus");
  await expect(nexus).toBeVisible();
  await expect(nexus.getByText("HUMAN AUTHORIZATION", { exact: true })).toBeVisible();
  await expect(nexus.getByText("Final Decision Authority", { exact: true })).toBeVisible();
});

test("FAQ uses accessible accordion state", async ({ page }) => {
  await page.goto("/faq/");
  await expect(page.locator("html")).toHaveClass(/marde-intro-complete/);
  const first = page.getByRole("button", { name: "When will MARDE be flying?" });
  await expect(first).toHaveAttribute("aria-expanded", "true");
  await first.click();
  await expect(first).toHaveAttribute("aria-expanded", "false");
});

test("mobile navigation is modal, keyboard dismissible, and restores focus", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only interaction");
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/marde-intro-complete/);
  const trigger = page.getByRole("button", { name: "Open main navigation" });
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Main navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Main navigation" })).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("representative pages have no serious automated accessibility violations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/technology/", "/support/", "/faq/"]) {
    await page.goto(route);
    await expect(page.locator("html")).toHaveClass(/marde-intro-complete/);
    for (const section of await page.locator("main section").all()) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(120);
    }
    const results = await new AxeBuilder({ page }).exclude("stripe-buy-button").analyze();
    expect(results.violations.filter((violation) => ["critical", "serious"].includes(violation.impact ?? ""))).toEqual([]);
  }
});

test("SEO metadata and public integration surfaces remain intact", async ({ page }) => {
  const metadata = [
    ["/", "MARDE | Emergency Response Robotics Before EMS Arrival", "https://mardeinc.com/"],
    ["/technology/", "MARDE Technology | Air, Ground & Nexus Emergency Robotics", "https://mardeinc.com/technology/"],
    ["/team/", "MARDE Team | Emergency Robotics & Medical Technology", "https://mardeinc.com/team/"],
    ["/mission/", "MARDE Mission | Building Faster Robotic Emergency Response", "https://mardeinc.com/mission/"],
    ["/support/", "Support MARDE | Donations, Contact & Project Updates", "https://mardeinc.com/support/"],
    ["/faq/", "MARDE FAQ | Emergency Response Robotics", "https://mardeinc.com/faq/"],
    ["/privacy/", "Privacy Policy | MARDE", "https://mardeinc.com/privacy/"],
  ] as const;

  for (const [route, title, canonical] of metadata) {
    await page.goto(route);
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", canonical);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "https://mardeinc.com/og.png");
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
  }

  await page.goto("/");
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(1);
  const structuredData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
  expect(structuredData["@graph"].map((item: { "@type": string }) => item["@type"])).toEqual(["Organization", "WebSite"]);

  await page.goto("/technology/");
  await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);

  await page.goto("/support/");
  await expect(page.locator("form")).toHaveCount(2);
  const ids = await page.locator("[id]").evaluateAll((elements) => elements.map((element) => element.id));
  expect(new Set(ids).size).toBe(ids.length);

  await page.goto("/thank-you/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("robots and sitemap expose only canonical public routes", async ({ request }) => {
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("User-agent: *");
  expect(robots).toContain("Allow: /");
  expect(robots).toContain("Sitemap: https://mardeinc.com/sitemap.xml");

  const sitemap = await (await request.get("/sitemap.xml")).text();
  for (const route of ["", "technology/", "team/", "mission/", "support/", "faq/", "privacy/"]) {
    expect(sitemap).toContain(`<loc>https://mardeinc.com/${route}</loc>`);
  }
  expect(sitemap).not.toContain("thank-you");
  expect(sitemap).not.toContain("localhost");
});

test("unknown routes return a non-indexable 404", async ({ page }) => {
  const response = await page.goto("/route-that-does-not-exist/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "This page isn't here." })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator('link[rel="canonical"], meta[property="og:url"]')).toHaveCount(0);
});

test("reduced-motion users receive native, non-blocking behavior", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".loading-overlay")).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await expect(page.locator("html")).not.toHaveClass(/custom-cursor-ready/);
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).cursor)).not.toBe("none");
});

test("fine-pointer users retain the MARDE custom cursor", async ({ page, isMobile }) => {
  test.skip(isMobile, "fine-pointer interaction");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/custom-cursor-ready/);
  await page.mouse.move(320, 240);
  await expect(page.locator("html")).toHaveClass(/custom-cursor-visible/);
  await expect(page.locator(".custom-cursor-point")).toHaveCSS("opacity", "1");
  await expect(page.locator(".custom-cursor-point > span").first()).toHaveCSS("width", "17px");
});
