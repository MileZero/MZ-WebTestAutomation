const {test, expect, page} = require('@playwright/test');
const { createDriver } = require('../../pages/createDriver')
const Login = require('../LogintoMileView/logintoMileView.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
test('create a new driver page', async ({page}) => {
    await Login(page, email, password);
    const create = new createDriver(page);
    await create.createNewDriverPage()
    await create



})