const hourElement = document.getElementById('hour'),
  minuteELement = document.getElementById('minutes'),
  secondElement = document.getElementById('second'),
  amPmElement = document.getElementById('am-pm');

const updateClock = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = 'PM';

  if (hours > 12) {
    hours = hours - 12;
    ampm = 'PM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  hourElement.innerText = hours;
  minuteELement.innerText = minutes;
  secondElement.innerText = seconds;
  amPmElement, (innerText = ampm);

  setTimeout(() => {
    updateClock();
  }, 1000);
};

updateClock();
