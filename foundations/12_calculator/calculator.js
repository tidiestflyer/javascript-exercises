let array = "";
let output = 0;

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((acc, curr) => acc +=curr, 0);
};

const multiply = function(numbers) {
  if((typeof start) == "undefined") {
    start = 1;
  }
  return numbers.reduce((acc, curr) => acc = acc * curr, start);
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function() {
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
