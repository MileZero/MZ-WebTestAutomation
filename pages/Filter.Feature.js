const { expect, Locator, Page } = require('@playwright/test');

//var Searchwordinfo = prompt("What is your name?");
exports.FilterFeature = class FilterFeature {
constructor (page) {
    this.page = page
    this.Filter = page.getByRole('columnheader', { name: 'Status' });
    this.Search = page.getByPlaceholder('Search');
}

async filterClick() {
    await this.Filter.click()
    await this.Search.click()
}
async filterWithWords(Searchword) {
    await this.Search.fill(Searchword);
}
};