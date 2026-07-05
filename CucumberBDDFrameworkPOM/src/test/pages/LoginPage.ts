import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly loginButton: Locator;
    readonly loginError: Locator;

    constructor(page: Page) {
        super(page);

        this.loginEmail = page.locator("[data-qa='login-email']");
        this.loginPassword = page.locator("[data-qa='login-password']");
        this.loginButton = page.locator("[data-qa='login-button']");
        this.loginError = page.locator("//p[contains(text(),'Your email or password is incorrect!')]");
    }

    async login(email: string, password: string) {
        await this.enterText(this.loginEmail, email);
        await this.enterText(this.loginPassword, password);
        await this.click(this.loginButton);
    }

    async verifyInvalidLogin() {
        await expect(this.loginError).toBeVisible();
    }
}