import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { readLoginData } from "../utils/CSV_Reader";
import { expect } from "@playwright/test";

let homePage: HomePage;
let loginPage: LoginPage;

Given("User logged into application", async function () {

    homePage = new HomePage(this.page);
    loginPage = new LoginPage(this.page);

    await homePage.openApplication();
    await homePage.clickSignupLogin();
    const users = readLoginData();
    const validUser = users.find(user => user.type === "valid");
    await loginPage.login(validUser!.email, validUser!.password);
});

When("User clicks Logout", async function () {
    await homePage.clickLogout();
});

Then("User should be redirected to Login page", async function () {
    await expect(this.page).toHaveURL(/login/);
});