const timerEl = document.getElementById('timer'),
  startBtnEl = document.getElementById('start'),
  stopBtnEl = document.getElementById('stop'),
  resetBtnEl = document.getElementById('reset');

startBtnEl.addEventListener('click', startTimer);
stopBtnEl.addEventListener('click', stopTimer);
resetBtnEl.addEventListener('click', resetTimer);

let startTime = 0,
  elapsedTime = 0;

let timeInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
  resetBtnEl.disabled = false;
}

function formatTime(elapsedTime) {
  const millisecond = Math.floor((elapsedTime % 1000) / 10);
  const second = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minute = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor(elapsedTime / (1000 * 60 * 60));

  const hours = hour.toString().padStart(2, '0'),
    minutes = minute.toString().padStart(2, '0'),
    seconds = second.toString().padStart(2, '0'),
    milliseconds = millisecond.toString().padStart(2, '0');

  const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  return formattedTime;
}

function stopTimer() {
  clearInterval(timeInterval);
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}

function resetTimer() {
  clearInterval(timeInterval);
  elapsedTime = 0;
  timerEl.textContent = '00:00:00';

  startBtnEl.disabled = false;
  resetBtnEl.disabled = true;
  stopBtnEl.disabled = true;
}
