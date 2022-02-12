import getRandomInt from '../getRandomInt.js';
import { questionAmount } from '../index.js';

export const exercise = 'Find the greatest common divisor of given numbers.';
export const QAColl = [];
QAColl[0] = [];
QAColl[1] = [];

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const fillColls = (num1, num2) => {
  const combine = `${num1} ${num2}`;
  QAColl[0].push(combine);
  let answer = '';

  answer = gcd(num1, num2);
  return QAColl[1].push(String(answer));
};

const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColls(getRandomInt(1, 101), getRandomInt(1, 101));
  }
};

getItems();
