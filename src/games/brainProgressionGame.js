import gameEngine from '../index.js';
import randomNumber from '../functions/randomNumber.js';

const brainProgressionGame = (name) => {
    console.log('What number is missing in the progression?');

    const questionEngine = () => {
        let rightAnswer;
        const step = randomNumber(1, 10);
        let startNum = randomNumber(1, 25);
        const rightAnswerPos = randomNumber(1, 10);
        let question = '';

        for (let i = 1; i < 11; i += 1) {
            if (i === rightAnswerPos) {
                rightAnswer = startNum;
                question += '.. ';
            } else {
                question += `${startNum} `;
            }
            startNum += step;
        }
        console.log(`Question: ${question}`);

        return String(rightAnswer);
    };

    gameEngine(questionEngine, name);
};

export default brainProgressionGame;
