function createCounter(str) {
  if (typeof str !== 'number') {
    return 'please provide me a number';
  } else if (str < 0) {
    let counter = str,
      counterArr = [];
    for (let i = str; i < 1; i++) {
      counter++;
      counterArr.push(counter);
    }
    return counterArr;
  } else if (str > 0) {
    let counter = str,
      counterArr = [];

    for (let i = str; i > -1; i--) {
      counter--;
      counterArr.push(counter);
    }
    return counterArr;
  } else {
    return 'input is ok';
  }
}

console.log(createCounter(2));
console.log(createCounter(-2));
