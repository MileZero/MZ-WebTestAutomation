import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').click();
  await page.getByPlaceholder('username/email').fill('clmsustage');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://milevision-stage.milezero.com/#access_token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9taWxlemVyby1zdGFnZS5hdXRoMC5jb20vIn0..5JcQRJJ6nDAq-o20.JoXUf5Eezrdn6WePvIMJxmhelTUjZ-xuiWsudt_GZWRKWk-C4xs5P-OqismBgId4rcmq6PdXPSCsZE1aDP7SWvoQxDgyjkjN5S1Y60AolwlYiIb71khPAB0xGWtXojBPCuqzm_DiE6UXRT5LllPMYLmh1SEyedptMaRbV5CYAKpb3Y-dVa75HPEJ69XlFHrcyNaMgDVEnY_vkcCn__L2MwcNbcwNFsH88N51ESA-Jeuk1PH3hOsCuKpKa1uCK0lfKEPS2RDlCL4fEP6XkrwZKz8.UrOC4bJ_ZEGffrc_mCvvJw&id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3d3dy5taWxlemVyby5jb20vbWlsZXplcm8tc3RhZ2UvYXBwTmFtZSI6Ik1pbGVWaXNpb24iLCJhdXRob3JpemF0aW9uIjp7Imdyb3VwcyI6WyJQcmlvcml0eUV4cHJlc3MiLCJQcmlvcml0eUV4cHJlc3MgTWlsZVZpc2lvbiJdLCJyb2xlcyI6WyJNaWxlVmlzaW9uX1VzZXIiXSwicGVybWlzc2lvbnMiOltdfSwib3JnYW5pemF0aW9uIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSIsIkFsYWJvIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSJ9fSwib2JqZWN0cyI6eyJkcml2ZXJJZCI6Ijc0MmMwMGNlLWZiYzMtNDM3MC1iN2IxLTY3YWZhMTUwZTBkOSJ9LCJpc3MiOiJodHRwczovL21pbGV6ZXJvLXN0YWdlLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZGQ2NTA3ZmY4M2VlNjBmMjM5M2VkMjAiLCJhdWQiOiJ6Z08xVVF2UmZQajJOQ2pvbWFlYVFTSEpBYzJWOWRmMyIsImlhdCI6MTY4NzQ0Njk3MSwiZXhwIjoxNjg3NDgyOTcxfQ.cjSg3panQJOFGHXdotLsgcG1nMv8iI03rL2j-N3oMyI&scope=openid%20authorization%20organization%20objects&expires_in=86400&token_type=Bearer&state=csIP_qX.En23TFBGmDmPLwLbXSQB5UGN');
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByTitle('Configure').click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'SHIPPER CUSTOMERS' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).click();
  await page.frameLocator('#iframe').getByRole('combobox', { name: 'Select a Shipper' }).click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'aci' }).click();
  await page.frameLocator('#iframe').getByPlaceholder('Reference Id').click();
  await page.frameLocator('#iframe').getByPlaceholder('Reference Id').fill('123');
  await page.frameLocator('#iframe').getByPlaceholder('Name', { exact: true }).click();
  await page.frameLocator('#iframe').getByPlaceholder('Name', { exact: true }).fill('shipCust');
  await page.frameLocator('#iframe').getByLabel('Customer Since').click();
  await page.frameLocator('#iframe').getByText('NotesNotesCSR ReminderCustomer SinceLast Ordered').click();
  await page.frameLocator('#iframe').locator('#pv_id_21 svg').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'AK' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close', exact: true }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'SAVE & CLOSE', exact: true }).click();
  await page.frameLocator('#iframe').getByPlaceholder('1234 Street Name').click();
  await page.frameLocator('#iframe').getByPlaceholder('1234 Street Name').fill('123 st mjahs');
  await page.frameLocator('#iframe').getByPlaceholder('City').click();
  await page.frameLocator('#iframe').getByPlaceholder('City').fill('newyork');
  await page.frameLocator('#iframe').getByPlaceholder('12345').click();
  await page.frameLocator('#iframe').getByPlaceholder('12345').fill('12345');
  await page.frameLocator('#iframe').getByRole('button', { name: 'SAVE & CLOSE', exact: true }).click();

  
});