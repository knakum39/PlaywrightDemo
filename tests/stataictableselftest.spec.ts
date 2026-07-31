import {Locator ,test, expect} from "@playwright/test";

test("Static table lab excercise", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table:Locator = await page.locator("#taskTable tbody");
    await expect(table).toBeVisible();

    const rows:Locator[] = await table.locator("tr").all();
    console.log("Number of Rows in table are:", rows.length);
    expect(rows.length).toBe(4);
    //expect(rows).toHaveLength(4);

    let diskSpace = '';
    for(let row of rows){
        const nameProcess = await row.locator("td").nth(0).innerText();
        if(nameProcess ==="Firefox"){
            diskSpace = await row.locator("td",{hasText:"MB/s"}).innerText();
            console.log("Disk Space is:", diskSpace);
            break;
        }
    }

    let diskSpacetext: string = await page.locator("#displayValues .firefox-disk").innerText();
    if(diskSpacetext.includes(diskSpace)){
        console.log("Disk space of Firefox process");
    }
    else
    {
        console.log("Disk space of Firefox process is not equal")
    }

    expect(diskSpacetext).toContain(diskSpace);

    await page.waitForTimeout(4000);


});

