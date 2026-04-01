// Utility functions
// Good file for conflict demo — multiple people might edit this

function greet(name) {
  return `Hello, ${name}! Welcome to the project.`;
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { greet, formatDate, capitalize };
