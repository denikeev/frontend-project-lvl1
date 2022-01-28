import getRandomInt from '../getRandomInt.js';

export const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
export const integers = [];
const questionAmount = 3;
const getIntegers = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    integers.push(getRandomInt());
  }
};
getIntegers();

export const answers = [];
const isEven = (number) => number % 2 === 0;
const getAnswers = () => {
  for (let i = 0; i !== questionAmount; i += 1) {
    if (isEven(integers[i]) === true) {
      answers.push('yes');
    } else {
      answers.push('no');
    }
  }
  return answers;
};
getAnswers();
