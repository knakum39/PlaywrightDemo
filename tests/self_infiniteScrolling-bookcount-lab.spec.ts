import { test, expect } from '@playwright/test';

test('Find total number of books in the page', async ({ page }) => {
    await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

    test.slow();

    let previousHeight = 0;

    while(true){
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight); //JS statement
    });

    // Wait for new content to load
    await page.waitForTimeout(2000);

    const currentHeight = await page.evaluate(()=>{
        return document.body.scrollHeight; //JS statement
    });
   console.log("==============================")
    console.log(`Previous height: ${previousHeight}`);
    console.log(`Current height: ${currentHeight}`);

    // Check if end of page is reached

    if(currentHeight === previousHeight){
        break;
    }
    else{
      previousHeight = currentHeight;
  }

    }
      console.log('*********  Reached end of page  ********');


        // Count books after scrolling finishes
    const books = page.locator("#divItemCard h3");
    const totalBooks = await books.count();
    console.log(`Total Books = ${totalBooks}`);
    expect(totalBooks).toBe(186);
})