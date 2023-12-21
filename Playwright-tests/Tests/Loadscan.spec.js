// @ts-check
const { test, expect } = require('@playwright/test');
//import { test, expect } from '@playwright/test';
const login = require('./Loginto.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
//const sequence = prompt('Enter a sequence:');
// Login to milevision
test('test', async ({ page }) => {
  await login(page, email, password);
  await page.getByTitle('Review').click();
  await page.getByRole('button', { name: 'Loadscans' })
  await page.frameLocator('#iframe').getByRole('combobox', { name: 'ROUTE:' }).selectOption('ALL');
  await page.frameLocator('#iframe').locator('#startRange').click();
  await page.frameLocator('#iframe').getByRole('link', { name: '1', exact: true }).click();
  await page.frameLocator('#iframe').locator('#startRange').click();
  await page.frameLocator('#iframe').getByTitle('Prev').click();
  await page.frameLocator('#iframe').getByRole('link', { name: '1', exact: true }).click();
  await page.getByTitle('Origin').click();
  await page.getByText('RDG (RDG)').click();
  await page.frameLocator('#iframe').getByRole('cell', { name: 'ORDER' }).click();
  await page.frameLocator('#iframe').getByRole('cell', { name: 'ORDER' }).click();
  await page.frameLocator('#iframe').getByRole('cell', { name: 'Shipper', exact: true }).click();
  await page.frameLocator('#iframe').getByRole('cell', { name: 'Shipper', exact: true }).click();})
//  if () 
//     {
//     console.log("creating a stop is successful")
//     }
//     else
//     {
//         console.log("creating a stop is unsuccessful")
// })