const dayEl = document.getElementById('day'),
  hourEl = document.getElementById('hour'),
  minuteEl = document.getElementById('minute'),
  secondEl = document.getElementById('second');

const newYearDate = new Date('January 1, 2023 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime(),
    gap = newYearDate - now,
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const dayLeft = Math.floor(gap / day),
    hourLeft = Math.floor((gap % day) / hour),
    minuteLeft = Math.floor((gap % hour) / minute),
    secondLeft = Math.floor((gap % minute) / second);

  dayEl.innerText = dayLeft;
  hourEl.innerText = hourLeft;
  minuteEl.innerText = minuteLeft;
  secondEl.innerText = secondLeft;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();
