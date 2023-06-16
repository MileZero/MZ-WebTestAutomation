// @ts-check
const { test, expect} = require('@playwright/test');
// import { userName, password } from '../playwright.config';
// const {username} = require('../playwright.config');
// const {password} = require('../playwright.config');

const userName = process.env.USERNAME1 || '';
const password = process.env.PASSWORD1 || '';
const t1 = process.env.TEST || '';
console.log('username is', userName)
test('test', async ({ page }) => {
  await page.goto('https://github.com/microsoft/playwright');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill(userName);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(password);
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Playwright' }).click();
});