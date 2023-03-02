const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
     expect(calculator.sum(1, 2)).toBe(3);
})

test('substracts a - b', () => {
    expect(calculator.substract(1, 2)).toBe(-1);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
})

test('divides a / b', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(3, 2)).toBe(9);
})
