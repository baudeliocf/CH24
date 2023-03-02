// Calculate the factorial of a number using recursion

// Call the same function but minus 1, if the value is less than 1 return 1 and the recursion is end because isnt call the function again

function factorial(num) {
  if (num < 1) return 1;
  return factorial(num - 1) * num;
}

// console.log(factorial(5));

module.exports = factorial;
