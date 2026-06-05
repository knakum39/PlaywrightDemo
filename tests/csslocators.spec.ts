import{test, expect, Locator} from '@playwright/test';

test('CSS locators demo', async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("input#small-searchterms").fill("laptop");
    await page.waitForTimeout(5000);

    await expect(page.locator("input.button-1.search-box-button")).toBeVisible()
    
})