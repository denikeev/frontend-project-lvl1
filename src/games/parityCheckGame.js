import getRandomInt from '../getRandomInt.js';

export const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const getQAColl = (questionAmount) => {
  const QAColl = [];

  for (let i = 0; i < questionAmount; i += 1) {
    const QA = [];
    const randomInt = getRandomInt();
    QA[0] = randomInt;
    const getAnswer = isEven(randomInt) === true ? 'yes' : 'no';
    QA[1] = getAnswer;
    QAColl.push(QA);
  }

  return QAColl;
};
