// Utility functions

function greet(name) {
  return `Hey ${name}! Ready to build something awesome?`;
}

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

module.exports = { greet, formatDate, capitalize, slugify };
