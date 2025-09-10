import { test, expect } from "@playwright/test";

test.describe("navigate", async () => {
  test("user can navigate to homepage", async ({ page }) => {
    // Go to homepage
    await page.goto("/");

    // Click venue
    await page.locator("#venue-container a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
