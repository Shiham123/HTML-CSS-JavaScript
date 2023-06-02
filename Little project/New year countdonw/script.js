const dayEl = document.getElementById('day'),
  hourEl = document.getElementById('hour'),
  minuteEl = document.getElementById('minute'),
  secondEl = document.getElementById('second');

const dynamicYear = new Date().getFullYear() + 1,
  newDateYear = new Date(dynamicYear, 0, 1).getTime();

function updateNewYerTime() {
  let presentDate = new Date().getTime(),
    gapTime = newDateYear - presentDate;

  let second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let days = Math.floor(gapTime / day),
    hours = Math.floor((gapTime % day) / hour),
    minutes = Math.floor((gapTime % hour) / minute),
    seconds = Math.floor((gapTime % minute) / second);

  dayEl.innerText = days;
  hourEl.innerText = hours;
  minuteEl.innerText = minutes;
  secondEl.innerText = seconds;
  setTimeout(updateNewYerTime, 1000);
}

updateNewYerTime();
