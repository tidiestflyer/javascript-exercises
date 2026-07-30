const convertToCelsius = function() {
  // formula for conversion (32°F − 32) × 5/9 = 0°C
  let input = arguments[0];
  let output = (input - 32) * 5 / 9;
  output = Math.round(output * 10) / 10;
  console.log(output);
  return output;
};

const convertToFahrenheit = function() {
  // formula for conversion (32°C * 9/5) + 32 = 89.6°F
  let input = arguments[0]
  let output = (input * 9 / 5) + 32;
  output = Math.round(output * 10) / 10;
  console.log(output);
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
