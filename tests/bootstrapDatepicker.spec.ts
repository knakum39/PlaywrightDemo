import { test, expect } from '@playwright/test';

//Need to modify this script as currently one popup shows when this webpage is launched.
//So we need to handle this popup.

test('Booking.com Date Picker Test - Check-in and Check-out', async ({ page }) => {
  await page.goto('https://www.booking.com/');

  // Click on the date picker field to open calendar
  await page.getByTestId('searchbox-dates-container').click();

  const calendar = page.getByTestId('searchbox-datepicker-calendar');

  // Updated month heading locator based on the current Booking.com DOM
  const monthYearHeadings = calendar.locator(
    'h3[id^="bui-calendar-month-"]'
  );

  // Updated date table locator
  const calendarTables = calendar.locator('table[role="grid"]');

  const nextMonthButton = calendar.getByRole('button', {
    name: 'Next month',
  });

  // ==== Check-in Date Selection ====
  // Use future dates because June and July 2026 have already passed.
  let checkinYear: string = '2026';
  let checkinMonth: string = 'September';
  let checkinDay: string = '20';

  // Navigate through the calendar to find the desired check-in month and year
  while (true) {
    const checkInMonthYear = (
      await monthYearHeadings.nth(0).innerText()
    ).trim();

    console.log(`Currently displayed check-in month: ${checkInMonthYear}`);

    const [currentMonth, currentYear] =
      checkInMonthYear.split(/\s+/);

    if (
      currentMonth === checkinMonth &&
      currentYear === checkinYear
    ) {
      break;
    } else {
      const previousMonthYear = checkInMonthYear;

      await nextMonthButton.click();

      // Wait until the month heading changes
      await expect(monthYearHeadings.nth(0)).not.toHaveText(
        previousMonthYear
      );
    }
  }

  // Select the specific check-in date
  let allDates = await calendarTables
    .nth(0)
    .locator('tbody td')
    .all();

  let checkinDateSelected = false;

  for (const date of allDates) {
    const dateText = (await date.innerText()).trim();

    if (dateText === checkinDay) {
      await date.click();
      checkinDateSelected = true;
      break;
    }
  }

  // Assertion to confirm check-in date was selected
  expect(checkinDateSelected).toBeTruthy();

  // ==== Check-out Date Selection ====
  let checkoutYear: string = '2026';
  let checkoutMonth: string = 'October';
  let checkoutDay: string = '25';

  // Navigate to the required check-out month and year
  while (true) {
    const checkOutMonthYear = (
      await monthYearHeadings.nth(1).innerText()
    ).trim();

    console.log(`Currently displayed check-out month: ${checkOutMonthYear}`);

    const [currentMonth, currentYear] =
      checkOutMonthYear.split(/\s+/);

    if (
      currentMonth === checkoutMonth &&
      currentYear === checkoutYear
    ) {
      break;
    } else {
      const previousMonthYear = checkOutMonthYear;

      await nextMonthButton.click();

      // Wait until the second month heading changes
      await expect(monthYearHeadings.nth(1)).not.toHaveText(
        previousMonthYear
      );
    }
  }

  // Select the specific check-out date
  allDates = await calendarTables
    .nth(1)
    .locator('tbody td')
    .all();

  let checkoutDateSelected = false;

  for (const date of allDates) {
    const dateText = (await date.innerText()).trim();

    if (dateText === checkoutDay) {
      await date.click();
      checkoutDateSelected = true;
      break;
    }
  }

  // Assertion to confirm check-out date was selected
  expect(checkoutDateSelected).toBeTruthy();

  // Optional: visually observe the selected dates
  await page.waitForTimeout(5000);
});