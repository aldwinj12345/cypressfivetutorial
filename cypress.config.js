const { defineConfig } = require('cypress')
//const fs = require('fs')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // on('after:spec', (spec, results) => {
      //   if (results && results.video) {
      //     // Do we have failures for any retry attempts?
      //     const failures = results.tests.some((test) =>
      //       test.attempts.some((attempt) => attempt.state === 'failed')
      //     )
      //     if (!failures) {
      //       // delete the video if the spec passed and no tests retried
      //       fs.unlinkSync(results.video)
      //     }
      //   }
      // })
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
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