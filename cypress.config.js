const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypressmochawesomereporter',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  retries: {
      runMode: 2,
      openMode: 0,
    },
  //video : true,
})