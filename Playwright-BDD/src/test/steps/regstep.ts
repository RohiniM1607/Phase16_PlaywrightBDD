import { Given, When , Then } from "@cucumber/cucumber";
import {expect} from '@playwright/test';
//import { pageFixture } from './../../hooks/pageFixture';
import { CustomWorld } from "../../hooks/world";

//let browser:Browser;
//let page: Page;

Given('User navigated to the application', async function (this:CustomWorld) {
  //browser = await chromium.launch({headless: false});
  //page = await browser.newPage();
  await this.page.goto("https://tutorialsninja.com/demo/");
  console.log("Navigated to url");
});

Given('User clicks the Account menu', async function (this:CustomWorld) {
  await this.page.locator("//i[@class='fa fa-user']").click();
});

Given('User click on the register link', async function (this:CustomWorld) {
  await this.page.getByRole('link', {name:'Register'}).click();
});

Given('User enter the first name as {string}', async function (this:CustomWorld,string) {
  await this.page.locator("#input-firstname").fill(string);
});

Given('User enter the last name as {string}', async function (this:CustomWorld,string) {
  await this.page.locator("#input-lastname").fill(string);
});

Given('User enter the Email as {string}', async function (this:CustomWorld, string) {
  await this.page.locator("#input-email").fill(string);
});

Given('User enter the telephone as {string}', async function (this:CustomWorld, string) {
  await this.page.locator("#input-telephone").fill(string);
});

Given('User enter the Password as {string}', async function (this:CustomWorld, string) {
  await this.page.locator("#input-password").fill(string);
});

Given('User enter the conform password as {string}', async function (this:CustomWorld, string) {
  await this.page.locator("#input-confirm").fill(string);
});

Given('User click the policy check box', async function (this:CustomWorld) {
  await this.page.locator("//input[@type='checkbox']").check();
});

When('User click on the continue button', async function (this:CustomWorld) {
  await this.page.locator("//input[@type='submit']").click();
});

Then('success should be displayed', async function (this:CustomWorld) {
  const creation =  this.page.locator("//h1[text()='Your Account Has Been Created!']");
  await expect(creation).toContainText("Your Account Has Been Created!");
});

Then('Existing account warning should be displayed', async function (this:CustomWorld) {
  const error = this.page.locator("//div[@class='alert alert-danger alert-dismissible']");
  await expect(error).toContainText("Warning: E-Mail Address is already registered!");
});