const timerEl = document.getElementById('timer'),
  startBtnEl = document.getElementById('start'),
  stopBtnEl = document.getElementById('stop'),
  resetBtnEl = document.getElementById('reset');

startBtnEl.addEventListener('click', startTimer);
stopBtnEl.addEventListener('click', stopTimer);
resetBtnEl.addEventListener('click', resetTimer);

let interval;
let timerLeft = 70;

function updateTimer() {
  let minutes = Math.floor(timerLeft / 60);
  let seconds = timerLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, '0')} : ${seconds
    .toString()
    .padStart(2, '0')}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timerLeft--;
    updateTimer();

    if (timerLeft === 0) {
      clearInterval(interval);
      alert(`time's up`);
      timerLeft = 70;
      updateTimer();
    }
  }, 1000);
  startBtnEl.disabled = true;
  startBtnEl.style.pointerEvents = 'none';
}

function stopTimer() {
  startBtnEl.disabled = false;
  startBtnEl.style.pointerEvents = 'initial';

  clearInterval(interval);
}

function resetTimer() {
  startBtnEl.disabled = false;
  startBtnEl.style.pointerEvents = 'initial';

  clearInterval(interval);
  timerLeft = 70;
  updateTimer();
}
