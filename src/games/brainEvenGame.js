import randomNumber from "../functions/randomNumber.js";
import gameEngine from "../index.js";

const brainEvenGame = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const questionEngine = () => {
        let question = randomNumber(1, 1000);
        console.log(`Question: ${question}`);
        let rightAnswer = '';
        if (question % 2 === 0) {
            rightAnswer = 'yes';
        } else {
            rightAnswer = 'no';
        }
        return rightAnswer;
    }

    gameEngine(questionEngine, name);
}

export default brainEvenGame;