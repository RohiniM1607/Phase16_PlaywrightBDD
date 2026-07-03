import { Given, When, Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/PageFixture";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(30000);

// let browser: Browser;
// let page: Page;

Given('User is on TutorialsNinja Application', async function () {
//   browser = await chromium.launch({ headless: false});
//   page = await browser.newPage();
  
  await pageFixture.page.goto("https://tutorialsninja.com/demo/");
});
When('User clicks on Login link', async function () {
  await pageFixture.page.locator("//a[@title='My Account']").click();
  await pageFixture.page.locator("(//a[text()='Login'])[1]").click();
});

When('User enter the login email as {string}', async function (email) {
  await pageFixture.page.locator("input#input-email").fill(email);
});

When('User enter the login password as {string}', async function (password) {
  await pageFixture.page.locator("input#input-password").fill(password);
});

When('User clicks on the login button', async function () {
  await pageFixture.page.locator("//input[@value='Login']").click();
});

Then('Login should be success', async function () {
  await expect(pageFixture.page.locator("//h2[text()='My Account']")).toBeVisible();
  //await browser.close();
});

Then('Login error message should display', async function () {
  await expect(pageFixture.page.locator("//div[@class='alert alert-danger alert-dismissible']")).toBeVisible();
  //await browser.close();
});