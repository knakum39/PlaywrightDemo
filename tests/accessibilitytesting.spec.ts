import {test,expect} from "@playwright/test";
import AxeBuilder from '@axe-core/playwright';

//Test for branch 
test('accessibility test', async({page},testInfo)=>{

    //await page.goto("https://demowebshop.tricentis.com/");
    //await page.goto("https://alpha.app.waas.sdsaz.us/dashboard/1");
    //await page.goto("https://app.pulsehealth-staging.tech");
    //Example page which follows 100% accessibility guidelines:
    await page.goto("https://www.w3.org/")

    //1) Scanning detect all types of WCAG(Word Content Accessiility Guidelines) violations.
    /* const accessibilityScanResults = await new AxeBuilder({page}).analyze();
    //console.log(accessibilityScanResults);
    console.log("Number of violations:===>", accessibilityScanResults.violations.length);

    expect(accessibilityScanResults.violations.length).toEqual(0);
    //expect(accessibilityScanResults.violations).toEqual([]); */

    //2) Scanning for the few WCAG violations with tags:
   /*  const accessibilityScanResults = await new AxeBuilder({page})
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

    await testInfo.attach('accessibility results',{
        body: JSON.stringify(accessibilityScanResults,null,2),
        contentType: 'application/json'
    });

    //console.log("Number of violations:===>", accessibilityScanResults.violations.length);
    expect(accessibilityScanResults.violations).toEqual([]); */


    //3)Scanning for the few WCAG violations with Rules:
    const accessibilityScanResults = await new AxeBuilder({page})
    .disableRules(['duplicate-id'])
    .analyze();

    await testInfo.attach('accessibility results',{
        body: JSON.stringify(accessibilityScanResults,null,2),
        contentType: 'application/json'
    });

    console.log("Number of violations:===>", accessibilityScanResults.violations.length);
    expect(accessibilityScanResults.violations).toEqual([]);
});



