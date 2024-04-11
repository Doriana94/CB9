const sum = (num1, num2, num3) => num1 + num2 + num3;
const sub = (num1, num2, num3) => num1 - num2 - num3;
const mult = (num1, num2, num3) => num1 * num2 * num3;
const div = (num1, num2, num3) => num1 / num2 / num3;

const calculator = (operationFn, num1, num2, num3) => {
  return operationFn(num1, num2, num3);
};

console.log(calculator(sum, 1, 2, 3));
console.log(calculator(sum, 4, 5, 6));
console.log(calculator(sum, 7, 8, 9));

console.log(calculator(sub, 3, 2, 1));
console.log(calculator(sub, 6, 5, 4));
console.log(calculator(sub, 9, 8, 7));

console.log(calculator(mult, 1, 2, 3));
console.log(calculator(mult, 4, 5, 6));
console.log(calculator(mult, 7, 8, 9));

console.log(calculator(div, 3, 2, 1));
console.log(calculator(div, 6, 5, 4));
console.log(calculator(div, 9, 8, 7));
