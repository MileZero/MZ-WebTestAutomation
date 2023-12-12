const { expect, Locator, Page } = require('@playwright/test');
exports.createHub = class createHub {
    constructor(page) {
        this.page = page
        this.createHub = page.locator('button').filter({ hasText: 'Create new Hub' });
        this.Name = page.getByPlaceholder('Enter name');
        this.referenceID = page.getByPlaceholder('Reference Id');
        this.Description = page.getByPlaceholder('Description');
        this.contactName = page.getByPlaceholder('Contact Name');
        this.contactPhone = page.getByPlaceholder('Contact Phone');
        this.contactEmail = page.getByPlaceholder('Contact Email');
        this.SMS = page.getByPlaceholder('SMS');
        this.locationName = page.getByPlaceholder('Location Name');
        this.Address = page.getByPlaceholder('Address', { exact: true });
        this.Address2 = page.getByPlaceholder('Address 2');
        this.City = page.getByPlaceholder('City');
        this.ZIP = page.getByLabel('Zip/Postal Code');
        this.Plus4 = page.getByPlaceholder('Plus');
        this.GIclass = page.getByPlaceholder('Gl Class');
        this.State = page.getByRole('combobox');
        this.deliveryDays = page.locator('div').filter({ hasText: /^MON$/ }).locator('div').nth(2)
        this.Latitude = page.getByLabel('Latitude');
        this.Longitude = page.getByLabel('Longitude');
        this.createButton = page.getByLabel('Create');
        this.cancelButton = page.getByLabel('Cancel');
        this.showInActive = page.getByLabel('Show Inactive');
    }

    async createNewHubPage() {
        await this.page.goto('https://milevision-stage.milezero.com/mv/hubsConfig.jsp');
    }
    async clickCreateAHubButton() {
        await this.createHub.click();
    }
    async writeContactEmail() {

        await this.contactEmail.fill('jack@test.com')
    }

    async writeReferenceID() {

        await this.referenceID.fill('33FK60MCT15E4')
    }
    async writeDescription() {

        await this.Description.fill('testing script')
    }

    async writeName() {

        await this.Name.fill('jack')
    }
    async writecontactPhone() {

        await this.contactPhone.fill('2052034512')
    }
    async writecontactName() {

        await this.contactName.fill('John')
    }
    async chooseState() {

        await this.State.click();
        await this.page.getByLabel('Alabama').click();
    }
    async writeLocationName() {

        await this.locationName.fill('Jack Browns Burger & Beer Joint')
    }
    async writeAddress() {

        await this.Address.fill('2811 7th Ave S, Birmingham, AL 35233-2803')
    }
    async writeAddress2() {

        await this.Address2.fill('Park Avenue')
    }
    async checkInActive() {

        await this.showInActive.click()
    }
    async writeZIP() {

        await this.ZIP.fill('35015')
    }
    async writePlus4() {

        await this.Plus4.fill('what?')

    }
    async writeGLClass() {

        await this.GIclass.fill('loak')
    }
    async clickCreate() {

        await this.createButton.click();
    }
    async writeCity() {

        await this.City.fill('Birtish coloumbia')
    }
    async writeSMS() {

        await this.SMS.fill(' test a hub ')
    }
    async chooseDeliveryDays() {
        await this.deliveryDays.click();

    }
}
