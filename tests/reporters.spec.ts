import {test,expect} from '@playwright/test';

test.beforeEach('launching app',async({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

})

test('logotest', async ({ page }) => {
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('title test', async ({ page }) => {
    expect(await page.title()).toContain("Demo Web Shop1");
});

test('search test', async ({ page }) => {
    await page.locator('#small-searchterms').fill("laptop");  // fill teh text in search box
    await page.locator("input[value='Search']").click();      // click on the button
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});

//Step 1: Install allure-playwright using a package manager of your choice. For example:
// npm install -D allure-playwright  [Execure in project terminla]
//Step 2: Add allure-playwright as the reporter in the Playwright configuration file:
// reporter: "allure-playwright",

/* 
import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: "allure-playwright",
}); */

//Step 3: 

/* Install Allure Report separately when you want to render the generated allure-results:
follow the Allure Report 2 installation guide to use the allure CLI
or install Allure Report 3 with npm install -D allure to use npx allure */

//For Allure Report 2 (Ref: https://allurereport.org/docs/v2/install-for-nodejs/)
//Prerequisite: java must be installed
// 1. npm install -g allure-commandline (use -D instead of -g if it doesn't work)
// 2. allure --version

//For Allure Report 3
//npm install -g allure
//allure --version

//View the report
//Use Allure Report 2: Krishna=> I liked this 

//allure generate ./allure-results -o ./allure-report --clean
//allure generate ./allure-results -o ./allure-report
//allure open ./allure-report

//Or use Allure Report 3:

//npx allure generate ./allure-results
//npx allure open ./allure-report














// allure generate ./allure-results -o ./allure-report
//Go to package.json and check the allure-report version..
//allure generate ./allure-results -o ./allure-report