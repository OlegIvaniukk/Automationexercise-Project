import { test, expect } from "@playwright/test";

test("Logout action", async ({ page }) => {

    const userEmail = 'olegivaniuk123@gmail.com'; // Replace with a valid registered email
    const userPassword = '123'; // Replace with a valid registered password
    const userName = "Oleg"; // Replace with a valid registered username


  await page.goto("http://automationexercise.com");
  await expect(page).toHaveTitle(/Automation Exercise/);
  await page.locator('a[href="/login"]').click();
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();
  await page.locator('[data-qa="login-email"]').fill(userEmail);
  await page.locator('[data-qa="login-password"]').fill(userPassword);
  await page.locator('[data-qa="login-button"]').click();
  await expect(page.getByText(`Logged in as ${userName}`)).toBeVisible();
  await page.locator('a[href="/logout"]').click();
  await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();


});