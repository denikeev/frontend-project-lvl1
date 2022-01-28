import getRandomInt from '../getRandomInt.js';

export const exercise = 'What is the result of the expression?';
const getRandomOperand = (operands = ['+', '-', '*']) => {
  const operandIndex = getRandomInt(0, operands.length);
  return operands[operandIndex];
};

export const elems = [];
export const answers = [];

const fillColl = (num1, num2, operator) => {
  const combine = `${num1} ${operator} ${num2}`;
  elems.push(combine);

  if (operator === '+') {
    return answers.push(String(num1 + num2));
  }
  if (operator === '-') {
    return answers.push(String(num1 - num2));
  }
  return answers.push(String(num1 * num2));
};

const questionAmount = 3;
const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColl(getRandomInt(0, 11), getRandomInt(0, 11), getRandomOperand());
  }
};

getItems();
