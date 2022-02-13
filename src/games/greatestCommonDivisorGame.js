import getRandomInt from '../getRandomInt.js';

export const exercise = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const getQAColl = (questionAmount) => {
  const QAColl = [];

  for (let i = 0; i < questionAmount; i += 1) {
    const num1 = getRandomInt(1, 101);
    const num2 = getRandomInt(1, 101);
    const QA = [];

    const concatQuestion = `${num1} ${num2}`;
    QA[0] = concatQuestion;
    const getAnswer = String(gcd(num1, num2));
    QA[1] = getAnswer;
    QAColl.push(QA);
  }

  return QAColl;
};
