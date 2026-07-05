import { When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { readLoginData } from "../utils/CSV_Reader";

let loginPage: LoginPage;

When("User enters invalid login credentials", async function () {

    loginPage = new LoginPage(this.page);

    const users = readLoginData();
    const invalidUser = users.find(user => user.type === "invalid");

    if (!invalidUser) {
        throw new Error("Invalid user not found in CSV.");
    }

    await loginPage.login(invalidUser.email, invalidUser.password);

});

Then("Error message should be displayed", async function () {
    await loginPage.verifyInvalidLogin();
});