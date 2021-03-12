require("colors");
module.exports = (message) =>
  console.log(`[$] Error(🤖): ${message}`.red.underline.bold);
