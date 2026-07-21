import {test,expect} from "@playwright/test";

test("Mouse hover", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const pointme = page.locator(".dropbtn");
    await pointme.hover();

    const laptops = page.locator(".dropdown-content a:nth-child(2)");
    await laptops.hover();

    await page.waitForTimeout(5000);

})

test("Right Click", async({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = page.locator("span.context-menu-one");
    await button.click({button:'right'});

    await page.waitForTimeout(5000);

})

test("Double Click", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const btncopy = page.locator("button[ondblclick='myFunction1()']");
    await btncopy.dblclick();

    const field2 = page.locator("#field2");
    expect(field2).toHaveText("Hello World!");

    await page.waitForTimeout(5000);

})

test.only('Drag and drop',async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

    const rome=page.locator("#box6");
    const italy=page.locator("#box106");

    //Appraoch 1:  mouse hover and drag manually

    await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();

    //Appraoch 2:  mouse hover and drag manually

    const washington=page.locator('#box3');
    const usa=page.locator('#box103');

    await washington.dragTo(usa); // this wil perform drag and drop action
    await page.waitForTimeout(5000);
})

