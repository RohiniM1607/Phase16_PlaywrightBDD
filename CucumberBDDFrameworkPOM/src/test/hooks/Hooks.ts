import { BeforeAll, Before, After, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { AEWorld } from "../world/customworld";
import "../utils/env_Reader";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000);

let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
});

Before(async function (this: AEWorld) {
    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: AEWorld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({type: "png"});
        await this.attach(screenshot, "image/png");
    }
    await this.context.close();

});

AfterAll(async function () {
    await browser.close();
});