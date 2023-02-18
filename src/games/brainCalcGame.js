import randomNumber from '../functions/randomNumber.js';
import gameEngine from '../index.js';

const brainCalcGame = (name) => {
    console.log('What is the result of the expression?');

    const questionEngine = () => {
        const signs = ['+', '-', '*'];
        const signNumber = randomNumber(0, 2);
        let firstNum;
        let secondNum;
        let rightAnswer;
        if (signNumber === 2) {
            firstNum = randomNumber(1, 10);
            secondNum = randomNumber(1, 10);
            rightAnswer = firstNum * secondNum;
        } else {
            firstNum = randomNumber(1, 100);
            secondNum = randomNumber(1, 100);
            if (signNumber === 1) {
                rightAnswer = firstNum - secondNum;
            } else {
                rightAnswer = firstNum + secondNum;
            }
        }
        console.log(`Question: ${firstNum} ${signs[signNumber]} ${secondNum}`);
        return String(rightAnswer);
    };

    gameEngine(questionEngine, name);
};

export default brainCalcGame;
