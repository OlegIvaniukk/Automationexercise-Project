import {test, expect } from "@playwright/test";

test("Contact Us Form Submission", async ({ page }) => {

    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.locator('a[href="/contact_us"]').click();
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    await page.locator('[data-qa="name"]').fill('TestName');
    await page.locator('[data-qa="email"]').fill('TestEmail@gmail.com');
    await page.locator('[data-qa="subject"]').fill('TestSubject');
    await page.locator('[data-qa="message"]').fill('TestMessage');
    await page.setInputFiles('input[name="upload_file"]', 'tests/fixtures/playwright.png');
    page.on('dialog', async dialog => {
        console.log('Dialog appeared:', dialog.message());
        await dialog.accept()
    });
    await page.locator('[data-qa="submit-button"]').click();
    await expect(page.getByText(/Success|submitted/i).first()).toBeVisible({ timeout: 8000 });
    await page.getByRole('link', { name: ' Home' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/')
});