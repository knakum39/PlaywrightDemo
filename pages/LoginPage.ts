import {Page, Locator} from '@playwright/test'

//Page object class follows the concept of Encapsulation.
//Encapsulation means wrapping up the data and methods into one single class
//Variables and Properties that we cretaed inside of the class can't be accessible outside of the class

export class LoginPage
{

    //define variables - private readonly 
    //Locators are fixed.  so mark it as private and Readonly

    private readonly page: Page;
    private readonly loginLink:Locator;
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;

    //constructor
    //At the time of invoking login page, constructor will be called the 
    constructor(page:Page)
    {
        this.page = page;
        this.loginLink = this.page.locator('#login2');
        this.userNameInput = this.page.locator('#loginusername');
        this.passwordInput = this.page.locator('#loginpassword');
        this.loginButton = this.page.locator("button[onclick='logIn()']");
    }

    //action methods
    async clickLoginlink():Promise<void>
    {
        await this.loginLink.click();
    }

    async enterUserName(username:string):Promise<void>
    {
        await this.userNameInput.clear();
        await this.userNameInput.fill(username);
    }

     async enterPassword(password:string):Promise<void>
    {
       await this.passwordInput.clear();
       await this.passwordInput.fill(password);
    }

    async clickOnLoginButton():Promise<void>
    {
        await this.loginButton.click();
    }

    async performLogin(username:string, password:string):Promise<void>
    {
        //A method can call another method
        await this.clickLoginlink();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickOnLoginButton();
    }

}