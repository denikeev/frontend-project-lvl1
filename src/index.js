import readlineSync from 'readline-sync';

import * as calculatorGame from './games/calculatorGame.js';
import * as arithmeticProgressionGame from './games/arithmeticProgressionGame.js';
import * as greatestCommonDivisorGame from './games/greatestCommonDivisorGame.js';
import * as parityCheckGame from './games/parityCheckGame.js';
import * as primeGame from './games/primeGame.js';

export const questionAmount = 3;
export const index = (exercise, QAColl) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(exercise);
  for (let i = 0; i !== questionAmount; i += 1) {
    const expectedAnswer = QAColl[i][1];
    console.log(`Question: ${QAColl[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const calc = () => {
  index(calculatorGame.exercise, calculatorGame.getQAColl(questionAmount));
};

export const progression = () => {
  index(arithmeticProgressionGame.exercise, arithmeticProgressionGame.getQAColl(questionAmount));
};

export const gcd = () => {
  index(greatestCommonDivisorGame.exercise, greatestCommonDivisorGame.getQAColl(questionAmount));
};

export const even = () => {
  index(parityCheckGame.exercise, parityCheckGame.getQAColl(questionAmount));
};

export const prime = () => {
  index(primeGame.exercise, primeGame.getQAColl(questionAmount));
};
