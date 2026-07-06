import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/HomePage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { AEWorld } from "../world/customworld";

let homePage: HomePage;
let contactUsPage: ContactUsPage;


When("User clicks Contact Us", async function () {
    homePage = new HomePage(this.page);
    contactUsPage = new ContactUsPage(this.page);

    await homePage.clickContactUs();
});

Then("GET IN TOUCH should be visible", async function () {
    await contactUsPage.verifyGetInTouch();
});

When("User enters {string} {string} {string} {string}", async function (name: string, email: string, subject: string, message: string) {
    await contactUsPage.enterContactDetails(name, email, subject, message);
});

When("User uploads the file", async function () {
    await contactUsPage.uploadDocument();
});

When("User clicks Submit", async function () {
    await contactUsPage.clickSubmit();
});

Then("Contact form should be submitted successfully", async function () {
    await contactUsPage.verifySuccessMessage();
});

