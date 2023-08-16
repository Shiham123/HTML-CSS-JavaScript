function gemsToDiamond(inputOne, inputTwo, inputThree) {
  if (
    typeof inputOne !== 'number' ||
    typeof inputTwo !== 'number' ||
    typeof inputThree !== 'number'
  ) {
    return 'please provide a valid number input';
  } else if (inputOne < 0 || inputTwo < 0 || inputThree < 0) {
    return 'please provide a position number';
  } else {
    let userOne = 21,
      userTwo = 32,
      userThree = 43;

    const total =
      inputOne * userOne + (inputTwo, userTwo) + (inputThree, userThree);

    if (total > 2000) {
      return total - 2000;
    } else {
      return total;
    }
  }
}

// console.log(gemsToDiamond(1, 1, 1));
console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(100, 5, 1));
// console.log(gemsToDiamond('person', 1, 2));
// console.log(gemsToDiamond(-1, 2, 3));
