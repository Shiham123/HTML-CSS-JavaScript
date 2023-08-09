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
