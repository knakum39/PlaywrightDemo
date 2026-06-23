import { Page, Locator } from '@playwright/test';

export class CartPage {

    private page:Page;
    //private productNameInCart : Promise<Array<Locator>>;
        // Store as a base Locator template
    private readonly cartRowsSelector: Locator;

    constructor(page:Page){
        this.page=page;
        // CSS selector to select all product name
       // Point to the element collection wrapper
        this.cartRowsSelector = this.page.locator("#tbodyid tr td:nth-child(2)");
    }

    // Method to check if a specific product is present in the cart
    async checkProductInCart(productName: string): Promise<boolean> {
        // Resolve .all() safely at runtime inside the async execution block
        const products = await this.cartRowsSelector.all();

        for (const product of products) {
            const name:any = (await product.textContent())?.trim();
            console.log(`Checking item in cart: ${name}`);
            if (name === productName) {
                return true;
            }
        }
        return false;
    }
}