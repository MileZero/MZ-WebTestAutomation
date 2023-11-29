const { expect, Locator, Page } = require('@playwright/test');
exports.createDriver = class createDriver {
    constructor(page) {
        this.page = page
        this.vendorID = page.getByPlaceholder("Vendor ID");
        this.Vendor = page.getByPlaceholder('Vendor', { exact: true })
        this.Name = page.getByPlaceholder("Enter name")
        this.Email = page.locator('[id="email"]');
        this.createdDriver = page.getByRole('cell', { name: {}, exact: true }).locator('a').click();
        this.showInActive = page.getByLabel('Show Inactive');
        this.saveResultsAsTab = page.getByRole('tab', { name: ' Save results as tab' });
        this.mobileNumber = page.getByLabel('Mobile Number');
        this.userName = page.getByPlaceholder('User Name');
        this.fleet = page.getByRole('combobox', { name: 'fleet' });
        this.businessUnit = page.getByRole('combobox', { name: 'Business Unit' });
        this.workerType = page.getByRole('combobox', { name: 'Worker Type' });
        this.contractorNumber = page.locator('div').filter({ hasText: /^Contractor Number$/ }).getByRole('textbox');
        this.companyName = page.getByPlaceholder('Company Name');
        this.contractorType =  page.locator("xpath=//span[@id='contractorType']");
        this.contractorName = page.locator("xpath=//span[@id='contractorName']");
        this.driverlicenceExpiryDate = page.locator('div').filter({ hasText: /^Driver\'s LicenseStateINACTIVEExpiration$/ }).getByPlaceholder('mm/dd/yyyy').click();
        this.insuranceCompanyExpiryDate = page.locator('div').filter({ hasText: /^InsuranceCompanyExpiration$/ }).getByPlaceholder('mm/dd/yyyy').click();

    }
    async createNewDriverPage() {
        await this.page.goto('https://milevision-stage.milezero.com/mv/workerProfile.jsp?node=RDG')
}

    async writeEmail() {

        await this.Email.fill("yasser")
    }

    async writeVendorID() {

        await this.VendorID.fill("Ejy94Ko183bh5lo73")
    }

    async writeName() {

        await this.Name.fill(sam)
    }
    async writePhoneNumber() {

        await this.mobileNumber(8143193555)
    }
    async writeUserName() {

        await this.userName.fill('samy')
    }
    async writeContractorType() {

        await this.contractorType.click().getByText('Master').click()
    }
    async chooseFleet() {

        await this.fleet.selectOption('PHL_SECONDARY_USER')
    }
    async chooseBusinessUnit() {

        await this.fleet.selectOption('RDG Route')
    }
    async writeVendor() {

        await this.Vendor.fill('Bristine co')
    }
    async chooseWorkerType() {

        await this.fleet.selectOption('Driver')
    }
    async checkInActive() {

        await this.showInActive.click()
    }
    async chooseDriverLicenseExpiryDate() {
    
        await this.driverlicenceExpiryDate.getByText('8', { exact: true }).click();
    }
    async chooseInsuranceCompanyExpiryDate() {

        await this.insuranceCompanyExpiryDate.getByText('30',{exact: true}).click();
    }

};
//   await page.goto('https://milevision-stage.milezero.com/mv/workerList.jsp?node=RDG&authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL3d3dy5taWxlemVyby5jb20vbWlsZXplcm8tc3RhZ2UvYXBwTmFtZSI6Ik1pbGVWaXNpb24iLCJhdXRob3JpemF0aW9uIjp7Imdyb3VwcyI6WyJQcmlvcml0eUV4cHJlc3MiLCJQcmlvcml0eUV4cHJlc3MgTWlsZVZpc2lvbiJdLCJyb2xlcyI6WyJNaWxlVmlzaW9uX1VzZXIiXSwicGVybWlzc2lvbnMiOltdfSwib3JnYW5pemF0aW9uIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSIsIkFsYWJvIjp7Im9yZ05hbWUiOiI3NzE3Y2Q5ZC0zNzFiLTRlMWItYjEwNS1iMjlkMWFjYmRkZjciLCJvcmdJZCI6Ijc2YzIzNjg3LTQzYzQtNGZlMy1iNWYwLTRjZGQzODZlNzg5NSJ9fSwib2JqZWN0cyI6eyJkcml2ZXJJZCI6Ijc0MmMwMGNlLWZiYzMtNDM3MC1iN2IxLTY3YWZhMTUwZTBkOSJ9LCJpc3MiOiJodHRwczovL21pbGV6ZXJvLXN0YWdlLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ZGQ2NTA3ZmY4M2VlNjBmMjM5M2VkMjAiLCJhdWQiOiJ6Z08xVVF2UmZQajJOQ2pvbWFlYVFTSEpBYzJWOWRmMyIsImlhdCI6MTcwMDc1NDkzOSwiZXhwIjoxNzAwNzkwOTM5fQ.eVKMure_ia7nCULno1CEqn6ZANraHANJoKcP-deQ_I4');
//   await page.getByRole('cell', { name: 'Duban Cano', exact: true }).locator('a').click();
//   await page.getByPlaceholder('Enter name').click();
//   await page.getByPlaceholder('Vendor Id').click();
//   await page.getByPlaceholder('email@email.com').click();
//   await page.getByLabel('Mobile Number').click();
//   await page.getByPlaceholder('User Name').click();
//   await page.locator('#pv_id_15 #contractorType').click();
//   await page.getByRole('option', { name: 'MASTER' }).click();
//   await page.getByRole('combobox', { name: 'fleet' }).click();
//   await page.getByRole('option', { name: 'PHL_SECONDARY_USER' }).click();
//   await page.getByPlaceholder('Vendor', { exact: true }).click();
//   await page.getByRole('combobox', { name: 'Business Unit' }).click();
//   await page.getByRole('option', { name: 'RDG Route' }).click();
//   await page.getByRole('combobox', { name: 'Worker Type' }).click();
//   await page.getByRole('option', { name: 'DRIVER' }).click();
//   await page.locator('div').filter({ hasText: /^Contractor Number$/ }).getByRole('textbox').click();
//   await page.getByRole('button', { name: 'Create' }).click();
//   await page.getByText('Driver\'s LicenseStateINACTIVEExpiration').click();
//   await page.getByText('Expiration').first().click();
//   await page.getByPlaceholder('Company Name').click();
//   await page.locator('div').filter({ hasText: /^InsuranceCompanyExpiration$/ }).getByPlaceholder('mm/dd/yyyy').click();
//   await page.getByRole('row', { name: '26 27 28 29 30 1 2' }).getByText('30').click();
//   await page.getByText('Driver\'s LicenseStateINACTIVEExpiration').click();
  
//   await page.getByText('Driver\'s LicenseStateINACTIVEExpiration').click();
//   await page.getByText('Expiration').first().click({
//     button: 'right'
//   });
//   await page.getByText('Driver\'s LicenseStateINACTIVEExpiration').click();
//   await page.getByText('8', { exact: true }).click();
// });