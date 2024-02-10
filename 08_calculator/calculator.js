const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, curr) => total + curr, 0);
};

const multiply = function(array) {
  return array.reduce((product, curr) => product * curr, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

// const factorial = function(n) {
// 	/*===========================
//   How do I do factorial in JS?
//   0 => 1
//   1 => 1
//   5 => 54321 = 120
//   LOL: create an array from 1 to n (inclusive), then use multiply created earlier hahahaha
//   ===========================*/
//   if (n === 0 || n === 1) return 1;
//   let array = []
//   for (let i = 1; i <= n; i++) array.push(i);
//   return multiply(array);
// };

const factorial = function(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
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
