import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/PageFixture";

When('User clicks on Register link', async function () {
  await pageFixture.page.locator("//a[@title='My Account']").click();
  await pageFixture.page.locator("(//a[text()='Register'])[1]").click();
});

When('User enter the firstname as {string}', async function (firstname) {
  await pageFixture.page.locator("input#input-firstname").fill(firstname);
});

When('User enter the lastname as {string}', async function (lastname) {
  await pageFixture.page.locator("input#input-lastname").fill(lastname);
});

When('User enter the email as {string}', async function (email) {
  await pageFixture.page.locator("input#input-email").fill(email);
});

When('User enter the phone number as {string}', async function (number) {
  await pageFixture.page.locator("input#input-telephone").fill(number);
});

When('User enter the confirmpassword as {string}', async function (confirmpassword) {
  await pageFixture.page.locator("input#input-confirm").fill(confirmpassword);
});

When('User check the privacy policy', async function () {
    await pageFixture.page.locator("//input[@type='checkbox']").check();
  
});

When('User click continue button', async function () {
  await pageFixture.page.locator("//input[@type='submit']").click();
});

Then('register should success', async function () {
  await expect(pageFixture.page.locator("//h1[text()='Your Account Has Been Created!']")).toBeVisible();
});

Then('Register error should display', async function () {
  await expect(pageFixture.page.locator("//div[contains(@class,'alert-danger')]")).toBeVisible();
})

