const daysEl = document.getElementById('days'),
  hoursEl = document.getElementById('hours'),
  minsEl = document.getElementById('mins'),
  secondsEl = document.getElementById('seconds');

const newYears = '7 Feb 2023';

function countdown() {
  const newYearsDate = new Date(newYears),
    currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000,
    days = Math.floor(totalSeconds / 3600 / 24),
    hours = Math.floor(totalSeconds / 3600) % 24,
    minutes = Math.floor(totalSeconds / 60) % 60,
    seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
