import { test, expect } from "@playwright/test";

test("flow marker travels between selected steps and follows responsive layout", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const marker = page.locator("[data-flow-marker]");
  await marker.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const start = await marker.evaluate(el => el.getBoundingClientRect().x);
  await page.getByRole("button", { name: "03 MARDE Air Reach", exact: true }).click();
  await page.waitForTimeout(120);
  const midway = await marker.evaluate(el => el.getBoundingClientRect().x);
  await page.waitForTimeout(550);
  const end = await marker.evaluate(el => el.getBoundingClientRect().x);
  expect(midway).toBeGreaterThan(start);
  expect(midway).toBeLessThan(end);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(600);
  const alignment = await page.locator("[data-flow-node='2']").evaluate(el => {
    const node = el.getBoundingClientRect();
    const dot = el.closest('[aria-hidden="true"]')!.querySelector('[data-flow-marker]')!.getBoundingClientRect();
    return Math.abs(dot.x - (node.x + node.width / 2));
  });
  expect(alignment).toBeLessThan(2);
});

test("FAQ answer expands over time instead of jumping to its full height", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Is the system deployed today?", exact: true });
  const content = page.getByText(/No\. MARDE is pre-seed, pre-prototype and pre-revenue\./).locator("..").locator("..");
  await trigger.scrollIntoViewIfNeeded();
  await trigger.click();
  await page.waitForTimeout(80);
  const midway = await content.evaluate(el => el.getBoundingClientRect().height);
  await page.waitForTimeout(350);
  const end = await content.evaluate(el => el.getBoundingClientRect().height);
  expect(midway).toBeGreaterThan(0);
  expect(midway).toBeLessThan(end);
  await trigger.click();
  await expect(content).toBeHidden();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await trigger.click();
  await expect(content).toBeVisible();
  await expect(content).toHaveCSS("transition-duration", "0s");
});
