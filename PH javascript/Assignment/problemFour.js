function findAddress(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return 'please provide a valid object';
  }

  const { street, house, Earth } = obj;

  if (!street && !house && !Earth) {
    return 'please provide a non-empty address object';
  }

  const streetObj = street || '__';
  const houseObj = house || '__';
  const earthObj = Earth || '__';

  let objReturn = streetObj + ', ' + houseObj + ', ' + earthObj;

  return objReturn;
}

const obj = { street: 10, house: '15A', Earth: 'Perfect' };
findAddress(obj);
console.log(findAddress(obj));
