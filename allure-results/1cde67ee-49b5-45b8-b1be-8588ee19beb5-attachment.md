# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tagging.spec.ts >> Check top recommendations
- Location: tests\tagging.spec.ts:49:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('text=\'Our Top Recommendations.\'')
Expected: "Our Top Recommendations."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('text=\'Our Top Recommendations.\'')

```

```yaml
- banner
- navigation "skip to main content":
  - button "skip to main content": Skip Navigation
- navigation "Main navigation":
  - link "Google Store home":
    - /url: /in/?hl=en-IN
    - img
  - list:
    - listitem:
      - link "Phones":
        - /url: /in/category/phones?hl=en-IN
      - button "Expand tray":
        - img
    - listitem:
      - link "Watches & Trackers":
        - /url: /in/category/watches_trackers?hl=en-IN
      - button "Expand tray":
        - img
    - listitem:
      - link "Earbuds":
        - /url: /in/category/earbuds?hl=en-IN
      - button "Expand tray":
        - img
    - listitem:
      - link "Accessories":
        - /url: /in/collection/accessories_wall?hl=en-IN
      - button "Expand tray":
        - img
    - listitem:
      - link "Offers":
        - /url: /in/collection/offers?hl=en-IN
      - button "Expand tray":
        - img
    - listitem:
      - link "Support":
        - /url: /in/magazine/support?hl=en-IN
      - button "Expand tray":
        - img
  - button "Search the Google store":
    - img
  - link "Go to empty shopping cart":
    - /url: /in/cart?hl=en-IN
    - img
    - note "Go to empty shopping cart"
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://store.google.com/in/?utm_source%3Dhp_header%26utm_medium%3Dgoogle_ooo%26utm_campaign%3DGS100042%26hl%3Den-IN&followup=https://store.google.com/in/?utm_source%3Dhp_header%26utm_medium%3Dgoogle_ooo%26utm_campaign%3DGS100042%26hl%3Den-IN&hl=en-IN&ec=GAZA-wQ
- main:
  - heading "Google Store for Google Made Devices & Accessories" [level=1]
  - heading "Shubman Gill asked more of his phone and switched to Pixel." [level=2]
  - text: Snap your best pics with the help of Camera Coach on Google Pixel 10. Upgrade your game with our award winning camera and advanced AI features.
  - link "Shop Pixel 10":
    - /url: /product/pixel_10
    - text: Learn more
  - img "A hand holding a blue Google Pixel 10 smartphone showing a camera interface on screen. The screen displays a man in an orange tracksuit holding a trophy against a yellow locker room background, with a 'Take the photo' prompt. The background of the image features blurred yellow sports lockers with text reading 'Google Pixel 10 with Camera Coach'"
  - heading "Popular on the Google Store." [level=2]
  - region "Horizontal navigation ribbon":
    - list:
      - listitem: Pixel 10 Pro and Pro XL
      - listitem: Pixel 10 Pro Fold
      - listitem: Pixel 10
      - listitem: New Pixel 10a
      - listitem: Pixel Watch 4
      - listitem: Pixel Buds 2a
      - listitem: Pixel Buds Pro 2
      - listitem:
        - link "Pixel cases":
          - /url: /in/collection/accessories_wall?hl=en-IN
        - text: Pixel cases
  - scrollbar "Horizontal navigation ribbon"
  - button "Next slide"
  - heading "Google Pixel 10 Pro and Pro XL" [level=2]
  - text: Meet the new status pro.
  - link "Buy Pixel 10 Pro":
    - /url: /in/product/pixel_10_pro?hl=en-IN
    - text: Learn more
  - img "The back side of a Pixel 10 Pro in Moonstone colour."
  - heading "Google Pixel 10" [level=2]
  - text: Do spectacular things, every day.
  - link "Buy Pixel 10":
    - /url: /in/product/pixel_10?hl=en-IN
    - text: Learn more
  - img "The back side of a Pixel 10 in Indigo colour."
  - heading "Google Pixel 10a" [level=2]
  - text: The real deal.
  - link "Buy Pixel 10a":
    - /url: /in/product/pixel_10a?hl=en-IN
    - text: Learn more
  - img "Google Pixel 10a in Lavender colour"
  - img "A slightly opened Pixel 10 Pro Fold in Moonstone colour."
  - heading "Google Pixel 10 Pro Fold" [level=2]
  - text: Unfold extraordinary.
  - link "Learn more about Real Tone":
    - /url: /in/product/pixel_10_pro_fold?hl=en-IN
    - text: Learn more
  - heading "Google Pixel Watch 4" [level=2]
  - text: Precision crafted. Performance ready.
  - link "Buy Pixel Watch 4":
    - /url: /in/product/pixel_watch_4?hl=en-IN
    - text: Learn more
  - img "A profile of Google Pixel Watch 4 featuring its domed glass display."
  - heading "Pixel Buds Pro 2" [level=2]
  - text: Light ears ahead.
  - link "Buy Pixel Buds Pro 2":
    - /url: /in/product/pixel_buds_pro_2?hl=en-IN
    - text: Learn more
  - img "A pair of Pixel Buds Pro 2 in Moonstone colour."
  - heading "Google Pixel Buds 2a" [level=2]
  - text: Unbelievable comfort. Unreal sound.
  - link "Buy Pixel Buds 2a":
    - /url: /in/product/pixel_buds_2a?hl=en-IN
    - text: Learn more
  - img "A pair of Pixel Buds 2a in Iris colour."
  - heading "Perks of buying from Google Store." [level=2]
  - text: Shop with assurance and convenience when you buy directly from us, and enjoy savings and offers exclusive to Google Store.
  - region:
    - list:
      - listitem:
        - heading "Upgrade your Pixel phone for less with exchange." [level=2]
        - text: Upgrade to the latest Pixel phone and get money back when you exchange your old phone. Plus, receive an exchange bonus when you purchase select Pixel models.
        - link "Learn more":
          - /url: /in/magazine/trade_in?hl=en-IN
      - listitem
      - listitem:
        - heading "Discover the most affordable ways to own a Pixel." [level=2]
        - text: Unlock savings with exchange offers and no-cost EMI when you shop with us. Save more with instant cashback with participating banks.
        - link "Learn more":
          - /url: /in/magazine/installments?hl=en-IN
      - listitem:
        - heading "Earn Google Store credit when you buy with us." [level=2]
        - text: Get rewarded with Google Store credit when you purchase during eligible promotions and use the credit to save on your next order with us. Discover all the ways to save with our latest deals.
        - link "Learn more":
          - /url: /in/collection/offers?hl=en-IN
  - scrollbar "Upgrade your Pixel phone for less with exchange. Upgrade to the latest Pixel phone and get money back when you exchange your old phone. Plus, receive an exchange bonus when you purchase select Pixel models. Learn more Discover the most affordable ways to own a Pixel. Unlock savings with exchange offers and no-cost EMI when you shop with us. Save more with instant cashback with participating banks. Learn more Earn Google Store credit when you buy with us. Get rewarded with Google Store credit when you purchase during eligible promotions and use the credit to save on your next order with us. Discover all the ways to save with our latest deals. Learn more"
  - region:
    - list:
      - listitem:
        - text: Answers and support at your fingertips.
        - link "Learn more":
          - /url: /in/magazine/support?hl=en-IN
      - listitem:
        - text: Free delivery.
        - superscript
        - link "Learn about our easy returns that are free of charge.":
          - /url: https://support.google.com/store/answer/12436460
          - text: Learn more
  - heading "Expert hands to keep your Pixel at its best." [level=2]
  - text: We’ve got you covered with expert support when you need it. Pixel phones, earbuds, and watches receive professional care at every step, from fast troubleshooting to certified repairs.
  - region:
    - list:
      - listitem:
        - heading "Expert support, wherever you are." [level=2]
        - text: With 21 Pixel walk-in centres across the country and convenient pick-up options, expert support is always within reach.
        - link "Find a centre near you":
          - /url: https://support.google.com/pixelphone/answer/7173456?hl=en-IN&sjid=14436503296463664396-NA
      - listitem
      - listitem:
        - heading "We're here for you. Even on Sundays." [level=2]
        - text: Our 4 Google Exclusive walk-in centres in Delhi, Mumbai, Hyderabad and Bangalore are open 7 days a week (excluding public holidays).
        - link "View locations":
          - /url: https://support.google.com/pixelphone/answer/7173456?hl=en-IN&sjid=14436503296463664396-NA
  - region:
    - list:
      - listitem:
        - heading "Built-in protection for your privacy." [level=2]
        - text: Pixel Repair Mode locks your personal data—no wiping or restoring required. It gives you total peace of mind while your phone is serviced by our experts.
        - link "learn more about the built in protection for your privacy":
          - /url: https://support.google.com/pixelphone/answer/14266732?hl=en
          - text: Learn more
      - listitem:
        - heading "Back to your day in a beat." [level=2]
        - text: At least 9 in 10 phones are repaired under four hours
        - superscript: §
        - text: at our walk-in centres. Simply hand in your device before 2 PM to get back to your day, fast.
      - listitem:
        - heading "Genuine parts, purely Pixel." [level=2]
        - text: We use 100% genuine Google hardware parts for eligible repairs to ensure your Pixel continues to perform as you expect.
  - superscript: §
  - text: Based on data from Jan 2026 for common repairs at participating walk-in service centres when the device is submitted before 2 PM.
  - heading "Shop popular categories." [level=2]
  - link "Phones":
    - /url: /in/category/phones?hl=en-IN
  - link "Watches & Trackers":
    - /url: /in/category/watches_trackers?hl=en-IN
  - link "Earbuds":
    - /url: /in/category/earbuds?hl=en-IN
  - heading "Discover the world of Pixel." [level=2]
  - img "An image showing \"Pixel Drop New Features\" announcement with Pixel Buds Pro, Pixel 10 Pro, and Pixel Watch with colorful sprinkles."
  - heading "Continuous updates. Constant delight." [level=2]
  - text: Every Pixel Drop brings you new and improved features, including the latest AI innovations.
  - superscript:
    - link "footnote *":
      - /url: "#footnote:pixel-drop"
      - superscript: "*"
  - link "Learn more about Pixel Drops.":
    - /url: /in/magazine/pixel_drop?hl=en-IN
    - text: Explore
  - heading "Get news, offers, cart reminders, personalised emails, and surveys from the Google Store." [level=2]
  - button "Sign in and sign up"
  - list:
    - listitem:
      - superscript: "*"
      - text: Your Pixel will generally receive Pixel Drops during the applicable Android update and support periods for the phone. See
      - link "g.co/pixel/updates":
        - /url: https://g.co/pixel/updates
      - text: for details. Availability of some Pixel Drops may vary by phone and device model.
    - listitem:
      - superscript: †
      - text: All orders that are delivered free of charge use the lowest-cost option unless otherwise noted.
  - region "Footnotes"
