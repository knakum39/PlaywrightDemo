# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibilitytesting.spec.ts >> accessibility test
- Location: tests/accessibilitytesting.spec.ts:4:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: 0
Received: 4
```

# Page snapshot

```yaml
- main [ref=e4]:
  - generic [ref=e7]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - img [ref=e11]
        - img [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - heading "Login" [level=1] [ref=e15]
          - heading "Use your credentials to log in or sign up below" [level=6] [ref=e16]
        - generic [ref=e18]:
          - generic [ref=e19]: Your email
          - generic [ref=e25]:
            - group
            - textbox [ref=e27]
          - generic [ref=e28]: Your password
          - generic [ref=e34]:
            - group
            - textbox [ref=e36]
          - button "Log in" [ref=e37] [cursor=pointer]:
            - generic [ref=e38]: Log in
        - button "Forgot password?" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: Forgot password?
      - generic [ref=e41]: © Copyright 2015-2026 Pulse Health - All Rights Reserved
    - generic [ref=e47]:
      - heading "Did you know?" [level=4] [ref=e48]
      - heading "Pulse Engagement Cloud can increase scripts written by up to 15%" [level=6] [ref=e49]
      - heading "Reach, engage, and understand" [level=6] [ref=e52]
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
  8  |     await page.goto("https://app.pulsehealth-staging.tech");
  9  | 
  10 |     //1) Scanning detect all types of WCAG violations.
  11 |     const accessibilityScanResults = await new AxeBuilder({page}).analyze();
  12 |     //console.log(accessibilityScanResults);
  13 |     console.log("Number of violations:===>", accessibilityScanResults.violations.length);
  14 | 
> 15 |    expect(accessibilityScanResults.violations.length).toEqual(0);
     |                                                       ^ Error: expect(received).toEqual(expected) // deep equality
  16 |     //expect(accessibilityScanResults.violations).toEqual([]);
  17 | 
  18 | })
```