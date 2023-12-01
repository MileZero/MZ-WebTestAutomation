const { expect, Locator, Page } = require('@playwright/test');
exports.FilterFeature = class FilterFeature {
    constructor(page) {
        this.page = page
        this.filterStatus = page.getByRole('columnheader', { name: 'Status' }).getByRole('button');;
        this.filterDescription = page.getByRole('columnheader', { name: 'Description' }).getByRole('button');
        this.filterAddress = page.getByRole('columnheader', { name: 'Address' }).getByRole('button');
        this.filterAddress2 = page.getByRole('columnheader', { name: 'Address2' }, { exact: true }).getByRole('button');
        this.filterCity = page.getByRole('columnheader', { name: 'City' }).getByRole('button');
        this.filterZip = page.getByRole('columnheader', { name: 'Zip' }).getByRole('button');
        this.filterState = page.getByRole('columnheader', { name: 'State' }).getByRole('button');
        this.filterTimeZone = page.getByRole('columnheader', { name: 'Time Zone' }).getByRole('button');
        this.filterGeocode = page.getByRole('columnheader', { name: 'Geocode' }).getByRole('button');
        this.filterName = page.getByRole('columnheader', { name: 'Name' }).getByRole('button')
        this.sort = page.locator('xpath=//*[@name()="rect"]')
        this.Search = page.locator('input[type="text"]');
        this.showInActive = page.getByLabel('Show Inactive');
        this.saveResultsAsTab = page.getByRole('tab', { name: ' Save results as tab' });
        this.tabName = page.getByLabel('Tab Name');

    }

    async saveResultsAsTabClick() {
        await this.saveResultsAsTab.click()
        await this.Search.click()
    }

    async sortColumns(){
        await this.sort.click()
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