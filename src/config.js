// Application configuration
// This file is intentionally simple — good candidate for merge conflict demos

const config = {
  appName: "Git Standards Demo",
  version: "2.0.0",
  port: 8080,
  environment: "development",
  featureFlags: {
    darkMode: true,
    newDashboard: false,
  },
};

module.exports = config;
