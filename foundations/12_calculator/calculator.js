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
  return numbers.reduce((acc, curr) => acc = acc * curr, 1);
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(number) {
  numbers = [];
  for(i = number; i > 0; i--) {
    numbers.push(i);
  }
  return numbers.reduce((acc, curr) => acc *= curr, 1);
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
