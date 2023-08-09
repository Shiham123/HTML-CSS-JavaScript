const dayArr = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

function runningPeople(arr) {
  const currentDate = new Date().getDay(),
    currentDay = dayArr[currentDate];

  if (!Array.isArray(arr)) {
    return 'provide me an array';
  } else {
    switch (currentDay.toLowerCase()) {
      case 'sunday':
        const arrOne = arr[currentDate];
        return arrOne;

      case 'monday':
        const arrTwo = arr[currentDate];
        return arrTwo;

      case 'tuesday':
        const arrThree = arr[currentDate];
        return arrThree;

      case 'wednesday':
        const arrFour = arr[currentDate];
        return arrFour;

      case 'thursday':
        const arrFive = arr[currentDate];
        return arrFour;

      case 'friday':
        const arrSix = arr[currentDate];
        return arrSix;

      case 'saturday':
        const arrSeven = arr[currentDate];
        return arrSeven;

      default:
        return 'unable to match something error';
    }
  }
}

const arr = [
  'GF of sunday',
  'GF of monday',
  'GF of tuesday',
  'GF of wednesday',
  'GF of thursday',
  'GF of friday',
  'GF of saturday',
];
console.log(runningPeople(arr));
