import getRandomInt from '../getRandomInt.js';
import { questionAmount } from '../index.js';

export const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';
export const QAColl = [];
QAColl[0] = [];
QAColl[1] = [];
const getIntegers = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    QAColl[0].push(getRandomInt());
  }
};
getIntegers();

const isEven = (number) => number % 2 === 0;
const getAnswers = () => {
  for (let i = 0; i !== questionAmount; i += 1) {
    if (isEven(QAColl[0][i]) === true) {
      QAColl[1].push('yes');
    } else {
      QAColl[1].push('no');
    }
  }
  return QAColl[1];
};
getAnswers();
