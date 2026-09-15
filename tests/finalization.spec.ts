import { test, expect } from "@playwright/test";

test("mobile menu logo returns home and closes the modal", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile navigation only");
  await page.goto("/technology/");
  await page.getByRole("button", { name: "Open main navigation" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("link", { name: "MARDE home", exact: true }).locator("img")).toBeVisible();
  await dialog.getByRole("link", { name: "MARDE home", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(dialog).toBeHidden();
  await expect(page.locator("footer").getByRole("link", { name: "MARDE Inc. home" }).locator("img")).toBeAttached();
  await expect(page.locator("h1")).toBeVisible();
});

test("current product studies load with honest concept descriptions", async ({ page }) => {
  await page.goto("/technology/");
  for (const type of ["air", "ground", "modules"]) {
    const img = page.locator(`#${type} picture img`);
    await img.scrollIntoViewIfNeeded();
    await expect(img).toHaveAttribute("alt", /concept/i);
    await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
  }
});

test("logo opening completes and does not replay on client navigation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/", { waitUntil: "commit" });
  const opening = page.locator(".v2-opening");
  await expect(opening.locator("img")).toHaveAttribute("src", "/brand/marde-logo-horizontal-light.png");
  await expect(page.locator("html")).toHaveAttribute("data-opening-consumed", "true");
  await expect(opening).toBeHidden();
  await page.getByRole("link", { name: "Explore the Technology", exact: true }).first().click();
  await expect(page).toHaveURL(/\/technology\//);
  await expect(opening).toBeHidden();
  await expect(page.locator("h1")).toBeVisible();
});

test("runtime reduced motion resolves reveals, counters and interaction content", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.locator("#response-gap").scrollIntoViewIfNeeded();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await expect(page.locator(".v2-opening")).toBeHidden();
  await expect(page.locator("[data-count]")).toHaveText(["6.4", "7.6", "50.2"]);
  await page.getByRole("button", { name: "Next response step" }).click();
  await expect(page.locator("#response-detail h3")).toBeVisible();
  await page.getByRole("button", { name: "Human authorization" }).click();
  await expect(page.getByRole("heading", { name: "Consequential actions stay human." })).toBeVisible();
  const states = await page.locator("[data-reveal]").evaluateAll(elements => elements.map(el => ({ opacity: getComputedStyle(el).opacity, transform: getComputedStyle(el).transform })));
  expect(states.every(state => state.opacity === "1" && state.transform === "none")).toBe(true);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator("h1")).toBeVisible();
});

test("approved About MARDE copy remains on all profiles", async ({ page }) => {
  for (const slug of ["nandish", "snehi", "aanya", "arjun", "saathvika"]) {
    await page.goto(`/${slug}/`);
    await expect(page.getByRole("heading", { name: "About MARDE", exact: true })).toBeVisible();
    await expect(page.getByText("Integrated emergency-response robotics designed to extend response capability into the minutes before EMS arrives.", { exact: true })).toBeVisible();
    await expect(page.getByText("Air for reach. Ground for access. Nexus for coordination.", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "EXPLORE MARDE" })).toHaveAttribute("href", "https://mardeinc.com");
  }
});
