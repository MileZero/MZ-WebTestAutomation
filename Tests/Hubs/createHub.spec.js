const {test, expect, page} = require('@playwright/test');
const { createHub } = require('../../pages/createHub')
const Login = require('../LogintoMileView/logintoMileView.spec');
require('dotenv').config();
const email = process.env.Email;
const password = process.env.Pass;
test('create a new hub page', async ({page}) => {
    await Login(page, email, password);
    const create = new createHub(page);
    await create.createNewHubPage();
    await create.clickCreateAHubButton();
    await create.writeName();
    await create.writeReferenceID();
    await create.writeDescription();
    await create.writecontactName();
    await create.writecontactPhone();
    await create.writeContactEmail();
    await create.writeSMS();
    await create.writeLocationName();
    await create.writeAddress();
    await create.writeAddress2();
    await create.writeCity();
    await create.chooseState();
    await create.writeZIP();
    await create.writePlus4();
    await create.writeGLClass();
    await create.chooseDeliveryDays();
    await create.clickCreate();

// Wait for the data table to load
await page.waitForSelector('#pv_id_20_0_content > div > div.p-datatable-wrapper > table');

// Search for the created driver in the data table
const searchText = 'Jack';
const searchResults = await page.$$eval('xpath= //*[@id="app"]/div/div[2]/div[2]', (cells, searchText) => {
  const results = [];
  for (const cell of cells) {
    if (cell.textContent.includes(searchText)) {
      results.push(cell.textContent);
    }
  }
  console.log(results);
}, searchText);

// await page.getByRole('link').filter({hasText: searchText }).click()

// Display the search results
console.log(`Search results for "${searchText}":`);
if (searchResults.length > 0) {
  for (const result of searchResults) {
    console.log(`a hub ${result} created`);
  }
} else {
  console.log('No matching results found.');
}

await page.getByRole('cell', { name: searchText, exact: true }).locator('a').click();

})