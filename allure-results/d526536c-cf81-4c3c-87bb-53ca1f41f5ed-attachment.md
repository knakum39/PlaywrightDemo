# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibilitytesting.spec.ts >> accessibility test
- Location: tests/accessibilitytesting.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://alpha.app.waas.sdsaz.us/dashboard/1", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test('accessibility test', async({page})=>{
  5  | 
  6  |     //await page.goto("https://demowebshop.tricentis.com/");
> 7  | await page.goto("https://alpha.app.waas.sdsaz.us/dashboard/1");
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  | 
  9  |     const accessibilityScanResults = await new AxeBuilder({page}).analyze();
  10 | 
  11 |     console.log(accessibilityScanResults);
  12 | 
  13 | })
```