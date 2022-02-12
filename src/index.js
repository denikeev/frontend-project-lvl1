import readlineSync from 'readline-sync';
import * as calculatorGame from './games/calculatorGame.js';

export const questionAmount = 3;
export const index = (exercise, QAColl) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(exercise);
  for (let i = 0; i !== questionAmount; i += 1) {
    const expectedAnswer = QAColl[1][i];
    console.log(`Question: ${QAColl[0][i]}`);
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
