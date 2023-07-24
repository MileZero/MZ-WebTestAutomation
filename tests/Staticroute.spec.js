// @ts-check
const {test, expect} = require('@playwright/test')
test('test', async ({ page }) => {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').click();
  await page.getByPlaceholder('username/email').fill('clmsustage');
  await page.getByPlaceholder('username/email').press('Tab');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByTitle('Configure').click();
  await page.getByRole('button', { name: 'Warehouse' }).click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'STATIC ROUTE' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(3).click();
  await page.frameLocator('#iframe').getByLabel('Reference Id').click();
  await page.frameLocator('#iframe').getByLabel('Reference Id').press('CapsLock');
  await page.frameLocator('#iframe').getByLabel('Reference Id').fill('FAS_863');
  await page.frameLocator('#iframe').locator('#contractStopIdsDropdown div').nth(3).click();
  await page.frameLocator('#iframe').locator('#locationStopTypeDropdown svg').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'PICKUP' }).click();
  await page.frameLocator('#iframe').getByLabel('Sequence').click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
  await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).locator('svg').first().click();
  await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).click();
});
