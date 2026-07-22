import { test, expect,Locator } from '@playwright/test';

test("Verify Chrome CPU load in dynamic table", async({page})=>{

await page.goto("https://practice.expandtesting.com/dynamic-table");
const table = page.locator("table.table tbody");
await expect(table).toBeVisible();

//Select all the rows, then find number of rows
const rows:Locator[] = await table.locator("tr").all();
console.log("No of rows in the table:", rows.length);
expect(rows).toHaveLength(4);

//Step 1: For Chrome process get value of CPU load.
// Read each row to check Chrome presence

let cpuLoad='';

for(const row of rows)
{
    const processName = await row.locator("td").nth(0).innerText();//Will locate first column
    if(processName === "Chrome")
    {
        cpuLoad = await row.locator("td",{hasText:'%'}).innerText();
        //or cpuLoad=await row.locator('td:has-text("%")').innerText();
         console.log("CPU Load of Chrome:",cpuLoad ); //2.9%
        break;
    }
}

//Step2: Compare it with value in the yellow label.
let yellowboxtext: string=await page.locator("#chrome-cpu").innerText();
console.log("Chrome CPU load from yellow box:",yellowboxtext );

if(yellowboxtext.includes(cpuLoad))
{
    console.log("CPU load of Chrome is equal.");
}else{
    console.log("CPU load of Chrome is Not equal.");
}

expect(yellowboxtext).toContain(cpuLoad);

await page.waitForTimeout(5000);

})