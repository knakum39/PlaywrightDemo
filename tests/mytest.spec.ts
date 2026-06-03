import {test,expect} from "@playwright/test";

//Syntax:
/*
test("title",()=>{

//step1
//step2
//step3
    
})

*/

//fixture - global variable  : page, browser


test("Verify page title",async ({page})=>{
        await page.goto('https://demowebshop.tricentis.com/')

       let title:string=  await page.title()
         console.log('Title:', title)
         //the above two steps are optional , only use when want to see output on the console
         await expect(page).toHaveTitle('Demo Web Shop')
    })