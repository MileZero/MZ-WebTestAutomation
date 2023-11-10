// @ts-check
const { test, expect } = require('@playwright/test');
const login = require('../Logintomilevision/Loginto.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
const sequence = prompt('Enter a sequence:');
// Login to milevision
test('test', async ( {page} , sequence) => {
    await login(page, email, password);
    await page.getByTitle('Configure').click();
    await page.getByRole('button', { name: 'Warehouse' }).click();
    await page.frameLocator('#iframe').getByRole('link', { name: 'STATIC ROUTE' }).click();
    await page.frameLocator('#iframe').getByRole('button', { name: 'customButton.label' }).nth(2).click();
    await page.frameLocator('#iframe').getByLabel('Reference Id').fill('Now_12');
    await page.frameLocator('#iframe').locator('#contractStopIdsDropdown div').nth(3).click();
    await page.frameLocator('#iframe').locator('#locationStopTypeDropdown svg').click();
    await page.frameLocator('#iframe').getByRole('option', { name: 'PICKUP' }).click();
    await page.frameLocator('#iframe').getByLabel('Sequence').fill(sequence);
    await page.getByRole('button', { name: 'Save & Close' })
    await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).locator('svg').first().click();
    await page.frameLocator('#iframe').getByRole('columnheader', { name: 'Seq' }).click();
    let newSeq = await page.getByRole('columnheader', { name: 'Seq' })
    if (newSeq = '550') 
    {
    console.log("creating a stop is successful")
    }
    else
    {
        console.log("creating a stop is unsuccessful")
    }
});
//const email = prompt('Enter your email:');
//const password = prompt('Enter your password:');
