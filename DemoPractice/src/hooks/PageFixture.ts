import { Page, Browser, BrowserContext } from "@playwright/test";

export const pageFixture: {
    browser: Browser;
    context: BrowserContext;
    page: Page;
} = {} as {
    browser: Browser;
    context: BrowserContext;
    page: Page;
};