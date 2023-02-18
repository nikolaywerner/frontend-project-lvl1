import readlineSync from "readline-sync";

const gameEngine = (questionEngine, name) => {
    for (let i = 0; i < 3; i += 1) {
        const rightAnswer = questionEngine();
        const answer = readlineSync.question('Your answer: ');
        if (answer === rightAnswer) {
            console.log('Correct!');
            if (i === 2) {
                console.log(`Congratulations, ${name}!`);
            }
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
            i = 4;
        }
    }
}

export default gameEngine;

