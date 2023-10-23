// @ts-check
import { test, expect } from '@playwright/test';
const login = require('./Loginto.spec')
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass; 

test('test', async ({ page }) => {
  await login(page, email, password);
  await page.getByTitle('Configure').click();
  await page.getByRole('button', { name: 'Warehouse' }).click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'SHIPPER CONTRACTS' }).click();
  await page.frameLocator('#iframe').locator('header svg').click();
  await page.frameLocator('#iframe').locator('div').filter({ hasText: /^aci$/ }).click();
  await page.frameLocator('#iframe').getByText('ACI RDG').click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(1).click();
  await page.frameLocator('#iframe').getByLabel('Name').click();
  await page.frameLocator('#iframe').locator('#referenceId').click();
  await page.frameLocator('#iframe').locator('#pv_id_39 svg').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'RDG Route' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
  await page.frameLocator('#iframe').getByLabel('Name').fill('yasser2');
  await page.frameLocator('#iframe').locator('#referenceId').fill('12ae-fh8J');
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
  await page.frameLocator('#iframe').getByText('yasser2').click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(2).click();
  await page.frameLocator('#iframe').locator('div').filter({ hasText: /^Reference Id$/ }).getByRole('textbox').fill("Yas_tst4");
  await page.locator('id=customerId').click
 // await page.frameLocator('#iframe').locator('#pv_id_51 svg').click();
  await page.frameLocator('#iframe').locator('#pv_id_51_0').click();
  await page.frameLocator('#iframe').getByRole('dialog', { name: 'New Contract Stop' }).locator('div').filter({ hasText: /^Name$/ }).getByRole('textbox').fill('Contractstop1');
  await page.frameLocator('#iframe').locator('div').filter({ hasText: /^Long Remarks$/ }).getByRole('textbox').click();
  await page.frameLocator('#iframe').locator('#pv_id_52 div').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'PICKUP' }).click();
  await page.frameLocator('#iframe').locator('#pv_id_53 svg').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'DDU50', exact: true }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
});