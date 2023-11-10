// @ts-check
import { test, expect } from '@playwright/test';
const { TIMEOUT } = require('dns');
const { setTimeout } = require('timers/promises');
async function login(page, email, password) {
  // Navigate to the website
  await page.goto('https://milevision-stage.milezero.com/');

  // Fill in email and password and click login button

  await page.getByPlaceholder('username/email').fill(email)
  await page.getByPlaceholder('your password').fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();

  // Wait for navigation to complete and check if login was successful
  await page.waitForNavigation()

  const title = await page.title();
  if (title === 'MileVision') {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }
}

module.exports = login;