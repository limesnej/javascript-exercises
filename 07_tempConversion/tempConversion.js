const convertToCelsius = function(arg) {
  let x = arg;

  let C = 0;
  // fahrenheit to celsius
  C = (x - 32) * (5/9);
  //have to parsetofloat because .tofixed makes the number into a string
  let fixed = parseFloat(C.toFixed(1));

  return fixed;
  

  
};

const convertToFahrenheit = function(arg) {
  let x = arg;

  let F = 0;
  // from celsius to fahrenheit
  F = (x * (9/5) + 32);
  let fixed = parseFloat(F.toFixed(1));
  return fixed;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
