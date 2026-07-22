import {test,expect,Locator} from "@playwright/test";

test('Scenario 1: CPU load of Chrome should match yellow label', async ({ page }) => {
      await page.goto('https://testautomationpractice.blogspot.com/');

      //Select table
      const table = page.locator("#taskTable tbody");
      await expect(table).toBeVisible();

      //Capture all rows  and count them
      const rows:Locator[] = await table.locator("tr").all();
      console.log("No of rows are:", rows.length);
      await expect(rows.length).toBe(4);

      //Read data from all rows 

      let cpuLoad ='';
      for(const row of rows)
      {
        const processName:string = await row.locator("td").nth(0).innerText();//Read first column data
        if(processName === "Chrome")
        {
            cpuLoad = await row.locator("td",{hasText:'%'}).innerText();
            console.log("CPU Load of Chrome:",cpuLoad );
            break;
        }
      }

      let compareCPU:string = await page.locator("#displayValues .chrome-cpu").innerText();
      console.log("compareCPU Value is", compareCPU);

      if(compareCPU.includes(cpuLoad))
      {
        console.log("Both are same")
      }
      else
      {
        console.log("Both have different vlaues")
      }
      expect(compareCPU).toContain(cpuLoad);

})

test.only('Scenario 2: CPU load of Chrome should match yellow label', async ({ page }) => {
      await page.goto('https://testautomationpractice.blogspot.com/');

      //Select table
      const table = page.locator("#taskTable tbody");
      await expect(table).toBeVisible();

      //Capture all rows  and count them
      const rows:Locator[] = await table.locator("tr").all();
      console.log("No of rows are:", rows.length);
      await expect(rows.length).toBe(4);

      //Read data from all rows 

      let memoryUsage ='';
      for(const row of rows)
      {
        const processName:string = await row.locator("td").nth(0).innerText();//Read first column data
        if(processName === "Firefox")
        {
            //memorySize = await row.locator("td",{hasText:'MB'}).innerText();
            const memoryUsage = await row.locator("td", { hasText: /MB$/ }).innerText();
            console.log("Memory Size of Firefox process:",memoryUsage );
            break;
        }
      }

      let compareMemorySize:string = await page.locator("strong.firefox-memory").innerText();
      console.log("compareCPU Value is", compareMemorySize);

      if(compareMemorySize.includes(memoryUsage))
      {memoryUsage
        console.log("Both have same memoryusage.")
      }
      else
      {
        console.log("Both have different values")
      }
      expect(compareMemorySize).toContain(memoryUsage);

})

test('Scenario 3: Network speed of Chrome should match orange label', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows: Locator[] = await page.locator("table#taskTable tbody tr").all();

  for (const row of rows) {
    const processName = await row.locator('td').nth(0).innerText();
    if (processName === 'Chrome') {
      const networkSpeed = await row.locator("td",{hasText : 'Mbps'}).innerText();
      const expectedNetwork = await page.locator('strong.chrome-network').innerText();
      expect(networkSpeed).toBe(expectedNetwork);
      break;
    }
  }
});

test('Scenario 4: Disk space of Firefox should match violet label', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const rows: Locator[] = await page.locator("table#taskTable tbody tr").all();

  for (const row of rows) {
    const processName = await row.locator('td').nth(0).innerText();
    if (processName === 'Firefox') {
      const diskSpace = await row.locator("td", {hasText : 'MB/s'}).innerText();
      const expectedDisk = await page.locator('strong.firefox-disk').innerText();
      expect(diskSpace).toBe(expectedDisk);
      break;
    }
  }
});