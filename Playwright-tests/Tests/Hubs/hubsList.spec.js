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
    const search = "Arizona"

    await Filter.searchColumns(word);
    await Filter.sortColumns();
    await Filter.generalSearchTab(search);

});



