import { test, expect } from "@playwright/test";

test("Reg with existing email", async ({ page }) => {

    const userEmail = 'olegivaniuk123@gmail.com'; // Replace with a valid registered email
   // const userName = "Oleg"; // Replace with a valid registered username

  await page.goto("http://automationexercise.com");
  await expect(page).toHaveTitle(/Automation Exercise/);
  await page.locator('a[href="/login"]').click();
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();
  await page.locator('[data-qa="signup-email"]').fill(userEmail);
  await page.locator('[data-qa="signup-name"]').fill('AnyName');
  await page.locator('[data-qa="signup-button"]').click();
  await page.locator('button[data-qa="signup-button"]').click();
  await expect(page.getByText("Email Address already exist!")).toBeVisible();

}); 