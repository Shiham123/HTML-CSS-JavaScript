const inputContainerEl = document.getElementById('input-container'),
  countdownFormEl = document.getElementById('countdown-form'),
  titleEl = document.getElementById('title'),
  datePickerEl = document.getElementById('date-picker');

inputContainerEl.addEventListener('submit', updateCountdown);

let countdownTitle = '',
  countdownDate = '',
  savedCountdown;

function updateCountdown(event) {
  event.preventDefault();
  countdownTitle = event.srcElement[0].value;
  countdownDate = event.srcElement[1].value;

  savedCountdown = {
    title: countdownTitle,
    date: countdownDate,
  };
}
