const startFormEl = document.getElementById('start-form'),
  radioContainerEl = document.querySelectorAll('.radio-container'),
  radioInputEl = document.querySelectorAll('input'),
  splashPageEl = document.getElementById('splash-page'),
  countdownPageEl = document.getElementById('countdown-page'),
  countdownEl = document.querySelector('.countdown'),
  gamePageEl = document.getElementById('game-page'),
  itemContainerEl = document.querySelector('.item-container');

let questionAmount = 0,
  firstNumber = 0,
  secondNumber = 0,
  equationObject = {},
  equationArray = [],
  wrongFormat = [];

startFormEl.addEventListener('submit', showQuestionAmount);
startFormEl.addEventListener('click', () => {
  radioContainerEl.forEach((element) => {
    if (element.children[1].checked) {
      element.classList.add('selected-label');
    } else {
      element.classList.remove('selected-label');
    }
  });
});

function showQuestionAmount(event) {
  event.preventDefault();
  questionAmount = getRadioValue();
  if (questionAmount) {
    showCountdownPage();
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

function showCountdownPage() {
  splashPageEl.hidden = true;
  countdownPageEl.hidden = false;
  startCountdown();
  populateGamePage();
  setTimeout(showGamePage, 4000);
}

function startCountdown() {
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

function showGamePage() {
  countdownPageEl.hidden = true;
  gamePageEl.hidden = false;
}

function populateGamePage() {
  itemContainerEl.textContent = '';

  const topSpacer = document.createElement('div');
  topSpacer.classList.add('height-240');

  const selectedItem = document.createElement('div');
  selectedItem.classList.add('selected-item');

  itemContainerEl.append(topSpacer, selectedItem);

  createEquation();
  equationDOM();

  const bottomSpacer = document.createElement('div');
  bottomSpacer.classList.add('height-500');

  itemContainerEl.appendChild(bottomSpacer);
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

  const wrongEquation = getRandomInt(questionAmount);
  for (let i = 0; i < wrongEquation; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber} x ${secondNumber - 1} = ${equationValue}`;
    wrongFormat[2] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;

    const formatChoice = getRandomInt(2),
      equation = wrongFormat[formatChoice];

    equationObject = { value: equation, evaluated: 'false' };
    equationArray.push(equationObject);
  }
}

function getRandomInt(array) {
  return Math.floor(Math.random() * Math.floor(array));
}

function equationDOM() {
  equationArray.forEach((equation) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const equationText = document.createElement('h1');
    equationText.textContent = equation.value;

    item.append(equationText);
    itemContainerEl.appendChild(item);
  });
}
