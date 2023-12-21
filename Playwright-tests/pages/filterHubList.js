const { expect, Locator, Page } = require('@playwright/test');
exports.FilterFeature = class FilterFeature {
    constructor(page) {
        this.page = page
        this.columnSort = page.locator('svg').first();
        this.Search = page.locator('input[type="text"]');
        this.saveResultsAsTab = page.getByRole('tab', { name: ' Save results as tab' });
        this.tabName = page.getByLabel('Tab Name');
        this.clearFilters = page.locator("xpath= //body/div[1]/div[2]/div[1]/div[1]/button[1]");
        this.searchTab = page.locator("xpath= //body/div[1]/div[2]/div[1]/div[1]/span[1]/input[1]")
        this.apply = page.getByRole('button', { name: 'Apply' })

    }


    async sortColumns() {

        const columns = ["Name", "Description", "Address", "Address2", "City", "State", "Zip", "Time Zone", "Status", "Geocode", "Geo.Rad(ft)"];
        for (let i = 0; i <= columns.length - 1; i++) {
            await this.page.getByRole('columnheader', { name: `${columns[i]}` }).locator('svg').first().click()
            if (i == columns.length - 1) {
                console.log("sorting succeeded")
            }
        }
    }


    async searchColumns(word) {

        const columns = ['Name', 'Description', 'Address', 'Address2', 'City', 'State', 'Zip', 'Time Zone', 'Geocode', 'Geo.Rad(ft)'];
        for (let i = 0; i <= columns.length - 1; i++) {
            await this.page.getByRole('columnheader', { name: `${columns[i]}`, exact: true }).getByRole('button').click();
            await this.Search.fill(word);
            await this.apply.click();
            await this.page.screenshot({ path: 'Screenshots/searchworked.png' });
            await this.clearFilters.click();
        }
    }

    async generalSearchTab(search) {
        await this.searchTab.fill(search);
        await this.searchTab.focus();
        for (let i = 0; i <= search; i++) {
            await this.page.keyboard.press('Backspace');
        }
    }

}