import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',

// ↙️ Updated this line to point to your actual subfolder
  //testDir: './PlaywrightDemo/tests', 

  /* Run tests in files in parallel */
  fullyParallel: true,
  //If the above line is commented, test will run in Serial execution
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers:3,
  //For serial execution only one 1 worker is needed
  //For parallel execution, if 1 worker defined here, it will execute in serial mode only.
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
/*   reporter: [ ['html',{open:'always',outputFolder:'html-report'}],
              //['list'],
             // ['line'],
             // ['dot'],
              //['junit',{outputFile: 'results.xml'}],
              //['json',{outputFile: 'results.json'}],
              ['allure-playwright'],
            ], */
  reporter: "allure-playwright",
  //reporter: './my-custom-reporter.ts',
  //reporter: [ ['html',{open: 'never'}]]
  //reporter: [ ['html',{open: 'on-failure'}]]

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
    trace: 'off',
    screenshot:'only-on-failure', //Capture the screenshot by Krishna
    video:'retain-on-failure', //Capture the video by Krishna
  },

  /* Configure projects for major browsers */
  projects: [
    
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: true, --To execute parallel/serial at browser level
    },


    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

   /* {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
