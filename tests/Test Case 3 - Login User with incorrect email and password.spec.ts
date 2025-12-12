import { test, expect } from "@playwright/test";

test("Login action", async ({ page }) => {
  await page.goto("http://automationexercise.com");
  await expect(page).toHaveTitle(/Automation Exercise/);
  await page.locator('a[href="/login"]').click();
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();
  await page.locator('[data-qa="login-email"]').fill("invalid@example.com");
  await page.locator('[data-qa="login-password"]').fill("wrongpassword");
  await page.locator('[data-qa="login-button"]').click();
  await expect(page.getByText("Your email or password is incorrect!")).toBeVisible();
});