- contentinfo:
  - img
  - list:
    - listitem:
      - text: Orders
      - link "EMI & Cashback":
        - /url: /in/magazine/installments?hl=en-IN
      - link "Exchange program":
        - /url: /in/magazine/trade_in?hl=en-IN
      - link "Payment methods":
        - /url: https://support.google.com/store/answer/6160267
      - link "Shipping options":
        - /url: https://support.google.com/store/answer/12436460
      - link "Managing an order":
        - /url: https://support.google.com/store/answer/6380753
      - link "Country availability":
        - /url: https://support.google.com/store/answer/2462844
  - list:
    - listitem:
      - text: Support
      - link "Help Centre":
        - /url: https://support.google.com/store/
      - link "Repairs":
        - /url: /in/magazine/repaircenter?hl=en-IN
      - link "Pixel Walk-in Centres":
        - /url: https://support.google.com/pixelphone/answer/7173456
      - link "Disability Support":
        - /url: https://support.google.com/accessibility/answer/7641084
      - link "Fitbit support":
        - /url: /in/magazine/google_fitbit?hl=en-IN
      - link "Contact Us":
        - /url: https://support.google.com/store/gethelp
      - link "Return Policy":
        - /url: https://support.google.com/store/answer/13806656
      - link "Send Feedback":
        - /url: /in/?hl=en-IN#SEND_FEEDBACK
  - list:
    - listitem:
      - text: Sustainability
      - link "Device recycling":
        - /url: https://support.google.com/store/answer/3036017
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/madebygoogle
        - img
    - listitem:
      - link "Instagram":
        - /url: https://instagram.com/madebygoogle
        - img
    - listitem:
      - link "Facebook":
        - /url: https://facebook.com/madebygoogle
        - img
    - listitem:
      - link "YouTube":
        - /url: https://youtube.com/madebygoogle
        - img
  - list:
    - listitem:
      - link "India. Choose your country or region.":
        - /url: /regionpicker
        - text: India
    - listitem:
      - link "link to Privacy":
        - /url: https://policies.google.com/privacy
        - text: Privacy
    - listitem:
      - link "link to Google Nest Commitment to Privacy":
        - /url: https://safety.google/intl/en_GB/products/nest/
        - text: Google Nest Commitment to Privacy
    - listitem:
      - link "link to Sales Terms":
        - /url: https://store.google.com/intl/en-GB_in/about/device-terms.html
        - text: Sales Terms
    - listitem:
      - link "link to Terms of Service":
        - /url: https://www.google.com/intl/en-GB_in/policies/terms/
        - text: Terms of Service
