function sortMaker(arr) {
  if (arr.length !== 2) {
    return 'invalid input ';
  }
  if (arr[0] && arr[1] > -1) {
    if (arr[0] === arr[1]) {
      return 'equal ';
    }
    let tempArray = [];
    let tempo = arr[0];
    arr[0] = arr[1];
    arr[1] = tempo;
    tempArray.push(arr[0], arr[1]);
    return tempArray;
  } else {
    return 'Invalid Input';
  }
}

console.log(sortMaker([2, 4]));
console.log(sortMaker([-2, 4]));
console.log(sortMaker([3, 4]));
