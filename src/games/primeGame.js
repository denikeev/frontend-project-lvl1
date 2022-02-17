import getRandomInt from '../getRandomInt.js';
import { index, questionsCount } from '../index.js';

const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (int) => {
  if (int < 2) {
    return false;
  }
  for (let i = 2; i <= int / 2; i += 1) {
    if (int % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const question = getRandomInt(1, 50);
    const answer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, answer]);
  }

  return gameData;
};

const runGamePrimeNumber = () => {
  index(exercise, getGameData());
};

export default runGamePrimeNumber;
