import readlineSync from 'readline-sync';

export const questionsCount = 3;
export const index = (exercise, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${exercise}`);

  for (let i = 0; i !== questionsCount; i += 1) {
    const [question, expectedAnswer] = gameData[i];
    console.log(`Question: ${question}`);
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
