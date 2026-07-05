import { Locator, Page } from "@playwright/test";

export class BasePage {
    constructor(protected page: Page) { }

    async navigate() {
        await this.page.goto(process.env.BASE_URL!);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async select(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    async check(locator: Locator) {
        await locator.check();
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }
}