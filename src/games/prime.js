import getRandomInt from '../getRandomInt.js';

export const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questionAmount = 3;
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

export const elems = [];
export const answers = [];

const fillColls = () => {
  const checkInteger = getRandomInt(0, 101);
  elems.push(checkInteger);
  return isPrime(checkInteger) ? answers.push('yes') : answers.push('no');
};

const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColls();
  }
};

getItems();
