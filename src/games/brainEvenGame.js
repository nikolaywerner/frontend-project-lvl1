import randomNumber from '../functions/randomNumber.js';
import gameEngine from '../index.js';

const brainEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questionEngine = () => {
    const number = randomNumber(1, 1000);
    console.log(`Question: ${number}`);
    let rightAnswer = '';
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    return rightAnswer;
  };

  gameEngine(questionEngine, name);
};

export default brainEvenGame;
