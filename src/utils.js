// Utility functions
// Refactored by the team lead

function greet(name) {
  return `Welcome aboard, ${name}! Let's get started.`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US").format(date);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, maxLength = 50) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

module.exports = { greet, formatDate, capitalize, truncate };
