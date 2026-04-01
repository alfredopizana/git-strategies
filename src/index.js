const config = require("./config");
const { greet, formatDate } = require("./utils");

function main() {
  console.log(`Starting ${config.appName} v${config.version}`);
  console.log(greet("Team"));
  console.log(`Date: ${formatDate(new Date())}`);
}

main();
