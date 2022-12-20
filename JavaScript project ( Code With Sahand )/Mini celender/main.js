const monthNameElement = document.getElementById('month-name'),
  dayNameElement = document.getElementById('day-name'),
  dayNumberElement = document.getElementById('day-number'),
  yearElement = document.getElementById('year');

const date = new Date(),
  month = date.getMonth();

monthNameElement.innerText = date.toLocaleString('en', {
  month: 'long',
});

dayNameElement.innerText = date.toLocaleString('en', {
  weekday: 'long',
});

dayNumberElement.innerText = date.getDate();
yearElement.innerText = date.getFullYear();
