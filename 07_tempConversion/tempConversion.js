const convertToCelsius = function(fDegree) {
  let cDegree = (fDegree - 32) * 5 / 9;
  return Math.round((cDegree + Number.EPSILON) * 10) / 10; // round to 1 decimal place only when needed
};

const convertToFahrenheit = function(cDegree) {
  let fDegree = cDegree * 9 / 5 + 32;
  return Math.round((fDegree + Number.EPSILON) * 10) / 10; // round to 1 decimal place only when needed 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
