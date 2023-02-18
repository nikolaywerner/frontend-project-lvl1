import gameEngine from '../index.js';
import randomNumber from '../functions/randomNumber.js';

const brainGcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  const questionEngine = () => {
    let rightAnswer = 1;
    let maxCounter;
    const firstNum = randomNumber(1, 50);
    const secondNum = randomNumber(1, 50);
    if (secondNum >= firstNum) {
      maxCounter = firstNum;
    } else {
      maxCounter = secondNum;
    }

    for (let i = 1; i < maxCounter + 1; i += 1) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        rightAnswer = i;
      }
    }
    console.log(`Question: ${firstNum} ${secondNum} (${rightAnswer})`);
    return String(rightAnswer);
  };

  gameEngine(questionEngine, name);
};

export default brainGcdGame;
