function isLGSeven(input) {
  if (typeof input !== 'number') {
    return 'please provide me a number';
  } else {
    const differ = input - 7;

    if (differ < 7) {
      return differ;
    } else {
      let inputDouble = input * 2;
      return inputDouble;
    }
  }
}

console.log(isLGSeven(2));
