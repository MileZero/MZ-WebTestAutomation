const { test, page, expect } = require('@playwright/test');
const  { FilterFeature } = require('../pages/Filter.Feature');
const Login = require('./Loginto.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass; 

test('driverprofile page', async ({page})=> {
  // await Login(page, email, password)
  const Filter = new FilterFeature(page);
  await page.goto('https://milevision-stage.milezero.com/mv/clm-workers.jsp?node=RDG');
  await page.getByRole('button', { name: 'AUTH0' }).click()
  await page.getByPlaceholder('username/email').fill(email)
  await page.getByPlaceholder('your password').fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByPlaceholder('username/email')).toBeVisible();
  await page.getByPlaceholder('username/email').click();
  await page.getByPlaceholder('username/email').fill(email)
  await page.getByPlaceholder('your password').fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://milevision-stage.milezero.com/mv/clm-workers.jsp?node=RDG');
 // await page.getByRole('button', { name: 'Add a New Driver' }).click();
  //await page.getByRole('columnheader', { name: 'Email' }).locator('svg').click();
  //await page.getByRole('columnheader', { name: 'Status' }).getByRole('button').click();
  //const Search = await page.getByPlaceholder('Search').fill('RDG2')
  const Searchword = await page.evaluate(() => {
    return prompt('Please enter word to search with:');
  });
  await Filter.filterClick()
  await Filter.filterWithWords('RDG')
 // await page.fill('input[placeholder="Search"]', 'RDG');
  const Searchedword = await page.inputValue('input[placeholder="Search"]');
 // const Searchedword = await Search.inputValue();
  await page.getByRole('columnheader', { name: 'Name' }).getByRole('button').click();
  await page.getByPlaceholder('Search').fill(Searchedword)
  console.log(Searchedword)
});
