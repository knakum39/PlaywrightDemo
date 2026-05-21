# PlaywrightDemo

An end-to-end web automation testing framework built using **Playwright** and **TypeScript**. This repository serves as a comprehensive implementation of modern test automation practices, covering UI testing, API validation, and robust framework architecture patterns.

The test suites and architecture implemented here are structurally aligned with the comprehensive automation methodologies detailed in Pavan Kumar's Playwright curriculum.

---

## 🛠️ Tech Stack & Tools

*   **Automation Framework:** Playwright (Web-first assertions, auto-waiting, and multi-browser execution)
*   **Language:** TypeScript (Static typing, enhanced IDE support, and robust code maintainability)
*   **Design Pattern:** Page Object Model (POM) for clean separation of test logic and UI locators
*   **Test Runner:** Playwright Built-in Test Runner
*   **Reporting:** HTML Reports, Allure Reports (Optional), and Line/List Reporters

---

## 🚀 Key Features Implemented

*   **Robust Synchronization:** Eliminates flaky tests by utilizing Playwright's native auto-wait mechanisms and explicit smart waits.
*   **Data-Driven Testing (DDT):** Parameterized testing using external JSON/CSV test data files.
*   **Multi-Browser & Parallel Execution:** Configured to run seamlessly across Chromium, Firefox, and WebKit simultaneously or in parallel.
*   **State Preservation:** Efficient handling of authentication states (session storage bypasses repeated logins).
*   **CI/CD Ready:** Standardized script definitions optimized for headless execution within pipeline workflows (e.g., GitHub Actions).

---

## 📂 Project Structure

```text
PlaywrightDemo/
├── .github/                  # CI/CD Pipeline workflows (e.g., GitHub Actions)
├── config/                   # Environment or global configuration files
├── page-objects/             # Page Object Model (POM) classes representing web pages
│   ├── LoginPage.ts
│   └── DashboardPage.ts
├── tests/                    # Core test suites grouped by module
│   ├── login.spec.ts
│   └── endToEndOrder.spec.ts
├── test-data/                # Test data files (JSON, CSV, etc.)
│   └── userCredentials.json
├── playwright.config.ts      # Global Playwright configuration file
├── package.json              # Project dependencies and script definitions
└── README.md                 # Project documentation
