import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { nandishProfile as profile } from "../lib/nandish-profile";

for (const viewport of [{ width: 375, height: 812 }, { width: 390, height: 844 }, { width: 1440, height: 900 }]) {
  test(`contact card layout ${viewport.width}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/nandish/");
    await expect(page.getByRole("heading", { name: profile.name })).toBeVisible();
    await expect(page.locator("nav, footer, .loading-overlay")).toHaveCount(0);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const portrait = page.getByAltText(profile.portraitAlt);
    expect(await portrait.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
    const box = await portrait.locator("..").boundingBox();
    expect(box?.width).toBe(210);
    expect(box?.height).toBe(210);
    expect(Math.abs((box!.x + box!.width / 2) - viewport.width / 2)).toBeLessThan(1);
    await expect(page.getByRole("link", { name: "ADD TO CONTACTS" })).toBeVisible();
    await expect(page.locator("body")).not.toContainText(profile.phone);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    await page.screenshot({ path: `tmp/nandish-${viewport.width}.png`, fullPage: true });
  });
}

test("contact destinations, VCard download and discovery", async ({ page, request }) => {
  await page.goto("/nandish/");
  const links = { Email: `mailto:${profile.email}`, LinkedIn: profile.linkedin, Schedule: profile.schedule, Instagram: "https://www.instagram.com/marde.inc", TikTok: "https://www.tiktok.com/@marde.inc", "Support MARDE": "https://donate.stripe.com/8x214f7jVbKXdHWakm6kg00", GitHub: profile.github, "Pitch Deck": "https://canva.link/bk6ie0o3romp57w", "Visit MARDE website": profile.companyUrl };
  for (const [name, href] of Object.entries(links)) {
    await expect(page.getByRole("link", { name, exact: true })).toHaveAttribute("href", href);
    if (href.startsWith("https:") && name !== "Visit MARDE website") await expect(page.getByRole("link", { name, exact: true })).toHaveAttribute("rel", "noopener noreferrer");
  }
  const download = page.waitForEvent("download");
  await page.getByRole("link", { name: "ADD TO CONTACTS" }).click();
  expect((await download).suggestedFilename()).toBe("nandish.vcf");
  const response = await request.get(profile.vcardUrl);
  expect(response.ok()).toBe(true);
  const vcf = await response.text();
  expect(vcf).toBe(`BEGIN:VCARD\r\nVERSION:3.0\r\nN:Panchal;Nandish;;;\r\nFN:Nandish Panchal\r\nORG:MARDE\\, Inc.\r\nTITLE:Founder & CEO\r\nTEL;TYPE=CELL:${profile.phone}\r\nEMAIL;TYPE=INTERNET:${profile.email}\r\nURL:${profile.profileUrl}\r\nEND:VCARD\r\n`);
  expect(await (await request.get("/sitemap.xml")).text()).not.toContain("nandish");
  expect(await (await request.get("/robots.txt")).text()).not.toContain("Disallow: /nandish");
});

test("share native payload, cancellation, clipboard and permission failure", async ({ page }) => {
  await page.goto("/nandish/");
  await page.evaluate(() => {
    Object.defineProperty(navigator, "share", { configurable: true, value: async (payload: ShareData) => { (window as unknown as { sharePayload: ShareData }).sharePayload = payload; } });
  });
  await page.getByRole("button", { name: "SHARE", exact: true }).click();
  expect(await page.evaluate(() => (window as unknown as { sharePayload: ShareData }).sharePayload)).toEqual({ title: profile.shareTitle, text: profile.shareText, url: profile.profileUrl });
  await page.evaluate(() => Object.defineProperty(navigator, "share", { configurable: true, value: async () => { throw new DOMException("Cancelled", "AbortError"); } }));
  await page.getByRole("button", { name: "SHARE", exact: true }).click();
  await expect(page.locator('[role="status"]')).toBeEmpty();
  await page.evaluate(() => {
    Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async (url: string) => { (window as unknown as { copied: string }).copied = url; } } });
  });
  await page.getByRole("button", { name: "SHARE", exact: true }).click();
  await expect(page.getByRole("status")).toHaveText("Link copied");
  expect(await page.evaluate(() => (window as unknown as { copied: string }).copied)).toBe(profile.profileUrl);
  await page.evaluate(() => Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: async () => { throw new Error("Denied"); } } }));
  await page.getByRole("button", { name: "SHARE", exact: true }).click();
  await expect(page.getByRole("textbox", { name: "Profile link to copy" })).toHaveValue(profile.profileUrl);
});

test("team integration and navigation preserve corporate chrome", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/team/"]) {
    await page.goto(route);
    await expect(page.getByAltText(profile.portraitAlt)).toHaveAttribute("src", profile.portrait);
    const imageBox = await page.getByAltText(profile.portraitAlt).boundingBox();
    expect(Math.abs(imageBox!.width - imageBox!.height)).toBeLessThan(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /index, follow/);
    await expect(page.locator('a[href^="/nandish"]')).toHaveCount(route === "/team/" ? 1 : 0);
  }
  await page.getByRole("link", { name: "Open Nandish Panchal's digital contact card" }).click();
  await expect(page.locator("nav, footer, .loading-overlay")).toHaveCount(0);
  await page.getByRole("link", { name: "Visit MARDE website" }).evaluate((link) => link.setAttribute("href", "/"));
  await page.getByRole("link", { name: "Visit MARDE website" }).click();
  await expect(page.locator("footer")).toBeVisible();
});


