import { When, Then } from "@cucumber/cucumber";
import { RegisterPage } from "../pages/RegisterPage";
import registerData from "../utils/JSON_Reader";

let registerPage: RegisterPage;

When("User enters existing email", async function () {
    registerPage = new RegisterPage(this.page);
    const user = registerData.existingUser;
    await registerPage.enterSignupDetails(user.name, user.email);

});

Then("Existing email error should be displayed", async function () {
    await registerPage.verifyExistingEmailError();
});