const { test, page, expect } = require('@playwright/test');
const { FilterFeature } = require('../pages/Filter.Feature');
const Login = require('./Loginto.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;

test('driverprofile page', async ({ page }) => {
    // await Login(page, email, password)
    const Filter = new FilterFeature(page);
    await page.goto('https://milevision-stage.milezero.com/mv/clm-workers.jsp?node=RDG');
    await page.getByRole('button', { name: 'AUTH0' }).click()
    await page.getByPlaceholder('username/email').fill(email)
    await page.getByPlaceholder('your password').fill(password);
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.goto('https://milevision-stage.milezero.com/mv/clm-workers.jsp?node=RDG');
    // await page.getByRole('button', { name: 'Add a New Driver' }).click();
    //await page.getByRole('columnheader', { name: 'Email' }).locator('svg').click();
    const Searchword = await page.evaluate(() => {
        return prompt('Please enter word to search with:');
    });
    await Filter.filterStatusClick();
    await Filter.filterWithWords('RDG')
    // await page.fill('input[placeholder="Search"]', 'RDG');
    const Searchedword = await page.inputValue('input[placeholder="Search"]');
    await page.getByRole('columnheader', { name: 'Name' }).getByRole('button').click();
    await page.getByPlaceholder('Search').fill(Searchedword)
    console.log(Searchedword)
});
