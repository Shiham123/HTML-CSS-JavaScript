function mindGame(input) {
  if (typeof input !== 'number') {
    return 'please provide me a number';
  } else if (input <= 0) {
    return 'please provide a positive number';
  } else {
    const result = (input * 3 + 10) / 2 - 5;
    return result;
  }
}

console.log(mindGame(5));
