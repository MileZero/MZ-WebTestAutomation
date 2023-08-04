// @ts-check
const { test, expect } = require('@playwright/test');
const login = require('./Loginto.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
// Login to milevision
test('test', async ({ page }) => {
    await login(page, email, password);
    await page.getByTitle('Configure').click();
    await page.getByRole('button', { name: 'Warehouse' }).click();
    await page.frameLocator('#iframe').getByRole('link', { name: 'STATIC ROUTE' }).click();
    await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(2).click();
    await page.frameLocator('#iframe').getByLabel('Reference Id').fill('Now_111');
    await page.frameLocator('#iframe').locator('#contractStopIdsDropdown div').nth(3).click();
    await page.frameLocator('#iframe').locator('#locationStopTypeDropdown svg').click();
    await page.frameLocator('#iframe').getByRole('option', { name: 'PICKUP' }).click();
    await page.frameLocator('#iframe').getByLabel('Sequence').fill("111");
    await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
    await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).locator('svg').first().click();
    await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).click();
});
