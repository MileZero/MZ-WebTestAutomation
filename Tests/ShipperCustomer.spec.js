// @ts-check
const {test, expect} = require('@playwright/test')
const login = require('./Login.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
// Login to milevision
test('test', async ({ page }) => {
  await login(page, email, password);
  await page.getByRole('button', { name: 'Warehouse' }).click()
  await page.frameLocator('#iframe').getByRole('link', { name: 'SHIPPER CUSTOMERS' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).click();
  await page.frameLocator('#iframe').getByRole('combobox', { name: 'Select a Shipper' }).click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'Alreach' }).click();
  await page.frameLocator('#iframe').getByPlaceholder('Reference Id').fill('KA-TL');
  await page.frameLocator('#iframe').getByPlaceholder('Name', { exact: true }).fill('Kevin');
  await page.frameLocator('#iframe').getByPlaceholder('1234 Street Name').fill('Dublin, 16 Light weat st,.');
  await page.frameLocator('#iframe').getByPlaceholder('City').fill('NEW YORK');
  await page.frameLocator('#iframe').getByPlaceholder('12345').fill('187945');
  await page.frameLocator('#iframe').getByRole('combobox', { name: 'AK' })
  await page.frameLocator('#iframe').getByRole('option', { name: 'AL' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'SUBMIT' }).click();
  await page.frameLocator('#iframe').getByText('Shipper Customers GENERALAREASROUTING OVERRIDESADDRESSLABELSWAYPOINTSRATESNAVIGA').click();
  //await page.frame({
   // name: 'iframe'}).locator('div').filter({ hasText: 'Customer CreationCustomer Created With Success' }).nth(3).click();
  await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Customer Id' }).locator('svg').first().click();
});