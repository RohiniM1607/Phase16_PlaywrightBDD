import { CustomWorld } from "../../hooks/world";
import { Given, When, Then } from "@cucumber/cucumber";
import { expect} from '@playwright/test';

Given('User navigates to the application', async function (this: CustomWorld) {
  //browser = await chromium.launch({headless: false});
  //page = await browser.newPage();
  await this.page.goto("https://tutorialsninja.com/demo/");
  console.log("Navigated to url");
});

Given('User click the Account menu', async function (this: CustomWorld) {
  await this.page.locator("//i[@class='fa fa-user']").click();
});

Given('User click on the login link', async function (this: CustomWorld) {
  await this.page.getByRole('button', { name: 'Login' }).click();
});

Given('User enter the email as {string}', async function (this: CustomWorld, string) {
  await this.page.getByPlaceholder("E-Mail Address").fill(string);
});

Given('User enter the password as {string}', async function (this: CustomWorld, string) {
  console.log("enter to password");
  await this.page.getByPlaceholder("Password").fill(string);
});

When('User click on the login button', async function (this: CustomWorld) {
  console.log("Click login button");
  await this.page.locator("//input[@type='submit']").click();
});

Then('My Account should be displayed', async function (this: CustomWorld) {
    await expect(this.page.getByRole('heading', { name: 'My Account' })).toBeVisible();
});



Then('Login should be unsuccessful', async function (this: CustomWorld) {
    await expect(
        this.page.locator(".alert-danger")
    ).toContainText("Warning: No match for E-Mail Address and/or Password.");
});