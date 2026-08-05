const convertToCelsius = function(temp) {
  // formula for conversion (32°F − 32) × 5/9 = 0°C
  temp = (temp - 32) * 5 / 9;
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  // formula for conversion (32°C * 9/5) + 32 = 89.6°F
  temp = (temp * 9 / 5) + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
