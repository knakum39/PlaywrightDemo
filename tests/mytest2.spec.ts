import {test,expect} from "@playwright/test";

test("Verify page title",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    
    let url:string=  await page.url()
     console.log('URL:', url)
        await expect(page).toHaveURL(/demowebshop/);
}
)