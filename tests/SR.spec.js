// @ts-check
const { test, expect} = require('@playwright/test');
const login = require('./login.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
// Login to milevision
test('test', async ({ page }) => {
await login(page, email, password);
await page.getByTitle('Configure').click();
await page.getByRole('button', { name: 'Warehouse' }).click();
await page.frameLocator('#iframe').getByRole('link', { name: 'STATIC ROUTE' }).click();
})