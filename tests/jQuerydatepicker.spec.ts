import {test, expect, Locator, Page} from "@playwright/test";

async function selectDate(Day:string, Month:string, Year:string, page:Page, isFuture:Boolean){

while(true)
        {
    const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    
    if(currentMonth === Month && currentYear === Year){
        break;
    }

    if(isFuture){
    //Future date selection: click on next button
    await page.locator(".ui-icon-circle-triangle-e").click();
    }
    else{
    //Past date selection: click on previous button
    await page.locator(".ui-icon-circle-triangle-w").click();
    }
    }

    const allDates:Locator[] = await page.locator(".ui-datepicker-calendar td").all();

    for(const dt of allDates){
        const dateText = await dt.innerText();
        if(dateText ==Day){
            await dt.click();
        }
    }
}




test("jQuery DayePicker Test", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateInput:Locator = page.locator("#datepicker");
    expect(dateInput).toBeVisible();

    // //Using fill() method:
    // dateInput.fill("12/05/2026");
     //await page.waitForTimeout(2000);

    //Approach 2: using datePicker

    await dateInput.click();

    //Select target date:
    const year = "2026";
    const month = "September";
    const day = "16";

    selectDate(day,month,year,page,true)
    
    const expectedDate = "09/16/2026"; //MM/DD/YYYY
    await expect(dateInput).toHaveValue(expectedDate);

await page.waitForTimeout(2000);

})