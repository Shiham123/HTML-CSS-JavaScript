const countElement = document.querySelector('.counter');
const barElement = document.querySelector('.loading-bar-front');

let indexNumber = 0;
const updateNow = () => {
  countElement.innerText = `${indexNumber}%`;
  barElement.style.width = `${indexNumber}%`;
  indexNumber++;

  if (indexNumber < 101) {
    setTimeout(updateNow, 50);
  }
};

updateNow();
