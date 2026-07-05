import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./PageFixture";
import { After, Before, BeforeAll, AfterAll } from "@cucumber/cucumber";

let browser: Browser;
let context: BrowserContext;
let page: Page;


BeforeAll(async function(){
    browser = await chromium.launch({ headless: false});
});

Before(async function() {
    context = await browser.newContext();
    page = await context.newPage();
    
    pageFixture.browser = browser;
    pageFixture.context = context;
    pageFixture.page = page;
});

After(async function({pickle}){
    const img = await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`,type: "png"});

    await this.attach(img, "image/png");
    await page.close();
    await context.close();
})

AfterAll(async function(){
    await browser.close();
});