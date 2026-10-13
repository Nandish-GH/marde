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

test("top control fades both ways and cannot receive focus while hidden", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/contact/");
  const top = page.locator('a[aria-label="Scroll to top"]');
  await expect(top).toHaveAttribute("tabindex", "-1");
  await expect(top).toHaveCSS("visibility", "hidden");
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
  await expect(top).toHaveAttribute("data-visible", "true");
  const fadeIn = await top.evaluate(async el => {
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return Number(getComputedStyle(el).opacity);
  });
  expect(fadeIn).toBeGreaterThan(0);
  expect(fadeIn).toBeLessThan(1);
  await expect(top).toHaveCSS("opacity", "1");
  await expect(top).toHaveCSS("background-color", "rgb(17, 20, 24)");
  await expect(top).toHaveAttribute("tabindex", "0");
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(top).toHaveAttribute("data-visible", "false");
  const fadeOut = await top.evaluate(async el => {
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    return Number(getComputedStyle(el).opacity);
  });
  expect(fadeOut).toBeGreaterThan(0);
  expect(fadeOut).toBeLessThan(1);
  await expect(top).toHaveAttribute("aria-hidden", "true");
  await expect(top).toHaveAttribute("tabindex", "-1");
  await expect(top).toHaveCSS("visibility", "hidden");
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
