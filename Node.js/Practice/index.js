const { odd, even } = require("./var");
const checkNumber = require("./func");

function checkString(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkString("kyuchan"));

console.log(__filename);
console.log(__dirname);
