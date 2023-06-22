

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByPlaceholder('username/email').fill('clmsustage');
  await page.getByPlaceholder('your password').click();
  await page.getByPlaceholder('your password').fill('1234');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://milevision-stage.milezero.com/#access_token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9taWxlemVyby1zdGFnZS5hdXRoMC5jb20vIn0..MULT-jPiFaZLE5gu.qduIN1NFE9lBJRjmh4Ngri_ch91vAQll4eZKreunLclueD-AWWt6wAwMFdmXvBgZHhJ9UxjF81nBYYsTVdJP-_fRYbE4vFi2vM96ynRGzJxQI_MrI72UvAPy5wD8b_3CYnLEr-coK9By2_ulA4vuP_DWGE7UkRCDRKurHFiSkqEWrL8ZeT_uqu86dv9nk7YZqqZ7lJDKzJv_9UiPMFbU0yPEv4B3G7ShgdpEaqlOsRxih2DBjnsZFs9ymHXsuoIeQpfjUJBz_JOL0KwZpmi4FW8.XwnKK3-Tu_LRjknQorKGJA&id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3d3dy5taWxlemVyby5jb20vbWlsZXplcm8tc3RhZ2UvYXBwTmFtZSI6Ik1pbGVWaXNpb24iLCJhdXRob3JpemF0aW9uIjp7Imdyb3VwcyI6WyJQcmlvcml0eUV4cHJlc3MiLCJQcmlvcml0eUV4cHJlc3MgTWlsZVZpc2lvbiJdLCJyb2xlcyI6WyJNaWxlVmlzaW9uX1VzZXIiXSwicGVybWlzc2lvbnMiOltdfSwib3JnYW5pemF0aW9uIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSIsIkFsYWJvIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSJ9fSwib2JqZWN0cyI6eyJkcml2ZXJJZCI6Ijc0MmMwMGNlLWZiYzMtNDM3MC1iN2IxLTY3YWZhMTUwZTBkOSJ9LCJpc3MiOiJodHRwczovL21pbGV6ZXJvLXN0YWdlLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZGQ2NTA3ZmY4M2VlNjBmMjM5M2VkMjAiLCJhdWQiOiJ6Z08xVVF2UmZQajJOQ2pvbWFlYVFTSEpBYzJWOWRmMyIsImlhdCI6MTY4NzQ0NTcwNiwiZXhwIjoxNjg3NDgxNzA2fQ.TOzQu155nNbYEPmAnrLjl6_2ZrA-g33At6rTWs_siVg&scope=openid%20authorization%20organization%20objects&expires_in=86400&token_type=Bearer&state=PTy7SjlkE3635Kzq_1ti_KNNkO0Qy95j');
  await page.goto('https://milevision-stage.milezero.com/');
  await page.getByTitle('Configure').click();
  await page.frameLocator('#iframe').getByRole('link', { name: 'SHIPPER CONTRACTS' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(1).click();
  await page.frameLocator('#iframe').getByLabel('Name').click();
  await page.frameLocator('#iframe').getByLabel('Name').fill('newContract');
  await page.frameLocator('#iframe').locator('#referenceId').click();
  await page.frameLocator('#iframe').locator('#referenceId').fill('123');
  await page.frameLocator('#iframe').locator('#overrideBusinessUnit').click();
  await page.frameLocator('#iframe').getByRole('option', { name: 'RDG Route' }).click();
  await page.frameLocator('#iframe').getByRole('button', { name: 'Save & Close' }).click();
  

  expect('#iframe').getByText('newContract').toBeVisible()
});