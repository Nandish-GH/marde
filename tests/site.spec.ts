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
  await page.goto("/");
  await expect(page).toHaveTitle(/MARDE/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://mardeinc.com/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /\/og\.png$/);

  await page.goto("/support/");
  await expect(page.locator("form")).toHaveCount(2);
  const ids = await page.locator("[id]").evaluateAll((elements) => elements.map((element) => element.id));
  expect(new Set(ids).size).toBe(ids.length);

  await page.goto("/thank-you/");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("reduced-motion users receive native, non-blocking behavior", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".loading-overlay")).toBeHidden();
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
});
