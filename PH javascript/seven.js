function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return 'pleaser provide me and array';
  } else {
    let badData = 0,
      goodData = 0;

    for (item of arr) {
      if (item < 0) {
        badData++;
      } else {
        goodData++;
      }
    }
    return { badData, goodData };
  }
}

const arrOne = [1, 2, 5],
  arrTwo = [2, -5, -7, -14],
  arrThree = [-4, -9, -5, -33, -55];
// console.log(findingBadData('shiham'));
// console.log(findingBadData(arrOne));
console.log(findingBadData(arrTwo));
// console.log(findingBadData(arrThree));
