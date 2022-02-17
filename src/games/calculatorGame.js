import getRandomInt from '../getRandomInt.js';
import { index, questionsCount } from '../index.js';

const exercise = 'What is the result of the expression?';

const getRandomOperator = (operators = ['+', '-', '*']) => {
  const operatorIndex = getRandomInt(0, operators.length - 1);
  return operators[operatorIndex];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String((num1 + num2));
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      return null;
  }
};

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const num1 = getRandomInt(0, 10);
    const num2 = getRandomInt(0, 10);
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const answer = calculate(num1, num2, operator);
    gameData.push([question, answer]);
  }

  return gameData;
};

const runGameCalc = () => {
  index(exercise, getGameData());
};

export default runGameCalc;
