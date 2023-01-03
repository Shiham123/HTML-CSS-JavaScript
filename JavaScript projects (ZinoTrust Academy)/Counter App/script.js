const countEl = document.querySelector('.count'),
  addEl = document.querySelector('.add'),
  resetCountEl = document.querySelector('.reset'),
  subtractionEl = document.querySelector('.subtract'),
  buttonsEl = document.querySelector('.buttons');

buttonsEl.addEventListener('click', (event) => {
  if (event.target.classList.contains('add')) {
    countEl.innerHTML++;
    setColor();
  }
  if (event.target.classList.contains('subtract')) {
    countEl.innerHTML--;
    setColor();
  }
  if (event.target.classList.contains('reset')) {
    countEl.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (countEl.innerHTML > 0) {
    countEl.style.color = 'Yellow';
  } else if (countEl.innerHTML < 0) {
    countEl.style.color = 'red';
  } else {
    countEl.style.color = 'white';
  }
}
