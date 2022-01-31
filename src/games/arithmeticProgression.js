import getRandomInt from '../getRandomInt.js';

export const exercise = 'What number is missing in the progression?';
const progressionLength = 9;
const questionAmount = 3;

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

export const elems = [];
export const answers = [];
const fillColls = (coll) => {
  const hideInt = getRandomInt(0, progressionLength);
  const copyColl = coll;

  answers.push(String(copyColl[hideInt]));
  copyColl[hideInt] = '..';
  const collToString = copyColl.join(' ');
  elems.push(collToString);
};

const getItems = () => {
  for (let i = 0; i < questionAmount; i += 1) {
    fillColls(getProgressionColl());
  }
};

getItems();
