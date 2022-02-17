import getRandomInt from '../getRandomInt.js';
import { index, questionsCount } from '../index.js';

const exercise = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreatestCommonDivisor(b, a % b);
};

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const question = `${num1} ${num2}`;
    const answer = String(getGreatestCommonDivisor(num1, num2));
    gameData.push([question, answer]);
  }

  return gameData;
};

const runGameGreatestCommonDivisor = () => {
  index(exercise, getGameData());
};

export default runGameGreatestCommonDivisor;
