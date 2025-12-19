import { test as base, expect, Page } from '@playwright/test';

type MyFixtures = {
  validatedPage: Page;
};

export const test = base.extend<MyFixtures>({
  validatedPage: async ({ page }, use) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(page).toHaveURL('https://automationexercise.com/');
    await use(page);
  },
});

export { expect };
