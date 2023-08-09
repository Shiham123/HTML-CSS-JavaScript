function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return 'please provide me a meaningful array';
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        return 'Invalid Input';
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        return 'equal';
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
}
sortMaker([3, 4]);
