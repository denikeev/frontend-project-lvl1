import getRandomInt from '../getRandomInt.js';
import { questionAmount } from '../index.js';

export const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const QAColl = [];
QAColl[0] = [];
QAColl[1] = [];
const isPrime = (int) => {
  if (int === 1) {
    return false;
  }
  for (let i = 2; i <= int / 2; i += 1) {
    if (int % i === 0) {
      return false;
    }
  }

  return true;
};

const fillColls = () => {
  const checkInteger = getRandomInt(0, 101);
  QAColl[0].push(checkInteger);
  return isPrime(checkInteger) ? QAColl[1].push('yes') : QAColl[1].push('no');
};

const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColls();
  }
};

getItems();
