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

let firstNumber = 0,
  secondNumber = 0,
  equationObject = {},
  wrongFormat = [];

let equationArray = [];

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
  setTimeout(showGamePage, 4000);
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

  createEquation();
  equationDOM();

  const bottomSpacer = document.createElement('div');
  bottomSpacer.classList.add('height-500');

  itemContainerEl.appendChild(bottomSpacer);
}

function createEquation() {
  const correctEquation = getRandomInt(questionAmount),
    wrongEquation = questionAmount - correctEquation;

  for (let i = 0; i < correctEquation; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber,
      equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;

    equationObject = { value: equation, evaluated: 'true' };
    equationArray.push(equationObject);
  }

  for (let i = 0; i < wrongEquation; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
    wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;

    const formatChoice = getRandomInt(2),
      equation = wrongFormat[formatChoice];

    equationObject = { value: equation, evaluated: 'false' };
    equationArray.push(equationObject);
  }
  shuffle(equationArray);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function equationDOM() {
  equationArray.forEach((equation) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const equationText = document.createElement('h1');
    equationText.textContent = equation.value;

    item.appendChild(equationText);
    itemContainerEl.appendChild(item);
  });
}

function showGamePage() {
  gamePageEl.hidden = false;
  countdownPageEl.hidden = true;
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
