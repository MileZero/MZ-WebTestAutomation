// // @ts-check
// import { test, expect, page } from '@playwright/test';
// const { TIMEOUT } = require('dns');
// const { setTimeout } = require('timers/promises');
// require('dotenv').config();

// const email = process.env.Email;
// const password = process.env.Pass; 
// const url = process.env.Url;

// async function login(page, email, password, url) {
//   // Navigate to the website
//   await page.goto(url);

//   // Fill in email and password and click login button

//   await page.getByPlaceholder('username/email').fill(email)
//   await page.getByPlaceholder('your password').fill(password);
//   await page.getByRole('button', { name: 'Log In' }).click();

//   // Wait for navigation to complete and check if login was successful
//   await page.waitForNavigation()

//   const title = await page.title();
//   if (title === 'MileVision') {
//     console.log('Login successful');
//   } else {
//     console.log('Login failed');
//   }
// }

// module.exports = login;
// test ('test login', async ({page}) =>{
//    await login(email,password,url)
// }
// )
const { chromium } = require('playwright');

async function getUserData() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Prompt the user for their name and phone number
  const name = await page.prompt('Please enter your name:');
  const phoneNumber = await page.prompt('Please enter your phone number:');

  // Store the user data in variables
  const Name = name.defaultValue;
  const PhoneNumber = phoneNumber.defaultValue;

  // Display the user data
  console.log('Name:', Name);
  console.log('Phone Number:', PhoneNumber);

  await browser.close();
}

getUserData();