import {test,expect} from "@playwright/test";

import { LoginPage } from "../pages/LoginPage"; 
import { HomePage } from "../pages/HomePage"; 
import { CartPage } from "../pages/CartPage"; 

test('User can login, add a product to the cart', async ({page})=>{
    await page.goto("https://demoblaze.com/index.html");

    //Login Page
    const loginPage = new LoginPage(page);
/*     loginPage.clickLoginlink();
    await loginPage.enterUserName("vanimistry");
    await loginPage.enterPassword("Login12*");
    await loginPage.clickOnLoginButton(); */
   await loginPage.performLogin("vanimistry","Login12*");

    //Home Page
    const homePage = new HomePage(page);

    await homePage.addProductToCart("Samsung galaxy s6");
    await page.waitForTimeout(2000);
    await homePage.gotoCart();
     await page.waitForTimeout(2000);

    //Cart Page
    const cartPage = new CartPage(page);
    const isProductInCart = await cartPage.checkProductInCart("Samsung galaxy s6");
    expect(isProductInCart).toBe(true);

})