/*
Keyboard methods:
insertText
down
press
type
up

await page.keyboard
*/

import { test, expect } from '@playwright/test';

test('keyboard actions', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const input1=page.locator('#input1');

//1) fous on input1
await input1.focus(); //await input1.click();

//2) provide the text input1
await page.keyboard.insertText("welcome");

//3) Ctrl + A - select the text from input1
await page.keyboard.down('Meta');
await page.keyboard.press('A');
await page.keyboard.up('Meta');

//4) Ctrl +C - copy the text from input 1
/* await page.keyboard.down('Meta');
await page.keyboard.press('C');
await page.keyboard.up('Meta'); */
//await page.keyboard.press('ControlOrMeta+C'); cross-platform
await page.keyboard.press('Meta+C');


//5 Press TAB - 2 times
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');


//6) Ctrl + V  - past the text in input2
/* await page.keyboard.down('Meta');
await page.keyboard.press('V');
await page.keyboard.up('Meta'); */
await page.keyboard.press('Meta+V');


//7) Press TAB - 2 times
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');


//8) Ctrl+V - past the text in input 3
/* await page.keyboard.down('Meta');
await page.keyboard.press('V');
await page.keyboard.up('Meta'); */
await page.keyboard.press('Meta+V');

await page.waitForTimeout(5000);

})