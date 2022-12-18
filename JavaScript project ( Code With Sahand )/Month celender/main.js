const monthElement = document.querySelector('.date'),
  eachMonth = monthElement.querySelector('h1'),
  eachDate = monthElement.querySelector('p'),
  dayElement = document.querySelector('.days');

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay();
console.log(firstDay);

let dayIndex = new Date().toDateString();

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

let days = '';

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

dayElement.innerHTML = days;
