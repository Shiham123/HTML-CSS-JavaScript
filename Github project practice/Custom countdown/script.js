const inputContainerEl = document.getElementById('input-container'),
  countdownFormEl = document.getElementById('countdown-form'),
  titleEl = document.getElementById('title'),
  datePickerEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown'),
  countdownTitleEl = document.getElementById('countdown-title'),
  countdownItemEl = document.querySelectorAll('span'),
  countdownBtnEl = document.getElementById('countdown-button');

const completeEl = document.getElementById('complete'),
  completeInfoEl = document.getElementById('complete-info'),
  completeBtnEl = document.getElementById('complete-button');

inputContainerEl.addEventListener('submit', updateCountdown);

let countdownTitle = '',
  countdownDate = '',
  savedCountdown,
  countdownActive,
  countdownValue = new Date();

let second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;

  savedCountdown = {
    title: countdownTitle,
    date: countdownDate,
  };

  if (countdownDate === '') {
    alert('Please add a date to start the countdown');
  } else {
    countdownValue = new Date(countdownDate).getTime();
    updateCountdownDocument();
  }
}

function updateCountdownDocument() {
  countdownActive = setInterval(() => {
    let now = new Date().getTime(),
      distance = countdownValue - now;

    let days = Math.floor(distance / day),
      hours = Math.floor((distance % day) / hour),
      minutes = Math.floor((distance % hour) / minute),
      seconds = Math.floor((distance % minute) / second);

    inputContainerEl.hidden = true;

    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      completeInfoEl.textContent = `${countdownTitle} countdown finished on ${countdownDate}`;
      completeEl.hidden = false;
    } else {
      countdownTitleEl.textContent = `${countdownTitle}`;
      countdownItemEl[0].textContent = `${days}`;
      countdownItemEl[1].textContent = `${hours}`;
      countdownItemEl[2].textContent = `${minutes}`;
      countdownItemEl[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countdownEl.hidden = false;
    }
  }, second);
}
