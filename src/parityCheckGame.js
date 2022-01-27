import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;
const getRandomInt = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCounter = 0;
  while (correctAnswersCounter !== 3) {
    const integer = getRandomInt();
    const expectedAnswer = isEven(integer) ? 'yes' : 'no';
    console.log(`Question: ${integer}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
      correctAnswersCounter += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
