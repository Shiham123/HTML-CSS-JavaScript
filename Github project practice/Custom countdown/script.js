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
countdownBtnEl.addEventListener('click', resetCountdown);
completeBtnEl.addEventListener('click', resetCountdown);

function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;

  savedCountdownValue = {
    title: countdownTitle,
    date: countdownDate,
  };

  localStorage.setItem('countdown', JSON.stringify(savedCountdownValue));

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
      completeInfoEl.textContent = `${countdownTitle} is starts on ${countdownDate}`;
      clearInterval(countdownActive);

      countdownEl.hidden = true;
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

function resetCountdown() {
  inputContainerEl.hidden = false;
  countdownEl.hidden = true;
  completeEl.hidden = true;

  clearInterval(countdownActive);

  titleEl.value = '';
  datePickerEl.value = '';

  localStorage.removeItem('countdown');
}

function restoreCountdownDocument() {
  if (localStorage.getItem('countdown')) {
    inputContainerEl.hidden = true;
    savedCountdownValue = JSON.parse(localStorage.getItem('countdown'));
    countdownTitle = savedCountdownValue.title;
    countdownDate = savedCountdownValue.date;
    countdownValue = new Date(countdownDate).getTime();
    updateCountdownDocument();
  }
}

restoreCountdownDocument();
