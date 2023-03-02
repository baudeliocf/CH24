const calculator = require("./calculator");
const {res, mul, div, pot} = require("./calculator");

test("Suma de 2 numeros", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});
test("Resta de 2 numeros", () => {
  expect(res(1, 2)).toBe(-1);
});
test("Multiplacacion de 2 numeros", () => {
  expect(mul(1, 2)).toBe(2);
});
test("Division de 2 numeros", () => {
  expect(div(1, 2)).toBe(0.5);
});
test("Potencia de 2 numeros", () => {
  expect(pot(2, 2)).toBe(4);
});
