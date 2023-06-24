const startFormEl = document.getElementById('start-form'),
  radioContainerEl = document.querySelectorAll('.radio-container'),
  radioInputEl = document.querySelectorAll('input'),
  splashPageEl = document.getElementById('splash-page'),
  countdownPageEl = document.getElementById('countdown-page'),
  countdownEl = document.querySelector('.countdown'),
  itemContainerEl = document.querySelector('.item-container'),
  gamePageEl = document.getElementById('game-page');

let questionAmount = 0,
  firstNumber = 0,
  secondNumber = 0,
  equationObject = {},
  equationArray = [],
  wrongFormat = [];

startFormEl.addEventListener('submit', startQuestionAmount);
startFormEl.addEventListener('click', () => {
  radioContainerEl.forEach((element) => {
    element.classList.remove('selected-label');

    if (element.children[1].checked) {
      element.classList.add('selected-label');
    }
  });
});

function startQuestionAmount(event) {
  event.preventDefault();
  questionAmount = getRadioValue();
  if (questionAmount) {
    showCountDown();
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

function showCountDown() {
  splashPageEl.hidden = true;
  countdownPageEl.hidden = false;
  countdownStart();
  populateGamePage();
  setTimeout(showGamePage, 4000);
}

function showGamePage() {
  gamePageEl.hidden = false;
  countdownPageEl.hidden = true;
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
  const topScorer = document.createElement('div');
  topScorer.classList.add('height-240');

  const selectedItem = document.createElement('div');
  selectedItem.classList.add('selected-item');

  itemContainerEl.append(topScorer, selectedItem);

  const bottomSpacer = document.createElement('div');
  bottomSpacer.classList.add('height-500');

  itemContainerEl.appendChild(bottomSpacer);
  createEquation();
  equationDOM();
}

function createEquation() {
  const correctEquation = getRandomInt(questionAmount);
  for (let i = 0; i < correctEquation; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber,
      equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;

    equationObject = { value: equation, evaluated: 'true' };
    equationArray.push(equationObject);
  }

  const wrongEquation = questionAmount - correctEquation;
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
}

function getRandomInt(amount) {
  return Math.floor(Math.random() * Math.floor(amount));
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
