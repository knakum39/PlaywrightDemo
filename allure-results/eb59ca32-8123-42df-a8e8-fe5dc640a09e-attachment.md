# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibilitytesting.spec.ts >> accessibility test
- Location: tests/accessibilitytesting.spec.ts:4:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Invalid url: "app.pulsehealth-staging.tech"
Call log:
  - navigating to "app.pulsehealth-staging.tech", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test('accessibility test', async({page})=>{
  5  | 
  6  |     //await page.goto("https://demowebshop.tricentis.com/");
  7  |     //await page.goto("https://alpha.app.waas.sdsaz.us/dashboard/1");
> 8  |     await page.goto("app.pulsehealth-staging.tech");
     |                ^ Error: page.goto: Protocol error (Page.navigate): Invalid url: "app.pulsehealth-staging.tech"
  9  | 
  10 |     const accessibilityScanResults = await new AxeBuilder({page}).analyze();
  11 | 
  12 |     console.log(accessibilityScanResults);
  13 | 
  14 | })
```