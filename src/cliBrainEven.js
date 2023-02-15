import randomNumber from "./functions/randomNumber.js";
import readlineSync from "readline-sync";
const cliBrainEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 0; i < 3; i += 1) {
        let number = randomNumber(1, 1000);
        let rightAnswer = '';
        console.log(`Question: ${number}`);
        if (number % 2 === 0) {
            rightAnswer = 'yes';
        } else {
            rightAnswer = 'no';
        }
        const answer = readlineSync.question('Your answer: ');
        if (rightAnswer === answer) {
            console.log('Correct!');
            if (i === 2) {
                console.log(`Congratulations, ${name}!`);
            }
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, Bill!`);
            i = 4;
        }
    }
}

export default cliBrainEven;