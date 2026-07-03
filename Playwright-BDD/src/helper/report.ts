const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "reports",
  reportPath: "./reports",
  reportName: "Playwright BDD Report",
  pageTitle: "BookCart App test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
device: "Mythily - Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },      ],    },  });