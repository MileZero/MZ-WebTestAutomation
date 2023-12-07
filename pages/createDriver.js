const { expect, Locator, Page } = require('@playwright/test');
exports.createDriver = class createDriver {
    constructor(page) {
        this.page = page
        this.vendorID = page.getByPlaceholder('Vendor ID');
        this.Vendor = page.getByPlaceholder('Vendor', { exact: true })
        this.Name = page.getByPlaceholder("Enter name")
        this.Email = page.getByPlaceholder('email@email.com')
        this.createdDriver = page.getByRole('cell', { name: {}, exact: true }).locator('a');
        this.showInActive = page.getByLabel('Show Inactive');
        this.Save= page.getByRole('button', {name:'Create'})
        this.saveResultsAsTab = page.getByRole('tab', { name: ' Save results as tab' });
        this.mobileNumber = page.getByLabel('Mobile Number');
        this.userName = page.getByPlaceholder('User Name');
        this.fleet = page.getByRole('combobox', { name: 'fleet' });
        this.businessUnit = page.getByRole('combobox', { name: 'Business Unit' });
        this.workerType = page.getByRole('combobox', { name: 'Worker Type' });
        this.driverWorkerType = page.locator("xpath=//*[@id='pv_id_18_0']")
        this.contractorNumber = page.locator('div').filter({ hasText: /^Contractor Number$/ }).getByRole('textbox');
        this.companyName = page.getByPlaceholder('Company Name');
        this.contractorType =  page.locator("xpath=//span[@id='contractorType']");
        this.contractorName = page.locator("xpath=//span[@id='contractorName']");
        this.driverlicenceExpiryDate = page.locator("#pv_id_23_0_content > div > div:nth-child(1) > div:nth-child(5) > span");
        this.insuranceCompanyExpiryDate = page.locator('div').filter({ hasText: /^InsuranceCompanyExpiration$/ }).getByPlaceholder('mm/dd/yyyy');
    }
    async createNewDriverPage() {
        await this.page.goto('https://milevision-stage.milezero.com/mv/workerProfile.jsp?node=RDG')
}

    async writeEmail() {

        await this.Email.fill('yasser@yasser.com')
    }

    async writeVendorID() {

        await this.vendorID.fill('Ejy94Ko183bh5lo73')
    }

    async writeName() {

        await this.Name.fill('sam')
    }
    async writePhoneNumber() {

        await this.mobileNumber.fill('8143193555')
    }
    async writeUserName() {

        await this.userName.fill('samy')
    }
    async chooseContractorType() {

        await this.contractorType.click()
        await this.page.getByText('Master').click();
    }
    async chooseFleet() {

        await this.fleet.click();
        await this.page.getByText('PHL_SECONDARY_USER').click();
    }
    
    async chooseBusinessUnit() {

        await this.businessUnit.click();
        await this.page.getByText('RDG Route').click();
    }
    async writeVendor() {

        await this.Vendor.fill('Bristine co')
    }
    async chooseWorkerType() {

        await this.workerType.click();
        await this.driverWorkerType.click();

    }
    async writeContractorNumber() {

        await this.contractorNumber.fill('55667788')
    }
    async checkInActive() {

        await this.showInActive.click()
    }
    async chooseDriverLicenseExpiryDate() {
    
        await this.driverlicenceExpiryDate.click()
        await this.page.getByText('8', { exact: true }).click();
    }
    async chooseInsuranceCompanyExpiryDate() {

        await this.insuranceCompanyExpiryDate.click()
        await this.page.getByText('14',{exact: true}).click();
    }
    async clickSave() {

        await this.Save.click();
    }
    async writeCompanyName() {

        await this.companyName.fill('halk')
    }
    async uploadDirverPhoto() {

        await this.page.setInputFiles("input[type='file']", 'Tests/Media/download.jpeg')
    }
}
