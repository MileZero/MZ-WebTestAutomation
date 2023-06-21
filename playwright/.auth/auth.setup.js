import { test as setup } from '@playwright/test';
const { test, expect} = require('@playwright/test');
const userName = process.env.USER || '';
const password = process.env.PASSCODE || '';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').fill(userName);
  await page.getByPlaceholder('your password').fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  // Wait until the page receives the cookies.
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://milevision-stage.milezero.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  // await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();
  await expect(page.getByTitle('Configure')).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});