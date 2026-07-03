import {Given, When, Then} from "@cucumber/cucumber";
import {chromium, Page, Browser, expect} from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User navigates to the application', {timeout: 30000},async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();
  await page.goto("https://bookcart.azurewebsites.net/");
});

Given('User click on the login link', async function () {
  await page.locator("//span[normalize-space(text()='Login']").click();
});

Given('User enter the username as {string}', async function (username) {
  await page.locator("input[formcontrolname='username']").fill(username);
});

Given('User enter the password as {string}', async function (password) {
  await page.locator("input[formcontrolname='password']").fill(password);
});

When('User click on the login button', async function () {
  await page.locator("(//button[@color='primary'])[3]").click();
});

Then('Login should be success', async function () {
  const expectedUsername = "Demo_1";
  const usernameLocator = page.locator(`//span[normalize-space(text())='${expectedUsername}']`);
  const usernameText = await usernameLocator.textContent();
  console.log("Username is: "+usernameText);
  await expect(usernameText?.trim()).toBe(expectedUsername);
  await browser.close();
});


Then('Login should fail', async function () {
  
});