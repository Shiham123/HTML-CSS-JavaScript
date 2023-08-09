function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
    return 'please provide a an array ';
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

console.log(canPay([1, 5, 5], 10));
