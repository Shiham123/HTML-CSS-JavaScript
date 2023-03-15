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
  deadlineFormatEl = document.querySelectorAll('.deadline-format h4'),
  deadlineEl = document.querySelector('.deadline');

// let tempDate = new Date(),
//   tempYear = tempDate.getFullYear(),
//   tempMonth = tempDate.getMonth(),
//   tempDay = tempDate.getDate(),
//   tempHour = tempDate.getHours(),
//   tempMinutes = tempDate.getMinutes(),
//   tempSeconds = tempDate.getSeconds();

// const futureDate = new Date(
//   tempYear,
//   tempMonth,
//   tempDay,
//   tempHour,
//   tempMinutes,
//   tempSeconds + 10
// );

const futureDate = new Date(2024, 0, 1, 5, 0, 10);

const year = futureDate.getFullYear(),
  hour = futureDate.getHours(),
  minute = futureDate.getMinutes(),
  date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveawayEl.innerHTML = `Giveaway ends on ${weekday} ${date} ${month} ${year}, ${hour}AM`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000,
    oneHour = 60 * 60 * 1000,
    oneMinute = 60 * 1000;

  let days = time / oneDay;
  days = Math.floor(days);

  const hours = Math.floor((time % oneDay) / oneHour),
    minutes = Math.floor((time % oneHour) / oneMinute),
    seconds = Math.floor((time % oneMinute) / 1000);

  function formatTime(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  const values = [days, hours, minutes, seconds];

  deadlineFormatEl.forEach((item, index) => {
    item.innerHTML = formatTime(values[index]);
  });

  if (time < 0) {
    clearInterval(countdown);
    deadlineEl.innerHTML = `<h4>Sorry, time is expired</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
