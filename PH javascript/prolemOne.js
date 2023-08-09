const arr = ['person one', 'person two', 'person three'];

function biggestNumber(arr) {
  if (!Array.isArray(arr)) {
    return 'please provide me an array';
  } else {
    let resultArr = [];

    for (let item of arr) {
      const perItem = item.split(' ');

      for (let i = 0; i < perItem.length; i++) {
        const checkingValue = perItem[i];

        if (!resultArr.includes(checkingValue)) {
          resultArr.push(checkingValue);
        }
      }
    }
    return resultArr;
  }
}

console.log(biggestNumber(arr));
