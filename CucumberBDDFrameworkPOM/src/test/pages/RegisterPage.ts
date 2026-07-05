import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {

    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly signupButton: Locator;

    readonly titleMr: Locator;
    readonly titleMrs: Locator;
    readonly password: Locator;

    readonly day: Locator;
    readonly month: Locator;
    readonly year: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address1: Locator;
    readonly address2: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobile: Locator;

    readonly createAccountButton: Locator;
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;
    readonly existingEmailError: Locator;

    constructor(page: Page) {
        super(page);

        this.signupName = page.locator("[data-qa='signup-name']");
        this.signupEmail = page.locator("[data-qa='signup-email']");
        this.signupButton = page.locator("[data-qa='signup-button']");

        this.titleMr = page.locator("#id_gender1");
        this.titleMrs = page.locator("#id_gender2");
        this.password = page.locator("#password");

        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");

        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address1 = page.locator("#address1");
        this.address2 = page.locator("#address2");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobile = page.locator("#mobile_number");

        this.createAccountButton = page.locator("[data-qa='create-account']");
        this.accountCreatedMessage = page.locator("h2[data-qa='account-created']");
        this.continueButton = page.locator("[data-qa='continue-button']");
        this.existingEmailError = page.locator("//p[contains(text(),'Email Address already exist!')]");
    }

    generateEmail(email: string): string {
        const [username, domain] = email.split("@");
        return `${username}${Date.now()}@${domain}`;
}

    async enterSignupDetails(name: string, email: string) {
        await this.enterText(this.signupName, name);
        await this.enterText(this.signupEmail, email);
        await this.click(this.signupButton);
    }

    async fillRegistrationForm(user: any) {

        if (user.title === "Mr")
            await this.check(this.titleMr);
        else
            await this.check(this.titleMrs);

        await this.enterText(this.password, user.password);

        await this.select(this.day, user.day);
        await this.select(this.month, user.month);
        await this.select(this.year, user.year);

        await this.enterText(this.firstName, user.firstName);
        await this.enterText(this.lastName, user.lastName);
        await this.enterText(this.company, user.company);
        await this.enterText(this.address1, user.address1);
        await this.enterText(this.address2, user.address2);

        await this.select(this.country, user.country);

        await this.enterText(this.state, user.state);
        await this.enterText(this.city, user.city);
        await this.enterText(this.zipcode, user.zipcode);
        await this.enterText(this.mobile, user.mobileNumber);
    }

    async clickCreateAccount() {
        await this.click(this.createAccountButton);
    }

    async clickContinue() {
        await this.click(this.continueButton);
    }

    async verifyAccountCreated() {
        await expect(this.accountCreatedMessage).toHaveText("Account Created!");
    }

    async verifyExistingEmailError() {
        await expect(this.existingEmailError).toBeVisible();
    }
}