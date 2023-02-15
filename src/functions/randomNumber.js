const randomNumber = (min = 1, max = 1000) => {
    let minNumber = min;
    let maxNumber = max;
    let rand = 0;
    if (maxNumber >= minNumber) {
        rand = minNumber + Math.random() * (maxNumber + 1 - minNumber);
    } else {
        rand = maxNumber + Math.random() * (minNumber + 1 - maxNumber);
    }
    return Math.round(rand);
}

export default randomNumber;