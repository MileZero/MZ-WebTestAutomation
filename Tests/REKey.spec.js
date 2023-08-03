import { test, expect } from '@playwright/test';
const login = require('./login.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;

test('test', async ({ page }) => {
  await login(page, email, password);
  await page.getByTitle('Configure').click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'RE KEY PROCESS' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.frameLocator('#iframe').getByRole('button', { name: 'Export data' }).click();
  const download = await downloadPromise;
});