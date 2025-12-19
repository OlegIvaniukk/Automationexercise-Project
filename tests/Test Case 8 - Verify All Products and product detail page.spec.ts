import {test, expect} from '@playwright/test';

test('Product details', async ({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page).toHaveTitle(/Automation Exercise/);
    await page.locator('a[href="/products"]').click();
    await expect(page).toHaveURL('https://automationexercise.com/products');
    await expect(page.getByRole('heading', {name: "All Products"})).toBeVisible();
    await page.locator('a[href="/product_details/1"]').first().click();
    await expect(page).toHaveURL('https://automationexercise.com/product_details/1');
    await expect(page.locator('.product-information h2')).toBeVisible();
    await expect(page.locator('.product-information p').filter({hasText:"Category"})).toBeVisible();
    await expect(page.locator('.product-information span span')).toBeVisible();
    await expect(page.locator('.product-information p').filter({ hasText:"Availability:"})).toBeVisible();
    await expect(page.locator('.product-information p').filter({ hasText:"Condition:"})).toBeVisible();
    await expect(page.locator('.product-information p').filter({ hasText:"Brand:"})).toBeVisible();
})