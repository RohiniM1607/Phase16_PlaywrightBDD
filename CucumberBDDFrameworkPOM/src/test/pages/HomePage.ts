import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    readonly signupLoginLink: Locator;
    readonly logoutLink: Locator;
    readonly loggedInAs: Locator;
    readonly contactUs: Locator;

    constructor(page: Page) {
        super(page);

        this.signupLoginLink = page.getByRole("link", { name: " Signup / Login" });
        this.logoutLink = page.getByRole("link", { name: " Logout" });
        this.loggedInAs = page.locator("//a[contains(text(),'Logged in as')]");
        this.contactUs = page.getByRole("link", { name: " Contact us" });
    }

    async openApplication() {
        await this.navigate();
    }

    async clickSignupLogin() {
        await this.click(this.signupLoginLink);
    }

    async clickLogout() {
        await this.click(this.logoutLink);
    }

    async verifyHomePage() {
        await expect(this.page).toHaveTitle("Automation Exercise");
    }

    async verifyLoggedIn() {
        await expect(this.loggedInAs).toBeVisible();
    }

    async clickContactUs() {
        await this.contactUs.click();
    }
}