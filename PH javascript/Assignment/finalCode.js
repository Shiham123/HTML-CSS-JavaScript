function cubeNumber(number) {
  if (typeof number !== 'number') {
    return 'please provide me a number';
  } else {
    const cube = Math.pow(number, 3);
    return cube;
  }
}
cubeNumber(3);

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'please provide a meaning full string';
  } else {
    if (string1.toLowerCase().includes(string2.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
}
matchFinder('John Doe', 'john');

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
        if (arr[j] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
}
const arr = [10, 20];
sortMaker(arr);

function findAddress(obj) {
  let initialStreet = false,
    initialHouse = false,
    initialEarth = false;
  if (obj['street'] !== undefined) {
    initialStreet = true;
  }
  if (obj['house'] !== undefined) {
    initialHouse = true;
  }
  if (obj['society'] !== undefined) {
    initialEarth = true;
  }

  let streetObj, houseObj, earthObj;
  if (initialStreet) {
    streetObj = obj['street'];
  } else {
    streetObj = '__';
  }
  if (initialHouse) {
    houseObj = obj['house'];
  } else {
    houseObj = '__';
  }
  if (initialEarth) {
    earthObj = obj['society'];
  } else {
    earthObj = '__';
  }
  let objReturn = streetObj + ', ' + houseObj + ', ' + earthObj;
  return objReturn;
}

const obj = { street: 10, house: '15A', society: 'Earth Perfect' };
findAddress(obj);

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return 'array is empty, please provide some value in the array';
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      sum += changeArray[i];
      if (sum >= totalDue) {
        return true;
      }
    }
    return false;
  }
}
canPay([1, 5, 4], 10);
