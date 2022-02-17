import getRandomInt from '../getRandomInt.js';
import { index, questionsCount } from '../index.js';

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const question = getRandomInt();
    const answer = isEven(question) ? 'yes' : 'no';
    gameData.push([question, answer]);
  }

  return gameData;
};

const runGameCheckParity = () => {
  index(exercise, getGameData());
};

export default runGameCheckParity;
