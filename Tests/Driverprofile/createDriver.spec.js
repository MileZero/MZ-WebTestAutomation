const {test, expect, page} = require('@playwright/test');
const { createDriver } = require('../../pages/createDriver')
const Login = require('../LogintoMileView/logintoMileView.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
test('create a new driver page', async ({page}) => {
    await Login(page, email, password);
    const create = new createDriver(page);
    await create.createNewDriverPage();
    await create.writeName();
    await create.writeVendorID();
    await create.writeEmail();
    await create.writePhoneNumber();
    await create.writeUserName();
    await create.chooseContractorType();
    await create.chooseFleet();
    await create.writeVendor();
    await create.chooseBusinessUnit();
    await create.writeContractorNumber();
    await create.chooseWorkerType();
    await create.chooseDriverLicenseExpiryDate();
    await create.chooseInsuranceCompanyExpiryDate();
    await create.clickSave();
    const searchText = await create.writeName;
    const searchResults = await page.$$eval('.p-datatable-table p-datatable-scrollable-table', (cells, searchText) => {
      const results = [];
      for (const cell of cells) {
        if (cell.textContent.includes(searchText)) {
          results.push(cell.textContent);
        }
      }
      return results;
    }, searchText);
  
    // Display the search results
    console.log(`Search results for "${searchText}":`);
    if (searchResults.length > 0) {
      for (const result of searchResults) {
        console.log(result);
      }
    } else {
      console.log('No matching results found.');
    }



})