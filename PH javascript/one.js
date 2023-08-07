function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return 'please provide me an array';
  } else {
    let badData = 0;

    for (let item of arr) {
      if (typeof item !== 'number') {
        return 'please provide me array of number';
      } else {
        if (item < 0) {
          badData++;
        }
      }
    }
    return badData;
  }
}

const wrongArr = [1, 2, 'hello'];
const wrongArrTwo = ['person', 'people', 'human'];
const doubleArr = [1, 2, -3, -4];
const positiveArr = [1, 2, 3, 4];
const negativeArr = [-1, -2, -3, -4];

console.log(findingBadData(negativeArr));
