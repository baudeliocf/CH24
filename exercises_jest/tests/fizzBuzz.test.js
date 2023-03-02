const { default: expect } = require('expect');

const fizzBuzz = require("../fizzBuzz");

test('check', () => {
     expect(fizzBuzz(6)).toBe('Fizz');
     expect(fizzBuzz(10)).toBe('Buzz');
     expect(fizzBuzz(15)).toBe('FizzBuzz');
})