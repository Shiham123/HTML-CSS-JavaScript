const hourElement = document.querySelector('.hour'),
  minuteElement = document.querySelector('.minute'),
  secondElement = document.querySelector('.second');

const updateClock = () => {
  const currentClock = new Date();
  setTimeout(updateClock, 1000);
  const hours = currentClock.getHours();
  const minutes = currentClock.getMinutes();
  const seconds = currentClock.getSeconds();

  const hourDeg = (hours / 12) * 360;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;

  const minuteDeg = (minutes / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;

  const secondDeg = (seconds / 60) * 360;
  secondElement.style.transform = `rotate(${secondDeg}deg)`;
};

updateClock();
