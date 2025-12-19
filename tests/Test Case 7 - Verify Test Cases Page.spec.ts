import { test, expect } from "@playwright/test";

test("TC page verification", async ({ page }) => {
    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.getByRole('button', { name: 'Test Cases' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/test_cases');
    await expect(page.getByText('Below is the list of test')).toBeVisible();

});