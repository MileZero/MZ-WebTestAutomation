// @ts-check
const { Page } = require ('@playwright/test');

async function login(
  page: Page,
  username: string,
  password: string,
): Promise<void> {
  await page.goto('https://milevision-stage.milezero.com/');
  await page.locator('id=email').fill(username);
  await page.locator('id=current-password').fill(password);

  await Promise.all([
  await  page.locator('button[type=submit] >> "Log in"').click(),
  ]);
}

export default login;