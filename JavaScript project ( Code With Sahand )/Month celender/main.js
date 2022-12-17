const monthElement = document.querySelector('.date'),
  eachMonth = monthElement.querySelector('h1'),
  eachDate = monthElement.querySelector('p');

const monthIndex = new Date().getMonth(),
  lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0);

let dayIndex = new Date().toDateString();
console.log(lastDay);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

eachMonth.innerText = months[monthIndex];
eachDate.innerText = dayIndex;
