import { test, expect, Locator } from '@playwright/test';

test("Comparing methods", async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    //Locator is a Interface, it's not a fixture like Page,test etc
    //We can import so many things... class, function, interface, fixtures
    const products:Locator =page.locator(".product-title");

    //Locator type element => to get the text of particular product only traditional for loop is possible here..
    //Array type element => to get the text content, for of, for in loop is used..

     //1) innerText() Vs textContent()

   //console.log(await products.nth(1).innerText()); //14.1-inch Laptop
   //console.log(await products.nth(1).textContent());
    /*
    const count=await products.count();

    for(let i=0;i<count;i++)
    {
        //const productName :string=await products.nth(i).innerText(); // Extracts plain text. Eliminates Whitespace and line breaks
        //console.log(productName);

        //const productName: string | null =await products.nth(i).textContent();  // Extracts text including hidden elements. Includes Extra whitespaces, line breaks, etc. 
        //console.log(productName);

        const productName: string | null =await products.nth(i).textContent();  // Extracts text including hidden elements. Includes Extra whitespaces, line breaks, etc. 
        console.log(productName?.trim());

    }
 */

//If we want to extract all the text content without using looping statements:
//We will use allInnerText() or allTextContent()
//2)  allInnerText() Vs allTextContent()

/*
console.log("**** Comparing allInnerText() Vs allTextContent() *****")

//const productNames: string[]=await products.allInnerTexts()
//console.log("Product Names captured by allInnerText(): ", productNames)

const productNames: string[]=await products.allTextContents()
console.log("Product Names captured by allTextContent(): ", productNames)

//Here to trim the data, We need to use Map concept
const productNamesTrimmed:string[]=productNames.map(text=>text.trim());
console.log("Product Names after trimmed: ", productNamesTrimmed)

*/

//3) all() - converts Locator----> Locator[] (Converts Locator into a String type of array)
//Returns array of locators
//Returns array of locators (Stores locators of products)/Converts Locator to array of locators (for iteration)

const productsLocators:Locator[]=await products.all();
console.log(productsLocators);

//console.log(await productsLocators[1].innerText());

//for of loop
/*for(let productloc of productsLocators)
{
    console.log(await productloc.innerText());

}
*/

//for in loop

for(let i in productsLocators)
    {
        console.log(await productsLocators[i].innerText());
    }


})