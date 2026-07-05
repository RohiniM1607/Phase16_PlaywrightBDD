import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { AEWorld } from "../world/customworld";
import registerData from "../utils/JSON_Reader";

let homePage: HomePage;
let registerPage: RegisterPage;

Given("User launches Automation Exercise application", async function (this: AEWorld) {
    homePage = new HomePage(this.page);
    registerPage = new RegisterPage(this.page);

    await homePage.openApplication();
});

When("User navigates to Signup Login page", async function () {
    await homePage.clickSignupLogin();
});

When("User enters new user details", async function () {
    const user = registerData.newUser;
    const uniqueEmail = registerPage.generateEmail(user.email);
    await registerPage.enterSignupDetails(user.name, uniqueEmail);
});

When("User completes registration form", async function () {
    const user = registerData.newUser;
    await registerPage.fillRegistrationForm(user);
    await registerPage.clickCreateAccount();

});

Then("User account should be created successfully", async function () {
    await registerPage.verifyAccountCreated();
    await registerPage.clickContinue();
});