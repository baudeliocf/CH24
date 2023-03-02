// Write a function that takes in a number and returns one of the following:
//     - If the number is divisible by 3, return 'Fizz'.
//     - If the number is divisible by 5, return 'Buzz'.
//     - If the number is divisible by 3 and 5, return 'FizzBuzz'
//     - Else, return the number passed as an argument

// Use the mod to check is the number id divisible by the number, in this case 3 and 5, first check is divisible by the two number and return the result
function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
  if (num % 3 == 0) return "Fizz";
  if (num % 5 == 0) return "Buzz";
  return num;
}

// console.log(fizzBuzz(9));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(15));


module.exports = fizzBuzz;
