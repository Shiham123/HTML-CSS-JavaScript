const nextEl = document.querySelector('#next'),
  prevEl = document.querySelector('#prev'),
  stepsEl = document.querySelectorAll('.step'),
  progressEl = document.querySelector('.progress-bar-front');

let currentChecked = 1,
  stepsLength = stepsEl.length;

nextEl.addEventListener('click', () => {
  currentChecked++;

  if (currentChecked > stepsLength) {
    currentChecked = stepsLength;
  }

  updateStepProgress();
});

prevEl.addEventListener('click', () => {
  currentChecked--;

  if (currentChecked < 1) {
    currentChecked = 1;
  }

  updateStepProgress();
});

function updateStepProgress() {
  stepsEl.forEach((stepEl, index) => {
    if (index < currentChecked) {
      stepEl.classList.add('checked');
      stepEl.innerHTML = `<i class="fas fa-check"></i>
      <small>${
        index === 0
          ? 'Start'
          : index === stepsLength - 1
          ? 'Final'
          : 'Step ' + index
      }</small>`;
    } else {
      stepEl.classList.remove('checked');
      stepEl.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  const checkNumber = document.querySelectorAll('.checked');
  progressEl.style.width = `${
    ((checkNumber.length - 1) / (stepsLength - 1)) * 100
  }%`;

  if (currentChecked === 1) {
    prevEl.disabled = true;
  } else if (currentChecked === stepsLength) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}
