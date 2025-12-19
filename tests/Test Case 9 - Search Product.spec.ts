import { test, expect } from "@playwright/test";

test("Prod search", async ({ page }) => {
  await page.goto("http://automationexercise.com");
  await expect(page).toHaveTitle(/Automation Exercise/);
  await page.locator('a[href="/products"]').click();
  await expect(
    page.getByRole("heading", { name: "All Products" })
  ).toBeVisible();
  const keyword = "Top";
  await page.locator(".input-lg").fill(keyword);
  await page.locator('#submit_search').waitFor({ state: 'visible', timeout: 5000 });
  await page.locator('#submit_search').click();
  await expect(
    page.getByRole("heading", { name: "Searched Products" })
  ).toBeVisible();

  const searchResults = page
    .locator(".features_items")
    .locator(".single-products");
  const count = await searchResults.count();

  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(searchResults.nth(i)).toBeVisible();  }
});
