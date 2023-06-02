const nextBtnEl = document.getElementById('next'),
  prevBtnEl = document.getElementById('prev');

const progressEl = document.querySelector('.progress-bar-front'),
  stepsEl = document.querySelectorAll('.step');

let currentNumber = 1;

nextBtnEl.addEventListener('click', () => {
  currentNumber++;
  if (currentNumber > stepsEl.length - 1) {
    currentNumber = stepsEl.length;
  }
  updateProgressBar();
});

prevBtnEl.addEventListener('click', () => {
  currentNumber--;
  if (currentNumber < 1) {
    currentNumber = 1;
  }
  updateProgressBar();
});

function updateProgressBar() {
  stepsEl.forEach((item, index) => {
    if (index < currentNumber) {
      item.classList.add('checked');
      item.innerHTML = `<i class="fas fa-check"></i>
      <small>${
        index === 0
          ? 'Start'
          : index === stepsEl.length - 1
          ? 'Final'
          : 'Step' + index
      }</small>
      `;
    } else {
      item.classList.remove('checked');
      item.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  const checkedNumber = document.querySelectorAll('.checked');
  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + '%';

  if (currentNumber === stepsEl.length) {
    nextBtnEl.disabled = true;
  } else if (currentNumber === 1) {
    prevBtnEl.disabled = true;
  } else {
    nextBtnEl.disabled = false;
    prevBtnEl.disabled = false;
  }
}
