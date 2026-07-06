import { When, Then, DataTable } from "@cucumber/cucumber";
import { AEWorld } from "../world/customworld";
import { SearchProductPage } from "../pages/SearchProductPage";

let searchPage: SearchProductPage;
let productName: string;

When("User clicks on Products button", async function (this: AEWorld) {

    searchPage = new SearchProductPage(this.page);

    await searchPage.clickProducts();
});

Then("All Products page should be displayed", async function (this: AEWorld) {

    await searchPage.verifyAllProductsPage();
});

When("User searches for the product", async function (this: AEWorld, dataTable: DataTable) {
    const data = dataTable.hashes();
    if (data.length === 0) {
      throw new Error("DataTable is empty");
    }
    productName = data[0]!.product!;
    await searchPage.searchProduct(productName);
});

Then("Searched Products section should be displayed", async function (this: AEWorld) {

    await searchPage.verifySearchedProductsTitle();
});

Then("User should see only related products", async function (this: AEWorld) {

    await searchPage.verifyRelatedProducts(productName);
});