const gamePageEl = document.getElementById('game-page'),
  scorePageEl = document.getElementById('score-page'),
  splashPageEl = document.getElementById('splash-page'),
  countdownPageEl = document.getElementById('countdown-page');

// splash page
const startFormEl = document.getElementById('start-form'),
  radioContainerEl = document.querySelectorAll('.radio-container'),
  radioInputEl = document.querySelectorAll('input'),
  bestScoreValueEl = document.querySelectorAll('.best-score-value');

const countdownEl = document.querySelector('.countdown'),
  itemContainerEl = document.querySelector('.item-container');

const finalTimeEl = document.querySelector('.final-time'),
  baseTimeEl = document.querySelector('.base-time'),
  penaltyTimeEl = document.querySelector('.penalty-time'),
  playAgainBtnEl = document.querySelector('.play-again');

let questionAmount = 0;

startFormEl.addEventListener('submit', startQuestionAmount);
startFormEl.addEventListener('click', () => {
  radioContainerEl.forEach((radioEl) => {
    radioEl.classList.remove('selected-label');

    if (radioEl.children[1].checked) {
      radioEl.classList.add('selected-label');
    }
  });
});

function startQuestionAmount(event) {
  event.preventDefault();
  questionAmount = getRadioValue();
  // console.log('question amount', questionAmount);
  if (questionAmount) {
    showCountdown();
  }
}

function getRadioValue() {
  let radioValue;
  radioInputEl.forEach((input) => {
    if (input.checked) {
      radioValue = input.value;
    }
  });
  return radioValue;
}

function showCountdown() {
  countdownPageEl.hidden = false;
  splashPageEl.hidden = true;
  countdownStart();
  populateGamePage();
}

function countdownStart() {
  countdownEl.textContent = '3';
  setTimeout(() => {
    countdownEl.textContent = '2';
  }, 1000);
  setTimeout(() => {
    countdownEl.textContent = '1';
  }, 2000);
  setTimeout(() => {
    countdownEl.textContent = 'GO';
  }, 3000);
}

function populateGamePage() {
  itemContainerEl.textContent = '';

  const topScorer = document.createElement('div');
  topScorer.classList.add('height-240');

  const selectedItem = document.createElement('div');
  selectedItem.classList.add('selected-item');

  itemContainerEl.append(topScorer, selectedItem);

  const bottomSpacer = document.createElement('div');
  bottomSpacer.classList.add('height-500');

  itemContainerEl.appendChild(bottomSpacer);
}
