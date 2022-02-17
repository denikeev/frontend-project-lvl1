import getRandomInt from '../getRandomInt.js';
import { index, questionsCount } from '../index.js';

const exercise = 'What number is missing in the progression?';

const progressionLength = 8;
const getProgression = () => {
  const initialDigit = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const coll = [initialDigit];

  let sum = initialDigit;
  for (let i = 0; i < progressionLength - 1; i += 1) {
    sum += step;
    coll.push(sum);
  }

  return coll;
};

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < questionsCount; i += 1) {
    const progressionColl = getProgression();
    const indexOfAnswer = getRandomInt(0, progressionLength - 1);
    const answer = String(progressionColl[indexOfAnswer]);
    progressionColl[indexOfAnswer] = '..';
    const question = progressionColl.join(' ');
    gameData.push([question, answer]);
  }

  return gameData;
};

const runGameProgression = () => {
  index(exercise, getGameData());
};

export default runGameProgression;
