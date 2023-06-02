const monthEl = document.querySelector('.date > h1'),
  fullDateEl = document.querySelector('.date > p'),
  daysEl = document.querySelector('.days');

const monthsIndex = new Date().getMonth(),
  lastDay = new Date(new Date().getFullYear(), monthsIndex + 1, 0).getDate(),
  firstDay = new Date(new Date().getFullYear(), monthsIndex, 1).getDay() - 1;

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

monthEl.innerText = months[monthsIndex];
fullDateEl.innerText = new Date().toDateString();

let days = '';

for (let index = firstDay; index > 0; index--) {
  days += `<div class="empty">${index}</div>`;
}

for (let index = 1; index <= lastDay; index++) {
  if (index === new Date().getDate()) {
    days += `<div class="today">${index}</div>`;
  } else {
    days += `<div>${index}</div>`;
  }
}

daysEl.innerHTML = days;
