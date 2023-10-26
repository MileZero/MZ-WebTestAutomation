const { expect, Locator, Page } = require('@playwright/test');

//var Searchwordinfo = prompt("What is your name?");
exports.FilterFeature = class FilterFeature {
constructor (page) {
    this.page = page
    this.FilterStatus = page.getByRole('columnheader', { name: 'Status' });
    this.FilterPlaced = page.frameLocator('#iframe').getByRole('columnheader', { name: 'Placed' }).getByRole('button');
    this.Search = page.frameLocator('#iframe').getByPlaceholder('Search by Time');
    this.Apply =  page.frameLocator('#iframe').getByRole('button', { name: 'Apply' });

}

async filterStatusClick() {
    await this.FilterStatus.click()
    await this.Search.click()
}
async filterPlacedClick() {
    await this.FilterPlaced.click()
    await this.Search.click()
}
async filterWithWords(Searchword) {
    await this.Search.fill(Searchword);
}
async clickApply() {
    await this.Apply.click();

}
};