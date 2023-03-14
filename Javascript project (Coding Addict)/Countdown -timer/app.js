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
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveawayEl = document.querySelector('.giveaway'),
  deadlineEl = document.querySelector('.deadline'),
  deadlineFormatEl = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date(),
  tempYear = tempDate.getFullYear(),
  tempMonth = tempDate.getMonth(),
  tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

let weekDay = futureDate.getDay();
weekDay = weekdays[weekDay];

let month = futureDate.getMonth();
month = months[month];

giveawayEl.textContent = `Giveaway on ends ${weekDay} ${date} ${month} ${year} ${hour}:${minute}AM`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000,
    oneHour = 60 * 60 * 1000,
    oneMinute = 60 * 1000;

  let days = time / oneDay;
  days = Math.floor(days);

  const hour = Math.floor((time % oneDay) / oneHour),
    minute = Math.floor((time % oneHour) / oneMinute),
    second = Math.floor((time % oneMinute) / 1000);

  function formatTime(item) {
    if (item < 10) {
      item = `0${item}`;
    }
    return item;
  }

  const values = [days, hour, minute, second];

  deadlineFormatEl.forEach((item, index) => {
    item.innerHTML = formatTime(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadlineEl.innerHTML = `<h4>Sorry, time expired</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
