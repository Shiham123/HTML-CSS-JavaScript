const inputContainerEl = document.getElementById('input-container'),
  countDownFormEl = document.getElementById('countdownForm'),
  dateEl = document.getElementById('date-picker'),
  titleEl = document.getElementById('title');

const countdownEl = document.getElementById('countdown'),
  countDownTitleEl = document.getElementById('countdown-title'),
  resetBtnEl = document.getElementById('countdown-button'),
  countDownItemEl = document.querySelectorAll('span');

const completeEl = document.getElementById('complete'),
  completeInfoEl = document.getElementById('complete-info'),
  completeBtnEl = document.getElementById('complete-button');

let countDownTitle = '',
  countDownDate = '',
  countDownValue = new Date(),
  countDownActive,
  savedCountDown;

let second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

inputContainerEl.addEventListener('submit', updateCountdown);
resetBtnEl.addEventListener('click', resetCountdown);
completeBtnEl.addEventListener('click', resetCountdown);

function updateCountdown(event) {
  event.preventDefault();
  countDownTitle = event.srcElement[0].value;
  countDownDate = event.srcElement[1].value;

  savedCountDown = {
    title: countDownTitle,
    date: countDownDate,
  };

  // Add to local storage
  localStorage.setItem('countdown', JSON.stringify(savedCountDown));

  if (countDownDate === '') {
    alert('Please Select a valid date');
  } else {
    countDownValue = new Date(countDownDate).getTime();
    updateDocument();
  }
}

function updateDocument() {
  countDownActive = setInterval(() => {
    let now = new Date().getTime(),
      distance = countDownValue - now;

    let days = Math.floor(distance / day),
      hours = Math.floor((distance % day) / hour),
      minutes = Math.floor((distance % hour) / minute),
      seconds = Math.floor((distance % minute) / second);

    inputContainerEl.hidden = true;

    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countDownActive);
      completeInfoEl.textContent = `${countDownTitle} countdown finished on ${countDownDate}`;
      completeEl.hidden = false;
    } else {
      countDownTitleEl.textContent = `${countDownTitle}`;
      countDownItemEl[0].textContent = `${days}`;
      countDownItemEl[1].textContent = `${hours}`;
      countDownItemEl[2].textContent = `${minutes}`;
      countDownItemEl[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countdownEl.hidden = false;
    }
  }, second);
}

function resetCountdown() {
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainerEl.hidden = false;

  clearInterval(countDownActive);

  countDownTitle = '';
  countDownDate = '';
  titleEl.value = '';
  dateEl.value = '';
}

function restorePreviousCountdown() {
  if (localStorage.getItem('countdown')) {
    inputContainerEl.hidden = true;
    savedCountDown = JSON.parse(localStorage.getItem('countdown'));
    countDownTitle = savedCountDown.title;
    countDownDate = savedCountDown.date;
    countDownValue = new Date(countDownDate).getTime();
    console.log(savedCountDown);
    updateDocument();
  }
}

restorePreviousCountdown();
