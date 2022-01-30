import getRandomInt from '../getRandomInt.js';

export const exercise = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const elems = [];
export const answers = [];

const fillColls = (num1, num2, operator) => {
  const combine = `${num1} ${num2}`;
  elems.push(combine);
  let answer = '';

  if (operator === '+') {
    answer = gcd(num1, num2);
    return answers.push(String(answer));
  }
  if (operator === '-') {
    answer = gcd(num1, num2);
    return answers.push(String(answer));
  }
  answer = gcd(num1, num2);
  return answers.push(String(answer));
};

const questionAmount = 3;
const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColls(getRandomInt(1, 101), getRandomInt(1, 101));
  }
};

getItems();
