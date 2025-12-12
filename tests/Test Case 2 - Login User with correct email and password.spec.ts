import { test, expect } from "@playwright/test";

test("Login with valid creds", async ({ page }) => {
  const userEmail = "olegivaniuk123@gmail.com"; // Replace with a valid registered email
  const userPassword = "123"; // Replace with a valid registered password
  const userName = "Oleg"; // Replace with a valid registered username

  await page.goto("http://automationexercise.com");
  await expect(page).toHaveTitle(/Automation Exercise/);
  await expect(page).toHaveURL("https://automationexercise.com/");
  await page.locator('a[href="/login"]').click();
  await expect(page.getByRole("heading", { name: "Login to your account" })).toBeVisible();
  await page.getByPlaceholder("Email Address").first().fill(userEmail);
  await page.getByPlaceholder("Password").fill(userPassword);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText(`Logged in as ${userName}`)).toBeVisible();

  //Delete account
  await page.getByRole("link", { name: " Delete Account" }).click();
  await expect(page.getByText("Account Deleted!")).toBeVisible();
});
