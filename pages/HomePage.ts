import { Page, Locator } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    // 1. Store the locator as a base locator, not an evaluated Promise array
    private readonly productsSelector: Locator;
    private readonly addToCartButton: Locator; 
    private readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsSelector = this.page.locator("div#tbodyid div.card h4.card-title a");
        //this.addToCartButton = this.page.locator('a:has-text("Add to cart")');
        this.addToCartButton = this.page.getByRole('link', { name: 'Add to cart' });
        //page.locator(':text("Add to cart")')
        this.cartLink = this.page.locator("#cartur");
    }
    
    // Method to add specific product to cart
    async addProductToCart(productName: string): Promise<void> {
        // 2. Safely call .all() here inside an async method
        const productElements = await this.productsSelector.all();

        for (const product of productElements) {
            const name = await product.textContent();

            // 3. Fixed standard 'if' syntax
            if (name?.trim() === productName) {
                await product.click();
                break;
            }
        }

        // 4. Register the dialog handler BEFORE the action that triggers it
        this.page.once('dialog', async (dialog) => {
            if (dialog.message().includes('added')) {
                await dialog.accept();
            }
        });

        // 5. Fixed the correct reference to the locator button
        await this.addToCartButton.click();
    }

    async gotoCart() {
        await this.cartLink.click();
    }
}