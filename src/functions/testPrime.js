const testPrime = (num) => {
  let result;

  if (num === 1) {
    result = false;
  } else if (num === 2) {
    result = true;
  } else {
    result = true;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) result = false;
    }
  }

  return result;
};

export default testPrime;
