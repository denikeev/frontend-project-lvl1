import getRandomInt from '../getRandomInt.js';
import { questionAmount } from '../index.js';

export const exercise = 'What number is missing in the progression?';
export const QAColl = [];
QAColl[0] = [];
QAColl[1] = [];
const progressionLength = 9;

const getProgressionColl = () => {
  const getStartInt = (getRandomInt(1, 51));
  const getStepInt = (getRandomInt(1, 11));

  const coll = [getStartInt];
  let acc = getStartInt;

  for (let i = 0; i < progressionLength; i += 1) {
    acc += getStepInt;
    coll.push(acc);
  }

  return coll;
};

const fillColls = (coll) => {
  const hideInt = getRandomInt(0, progressionLength);
  const copyColl = coll;

  QAColl[1].push(String(copyColl[hideInt]));
  copyColl[hideInt] = '..';
  const collToString = copyColl.join(' ');
  QAColl[0].push(collToString);
};

const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColls(getProgressionColl());
  }
};

getItems();
