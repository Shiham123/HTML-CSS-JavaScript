const inputContainerEl = document.getElementById('input-container'),
  countdownFormEl = document.getElementById('countdown-form'),
  titleEl = document.getElementById('title'),
  datePickerEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown'),
  countdownItemEl = document.querySelectorAll('span'),
  countdownBtnEl = document.getElementById('countdown-button'),
  countdownTitleEl = document.getElementById('countdown-title');

const completeEl = document.getElementById('complete'),
  completeInfoEl = document.getElementById('complete-info'),
  completeBtnEl = document.getElementById('complete-button');

let countdownTitle = '',
  countdownDate = '',
  savedCountdownValue,
  countdownActive,
  countdownValue = new Date();

let second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

inputContainerEl.addEventListener('submit', updateCountdown);

function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;

  savedCountdownValue = {
    title: countdownTitle,
    date: countdownDate,
  };

  if (countdownDate === '') {
    alert('Please add a date');
  } else {
    countdownValue = new Date(countdownDate).getTime();
    updateCountdownDocument();
  }
}

function updateCountdownDocument() {
  countdownActive = setInterval(() => {
    const nowDate = new Date().getTime(),
      distanceDate = countdownValue - nowDate;

    let days = Math.floor(distanceDate / day),
      hours = Math.floor((distanceDate % day) / hour),
      minutes = Math.floor((distanceDate % hour) / minute),
      seconds = Math.floor((distanceDate % minute) / second);

    inputContainerEl.hidden = true;

    if (distanceDate < 0) {
      countdownEl.hidden = true;
      completeEl.hidden = false;
      completeInfoEl.textContent = `${countdownTitle} is starts on ${countdownDate}`;
      clearInterval(countdownActive);
    } else {
      completeEl.hidden = true;
      countdownEl.hidden = false;
      countdownTitleEl.textContent = `${countdownTitle}`;
      countdownItemEl[0].textContent = `${days}`;
      countdownItemEl[1].textContent = `${hours}`;
      countdownItemEl[2].textContent = `${minutes}`;
      countdownItemEl[3].textContent = `${seconds}`;
    }
  }, second);
}
