// const {chromium} = require('playwright');

// (async()=> 

// {   


// //function code

// const browser = await chromium.launch({headless:false, slowMo:100});

// const page = await browser.newPage();

// await page.goto('https://milevision-stage.milezero.com');

// await browser.close();


// import { test, expect } from '@playwright/test';
const {chromium} = require('playwright');
test('test', async ({ page }) => {
  // async ({ page }) => {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').click();
  await page.getByPlaceholder('username/email').fill('clmsustage');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByTitle('Configure').click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'STATIC ROUTE' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(1).click();
  await page.frameLocator('#iframe').getByLabel('Route ID').click();
  await page.frameLocator('#iframe').getByLabel('Route ID').fill('123');
  await page.frameLocator('#iframe').getByLabel('Route Name').click();
  await page.frameLocator('#iframe').getByLabel('Route Name').fill('test');
  await page.frameLocator('#iframe').getByLabel('Package Tag').click();
  await page.frameLocator('#iframe').getByLabel('Package Tag').fill('tag1');
  await page.frameLocator('#iframe').locator('#bizUnitElm').getByRole('combobox').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'RDG1' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();

  expect('th:nth-child(7) > div > span.p-column-title').toBeVisible()
});

// }) ();