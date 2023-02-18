import gameEngine from '../index.js';
import randomNumber from '../functions/randomNumber.js';
import testPrime from '../functions/testPrime.js';

const brainPrimeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const questionEngine = () => {
    const number = randomNumber(2, 1000);
    console.log(`Question: ${number}`);
    if (testPrime(number)) {
      return 'yes';
    }
    return 'no';
  };

  gameEngine(questionEngine, name);
};

export default brainPrimeGame;
