import { test, expect } from "@playwright/test";

test("scroll to top appears after scrolling, restores focus, and respects reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const top = page.getByRole("link", { name: "Scroll to top", exact: true });
  await expect(top).toBeHidden();
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect(top).toBeVisible();
  await top.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator("main")).toBeFocused();
  await expect(top).toBeHidden();
});

test("Stripe loads only on request and keeps a working fallback when blocked", async ({ page }) => {
  let stripeRequests = 0;
  await page.route("https://js.stripe.com/**", async route => { stripeRequests++; await route.abort(); });
  await page.goto("/support/");
  expect(stripeRequests).toBe(0);
  await page.getByRole("button", { name: "Open Stripe payment options" }).click();
  await expect(page.locator("main").getByRole("alert")).toContainText("could not load");
  expect(stripeRequests).toBeGreaterThan(0);
  await expect(page.getByRole("link", { name: "Open secure payment page" })).toHaveAttribute("href", /^https:\/\/donate.stripe.com\//);
  await page.setViewportSize({ width: 320, height: 900 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("footer color effects also work for keyboard focus without reduced-motion transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const instagram = page.getByRole("link", { name: "Instagram", exact: true });
  const tiktok = page.getByRole("link", { name: "TikTok", exact: true });
  await instagram.focus();
  await expect(instagram).toHaveCSS("border-top-color", "rgb(238, 116, 177)");
  await tiktok.focus();
  await expect(tiktok).toHaveCSS("border-top-color", "rgb(98, 222, 219)");
  await expect(tiktok).toHaveCSS("transition-duration", "0s");
});
