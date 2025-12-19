import {test, expect} from "@playwright/test";

test("Verify Subscription", async ({page}) => {
    await page.goto("http://automationexercise.com");
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.locator('#footer').scrollIntoViewIfNeeded();
    await expect(page.locator('#footer')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'SUBSCRIPTION' })).toBeVisible();
    await page.getByPlaceholder('Your email address').fill('test@example.com');
    await page.locator('#subscribe.btn.btn-default').click();
    await expect(page.locator('#success-subscribe', {hasText: 'You have been successfully subscribed!'})).toBeVisible();
});
