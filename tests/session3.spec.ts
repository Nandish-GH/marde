import { test, expect } from "@playwright/test";

test("optional attribution survives blocked storage and tracks navigation", async ({ page }) => {
  await page.addInitScript(() => {
    const events: { name: string; data: Record<string, unknown> }[] = [];
    Object.defineProperty(window, "qaEvents", { value: events });
    window.gtag = (_command, name, data) => events.push({ name, data: data || {} });
    Object.defineProperty(window, "sessionStorage", { get() { throw new DOMException("Blocked", "SecurityError"); } });
  });
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/?utm_source=qa");
  await page.locator("#home-nexus").scrollIntoViewIfNeeded();
  await expect.poll(() => page.evaluate(() => (window as unknown as {qaEvents: {name: string; data: {page_path?: string}}[]}).qaEvents.filter(e => e.name === "technology_nexus_engagement").map(e => e.data.page_path))).toContain("/");
  await page.getByRole("link", { name: "Inside Nexus" }).click();
  await expect(page).toHaveURL(/\/technology\/#nexus/);
  await expect.poll(() => page.evaluate(() => (window as unknown as {qaEvents: {name: string; data: {page_path?: string}}[]}).qaEvents.filter(e => e.name === "technology_nexus_engagement").map(e => e.data.page_path))).toContain("/technology/");
  expect(errors).toEqual([]);
});

test("static navigation has no failed framework requests", async ({ page }) => {
  const failures: string[] = [];
  page.on("response", response => {
    if (response.status() >= 400 && new URL(response.url()).origin === new URL(page.url()).origin) failures.push(response.url());
  });
  await page.goto("/");
  await page.getByRole("link", { name: "Explore the Technology", exact: true }).click();
  await expect(page.locator("h1")).toBeVisible();
  await page.getByRole("link", { name: "Contact", exact: true }).last().click();
  await expect(page.getByLabel("Name", { exact: true })).toBeVisible();
  expect(failures).toEqual([]);
});
