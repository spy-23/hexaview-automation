module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    reporters: [
      "default",
      ["jest-html-reporter", {
        "pageTitle": "Heroku Login Test Report",
        "outputPath": "./test-report.html",
        "includeFailureMsg": true
      }]
    ]
  };