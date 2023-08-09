function cubeNumber(number) {
  if (typeof number !== 'number') {
    return 'please provide me a number';
  } else {
    const cube = Math.pow(number, 3);
    return cube;
  }
}

cubeNumber(3);
console.log(cubeNumber(3));
