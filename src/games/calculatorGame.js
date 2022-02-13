import getRandomInt from '../getRandomInt.js';

export const exercise = 'What is the result of the expression?';

const getRandomOperator = (operators = ['+', '-', '*']) => {
  const operatorIndex = getRandomInt(0, operators.length);
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

export const getQAColl = (questionAmount) => {
  const QAColl = [];

  for (let i = 0; i < questionAmount; i += 1) {
    const num1 = getRandomInt(0, 11);
    const num2 = getRandomInt(0, 11);
    const operator = getRandomOperator();
    const QA = [];

    const concatQuestion = `${num1} ${operator} ${num2}`;
    QA[0] = concatQuestion;
    const getAnswer = calculate(num1, num2, operator);
    QA[1] = getAnswer;
    QAColl.push(QA);
  }

  return QAColl;
};
