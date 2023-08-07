function findPrimeNumber(arr) {
  if (!Array.isArray(arr)) {
    return 'please provide me an array';
  } else {
    let primes = [];
    for (let item of arr) {
      if (item > 1) {
        let isPrime = true;
        for (let i = 2; i < item; i++) {
          if (item % 2 === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime === true) {
          primes.push(item);
        }
      }
    }
    return primes;
  }
}

const numberArr = [4, 7, 8, 11, 9, 2, 10, 13, 20];
console.log(findPrimeNumber(numberArr));
