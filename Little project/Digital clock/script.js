const hourEl = document.getElementById('hour'),
  minuteEl = document.getElementById('minutes'),
  secondEl = document.getElementById('seconds'),
  ampmEl = document.getElementById('ampm');

function updateClock() {
  let hour = new Date().getHours(),
    minute = new Date().getMinutes(),
    seconds = new Date().getSeconds();

  let ampm = 'AM';

  if (hour > 12) {
    hour = hour - 12;
    ampm = 'PM';
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  hourEl.innerText = hour;
  minuteEl.innerText = minute;
  secondEl.innerText = seconds;
  ampmEl.innerText = ampm;

  setTimeout(updateClock, 1000);
}

updateClock();