```

# Test source

```ts
  1  | /*
  2  | 1. Run all sanity tests:
  3  |     npx playwright test tests/tagging.spec.ts --grep "@sanity" 
  4  | 
  5  | 
  6  | 2. Run all regression tests:
  7  |     npx playwright test tests/tagging.spec.ts --grep "@regression"
  8  | 
  9  | 3. Run tests which are belongs to both sanity & regression
  10 | 
  11 | npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"
  12 | 
  13 | (?=.*@sanity)
  14 | (?=.*@regression)
  15 | 
  16 | (?=.*@sanity)(?=.*@regression)
  17 | 
  18 | 4. Run tests belongs to either sanity or regression.
  19 |     npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"
  20 | 
  21 | 5. Run sanity tests which are not belongs to regression (special case)
  22 |     npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
  23 |     
  24 | 
  25 | 
  26 | */
  27 | import { test, expect } from '@playwright/test';
  28 | 
  29 | /*
  30 | test('@sanity @regresion Check title of the home page', async ({ page }) => {
  31 |     await page.goto('https://www.google.com/');
  32 |     await expect(page).toHaveTitle('Google');
  33 | });
  34 | */
  35 | 
  36 | test('Check title of the home page',{tag:'@sanity'}, async ({ page }) => {
  37 |     await page.goto('https://www.google.com/');
  38 |     await expect(page).toHaveTitle('Google');
  39 | });
  40 | 
  41 | 
  42 | test('Check navigation to Store page',{tag:'@regression'}, async ({ page }) => {
  43 |     await page.goto('https://www.google.com/');
  44 |     await page.locator("text='Store'").click();
  45 |     await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
  46 |     });
  47 | 
  48 | 
  49 | test('Check top recommendations',{tag:['@sanity','@regression']}, async ({ page }) => {
  50 |     await page.goto('https://www.google.com/');
  51 |     await page.locator("text='Store'").click();
> 52 |     await expect(page.locator("text='Our Top Recommendations.'")).toHaveText('Our Top Recommendations.');
     |                                                                   ^ Error: expect(locator).toHaveText(expected) failed
  53 | });
  54 | 
  55 | 
  56 | 
```