import { test, expect } from '@playwright/test';

// 1. Define the class in the global/file scope
class Employee {
  empId: number;
  empName: string;

  constructor(empId: number, empName: string) {
    this.empId = empId;
    this.empName = empName;
  }

  display(): void {
    console.log(`Employee ID: ${this.empId}, Employee Name: ${this.empName}`);
  }
}

// 2. Playwright test block (currently empty)
test('Empty test', async ({ page }) => {
  // This test is intentionally left empty
});

// 3. Instantiate and use the class
const e = new Employee(101, "John Doe");
e.display();
console.log(e.empId);