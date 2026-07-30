let array = "";
let output = 0;

const add = function() {
  output = arguments[0] + arguments[1];
  return output;
};

const subtract = function() {
  output = arguments[0] - arguments[1];
  return output;
};

const sum = function() {
  array = arguments[0]
  output = 0;
  for (i = 0; i < array.length; i ++) {
    output = output + array[i];
  }
  return output;
};

const multiply = function() {
  array = arguments[0];
  output = array[0];
  for (i = 1; i < array.length; i ++) {
    output = output * array[i]
  }
  return output;
};

const power = function() {
  output = arguments[0];
	for (i = 1; i < arguments[1]; i++) {
    output = output * arguments[0];
  }
  return output;
};

const factorial = function() {
  if (arguments[0] != 0) {
    output = arguments[0];
    for (i = arguments[0] - 1; i > 0; i--)
    output = output * i;
  } else {
    return 1;
  }
  return output;
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
