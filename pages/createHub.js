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
        this.State = page.locator('xpath =//*[@id="state"]').getByRole('combobox');
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

        await this.contactEmail.fill('yasser@test.com')
    }

    async writeReferenceID() {

        await this.referenceID.fill('Ejy94Ko183bh5lo73')
    }
    async writeDescription() {

        await this.Description.fill('testing script')
    }

    async writeName() {

        await this.Name.fill('Mady')
    }
    async writecontactPhone() {

        await this.contactPhone.fill('8143193555')
    }
    async writecontactName() {

        await this.contactName.fill('fady')
    }
    async chooseState() {

        await this.State.click();
        await this.page.getByLabel('Alabama').click();
    }
    async writeLocationName() {

        await this.locationName.fill('Chick Fil-A')
    }
    async writeAddress() {

        await this.Address.fill('6880 AL-5, Brent, AL 35034')

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
    async clickSave() {

        await this.createButton.click();
    }
    async writeCity() {

        await this.City.fill('Birmingham')
    }
    async writeSMS() {

        await this.SMS.fill(' HELLO ')
    }
    async chooseDeliveryDays() {
        await this.deliveryDays.check();

    }
}
