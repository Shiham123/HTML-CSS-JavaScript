function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray)) {
    return 'please provide a an array and a number';
  } else if (changeArray.length === 0) {
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
