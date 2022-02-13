import getRandomInt from '../getRandomInt.js';

export const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

export const getQAColl = (questionAmount) => {
  const QAColl = [];

  for (let i = 0; i < questionAmount; i += 1) {
    const QA = [];
    const randomInt = getRandomInt();
    QA[0] = randomInt;
    const getAnswer = isPrime(randomInt) ? 'yes' : 'no';
    QA[1] = getAnswer;
    QAColl.push(QA);
  }

  return QAColl;
};
