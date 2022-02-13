import getRandomInt from '../getRandomInt.js';

export const exercise = 'What number is missing in the progression?';

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

export const getQAColl = (questionAmount) => {
  const QAColl = [];

  for (let i = 0; i < questionAmount; i += 1) {
    const progressionColl = getProgressionColl();
    const hideInt = getRandomInt(0, progressionLength);
    const QA = [];

    const getAnswer = String(progressionColl[hideInt]);
    QA[1] = getAnswer;
    progressionColl[hideInt] = '..';
    const collToString = progressionColl.join(' ');
    QA[0] = collToString;
    QAColl.push(QA);
  }

  return QAColl;
};
