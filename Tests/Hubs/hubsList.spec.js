const { test, page, expect } = require('@playwright/test');
const { FilterFeature } = require('../../pages/filterHubList');
const Login = require('../LogintoMileView/logintoMileView.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;

test('Hubs List page', async ({ page }) => {
     await Login(page, email, password)
    await page.goto('https://milevision-stage.milezero.com/mv/hubsConfig.jsp');
    const Filter = new FilterFeature(page);
    const word = 'A'
    const search ="Arizona"
    
    await Filter.searchColumns(word);
    await Filter.sortColumns();
    await Filter.generalSearchTab(search);
    
    // await Filter.filterNameClick()
    // await Filter.filterStatusClick();
    // await Filter.filterWithWords('RDG')

    // const Searchedword = await page.inputValue('input[placeholder="Search"]');
    // await page.getByRole('columnheader', { name: 'Name' }).getByRole('button').click();
    // await page.getByPlaceholder('Search').fill(Searchedword)
    // await Filter.filterNameClick();
    // await Filter.filterWithWords('')
    // await Filter.saveResultsAsTabClick(Searchedword)
    // console.log(Searchedword)
});



