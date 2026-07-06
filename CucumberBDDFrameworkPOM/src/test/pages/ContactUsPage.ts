import { expect, Locator, Page } from "@playwright/test";

export class ContactUsPage {

    readonly page: Page;

    readonly getInTouch: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly uploadFile: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;
    readonly homeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getInTouch = page.getByRole("heading", {name: /Get In Touch/i});
        this.name = page.getByPlaceholder("Name");
        this.email = page.locator("input[name='email']");
        this.subject = page.getByPlaceholder("Subject");
        this.message = page.getByPlaceholder("Your Message Here");
        this.uploadFile = page.locator("input[name='upload_file']");
        this.submitButton = page.getByRole("button", {name: "Submit"});
        this.successMessage = page.locator(".status.alert.alert-success");
        this.homeButton = page.getByRole("link", {name: /Home/i});
    }

    async verifyGetInTouch() {
        await expect(this.getInTouch).toBeVisible();
    }

    async enterContactDetails(name: string, email: string, subject: string, message: string) {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.subject.fill(subject);
        await this.message.fill(message);
    }

    async uploadDocument() {
        await this.uploadFile.setInputFiles(
            "C:\\Users\\User\\Downloads\\KIOT_SDET_2026_Python_Selenium_Assessment24.pdf"
        );
    }

    async clickSubmit() {
        this.page.once("dialog", async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });

        await this.submitButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toHaveText("Success! Your details have been submitted successfully.");
    }

    async clickHome() {
        await this.homeButton.click();
    }
}