const { test, page, expect } = require('@playwright/test');
const { FilterFeature } = require('../../pages/Filter.Feature');
const Login = require('../Logintomilevision/Loginto.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;

test('Orderlist', async ({ page }) => {
    await Login(page, email, password)
    await page.getByTitle('Origin').click();
    await page.getByText('RDG (RDG)').click();
    await page.getByTitle('Manage', { exact: true }).click();
    await page.getByRole('button', { name: 'Dispatch' }, {timeout: 5000}).click({timeout: 5000});
    await page.frameLocator('#iframe').getByRole('link', { name: 'ORDER LIST' }, {timeout: 7000}).click();
    const Filter = new FilterFeature(page);
    await page.frameLocator('#iframe').getByPlaceholder('Select Feedback date').click();
    await page.frameLocator('#iframe').getByRole('row', { name: '1 2 3 4 5 6 7' }).getByText('3').click();
    await Filter.filterPlacedClick();
    await Filter.filterWithWords('1');
    const Searchedword = await Filter.Search.inputValue('input[placeholder="Search by Time"]');
    await Filter.clickApply();
    if (Searchedword === '1') 
    {
        console.log("filtering succeeded")
    }
    else 
    {
        console.log('filtering failed')
    }
    const filterResult = await expect.soft(page.frameLocator('#iframe').getByRole('cell', { name: '17:11' })).toBeVisible()
    expect(await page.screenshot());

})
