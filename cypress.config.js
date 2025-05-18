const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  // video: true, // Remove this line
  videoOnFailOnly: true,
});