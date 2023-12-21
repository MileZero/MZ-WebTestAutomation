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
    await create.uploadDirverPhoto();
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
    await create.writeCompanyName();
    await create.clickSave();  

// Wait for the data table to load
await page.waitForSelector('#pv_id_20_0_content > div > div.p-datatable-wrapper > table');

// Search for the created driver in the data table
const searchText = 'sam';
const searchResults = await page.$$eval('#pv_id_20_0_content > div > div.p-datatable-wrapper > table td', (cells, searchText) => {
  const results = [];
  for (const cell of cells) {
    if (cell.textContent.includes(searchText)) {
      results.push(cell.textContent);
    }
  }
  return results;
}, searchText);

// await page.getByRole('link').filter({hasText: searchText }).click()

// Display the search results
console.log(`Search results for "${searchText}":`);
if (searchResults.length > 0) {
  for (const result of searchResults) {
    console.log(result);
  }
} else {
  console.log('No matching results found.');
}

await page.getByRole('cell', { name: searchText, exact: true }).locator('a').click();

})