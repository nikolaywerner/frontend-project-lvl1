import readlineSync from 'readline-sync';

const nameRequest = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}

export default nameRequest;