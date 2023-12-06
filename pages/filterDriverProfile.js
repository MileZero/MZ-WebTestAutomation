const { expect, Locator, Page } = require('@playwright/test');
exports.FilterFeature = class FilterFeature {
constructor (page) {
    this.page = page
    this.filterStatus = page.getByRole('columnheader', { name: 'Status' }).getByRole('button');;
    this.filterVendorID = page.getByRole('columnheader', { name: 'Vendor ID' }).getByRole('button');
    this.filterName = page.getByRole('columnheader', { name: 'Name' }).getByRole('button')
    this.Search = page.locator('input[type="text"]');
    this.showInActive = page.getByLabel('Show Inactive');
    this.saveResultsAsTab = page.getByRole('tab', { name: ' Save results as tab' });
    this.tabName = page.getByLabel('Tab Name');

}
async sortColumns(){
      
    const columns = ["Name", "Description", "Address", "Address2", "City", "State", "Zip", "Time Zone", "Status", "Geocode", "Geo.Rad(ft)" ];
    for (let i = 0; i <= columns.length; i++) {
   await this.page.getByRole('columnheader', { name: `${columns[i]}` }).locator('svg').first().click()

}
}

async saveResultsAsTabClick() {
    await this.saveResultsAsTab.click()
    await this.Search.click()
}

async tabNameClick() {
    await this.tabName.click()
    await this.Search.click()
}

async filterNameClick() {
    await this.filterName.click()
    await this.Search.click()
}
async filterStatusClick() {
    await this.filterStatus.click()
    await this.Search.click()
}
async filterVendorIDClick() {
    await this.filterVendorID.click()
    await this.Search.click()
}
async filterWithWords(Searchword) {
    await this.Search.fill(Searchword);
}
async checkInActive() {
    await this.showInActive.click()
}

};