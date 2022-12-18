const dashesContainer = document.querySelector('.clock-dashes');
const numbersContainer = document.querySelector('.clock-numbers');

const hoursPointer = document.querySelector('.hours');
const minutePointer = document.querySelector('.minutes');
const secondsPointer = document.querySelector('.seconds');

for (let i = 1; i <= 60; i++) {
  const element = `<div class="clock-dash" style="--i:${i}"></div>`;
  dashesContainer.insertAdjacentHTML('beforeend', element);
}

for (let j = 1; j <= 12; j++) {
  const angleInRadian = (j * 30 * Math.PI) / 180;
  const yFactor = Math.cos(angleInRadian);
  const xFactor = Math.sin(angleInRadian);

  const element = `<div class="clock-number" style=" --xFactor:${xFactor}; --yFactor:${yFactor}" >${j}</div>`;
  numbersContainer.insertAdjacentHTML('beforeend', element);
}

function setTime() {
  const date = new Date();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hoursAngle = interpolation(hours, 12, 0, 360, 0);
  const minutesAngle = interpolation(minutes, 60, 0, 360, 0);
  const secondsAngle = interpolation(seconds, 60, 0, 360, 0);

  hoursPointer.style.setProperty('--angle', hoursAngle + 'deg');
  minutePointer.style.setProperty('--angle', minutesAngle + 'deg');
  secondsPointer.style.setProperty('--angle', secondsAngle + 'deg');
}

setInterval(setTime, 1000);

function interpolation(x, xMax, xMin, yMax, yMin) {
  return yMin + (x - xMin) * ((yMax - yMin) / (xMax - xMin));
}
