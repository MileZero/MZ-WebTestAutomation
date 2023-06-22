const {chromium} = require('playwright');

(async()=> 

{   


//function code

const browser = await chromium.launch({headless:false, slowMo:100});

const page = await browser.newPage();

await page.goto('https://milevision-stage.milezero.com');

await browser.close();


}) (); 