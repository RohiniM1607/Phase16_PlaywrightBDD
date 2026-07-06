import { logger } from './../utils/Logger';
import { BeforeAll, Before, After, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { AEWorld } from "../world/customworld";
import "../utils/env"
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000);
let browser: Browser;

BeforeAll(async function () {
    logger.info("Launching Browser");
    browser = await chromium.launch({headless: false, slowMo: 1000});
});

Before(async function (this: AEWorld) {
    this.browser = browser;
    logger.info("Browser context and page created");
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: AEWorld, scenario) {
    if (scenario.result?.status === Status.PASSED) {
        logger.info(`Scenario Passed: ${scenario.pickle.name}`);
    }
    if (scenario.result?.status === Status.FAILED) {
        logger.error(`Scenario Failed: ${scenario.pickle.name}`);
        const screenshot = await this.page.screenshot({path: `reports/screenshots/${scenario.pickle.name}.png`,type: "png"});
        await this.attach(screenshot, "image/png");
        logger.info("Screenshot captured");
    }
    await this.context.close();
    logger.info("Browser context closed");

});

AfterAll(async function () {
    await browser.close();
    logger.info("Browser closed");
});