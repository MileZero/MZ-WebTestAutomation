// @ts-check
const { test, expect} = require('@playwright/test');
const userName = process.env.USER || '';
const password = process.env.PASSCODE || '';

test('test', async ({ page }) => {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').fill(userName);
  await page.getByPlaceholder('your password').fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByTitle('Configure').click();
});