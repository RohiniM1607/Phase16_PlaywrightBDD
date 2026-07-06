import { expect, Locator, Page } from "@playwright/test";

export class SearchProductPage {

    readonly page: Page;
    readonly productsBtn: Locator;
    readonly allProductsTitle: Locator;
    readonly searchInput: Locator;
    readonly searchBtn: Locator;
    readonly searchedProductsTitle: Locator;
    readonly productCards: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productsBtn = page.locator("a[href='/products']");
        this.allProductsTitle = page.locator(".title.text-center");
        this.searchInput = page.locator("#search_product");
        this.searchBtn = page.locator("#submit_search");
        this.searchedProductsTitle = page.locator("h2.title.text-center");
        this.productCards = page.locator(".productinfo.text-center p");
    }

    async clickProducts() {
        await this.productsBtn.click();
    }

    async verifyAllProductsPage() {
        await expect(this.page).toHaveURL(/products/);
        await expect(this.allProductsTitle).toContainText("All Products");
    }

    async searchProduct(product: string) {
        await this.searchInput.fill(product);
        await this.searchBtn.click();
    }

    async verifySearchedProductsTitle() {
        await expect(this.searchedProductsTitle).toContainText("Searched Products");
    }

    async verifyRelatedProducts(product: string) {
        const count = await this.productCards.count();
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < count; i++) {
            const text = await this.productCards.nth(i).textContent();
            expect(text?.toLowerCase()).toContain(product.toLowerCase());
        }
    }
}