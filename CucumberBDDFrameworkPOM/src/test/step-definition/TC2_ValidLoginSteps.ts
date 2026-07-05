import { When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { readLoginData } from "../utils/CSV_Reader";

let homePage: HomePage;
let loginPage: LoginPage;

When("User enters valid login credentials", async function () {

    homePage = new HomePage(this.page);
    loginPage = new LoginPage(this.page);

    const users = readLoginData();
    const validUser = users.find(user => user.type === "valid");

    if (!validUser) {
        throw new Error("Valid user not found in CSV.");
    }

    await loginPage.login(validUser.email, validUser.password);

});

Then("User should be logged in successfully", async function () {
    await homePage.verifyLoggedIn();

});