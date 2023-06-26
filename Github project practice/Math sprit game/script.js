const startFormEl = document.getElementById('start-form'),
  radioContainerEl = document.querySelectorAll('.radio-container'),
  radioInputEl = document.querySelectorAll('input'),
  countdownPageEl = document.getElementById('countdown-page'),
  countdownEl = document.querySelector('.countdown'),
  splashPageEl = document.getElementById('splash-page'),
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
  radioContainerEl.forEach((item) => {
    item.classList.remove('selected-label');

    for (let i = 0; i < item.children.length; i++) {
      if (item.children[i].checked) {
        item.classList.add('selected-label');
      }
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
  radioInputEl.forEach((element) => {
    if (element.checked) {
      radioValue = element.value;
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
  gamePageEl.hidden = false;
  countdownPageEl.hidden = true;
}

function populateGamePage() {
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
    wrongFormat[3] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;

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
  equationArray.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('item');

    const elementText = document.createElement('h1');
    elementText.textContent = item.value;

    element.append(elementText);
    itemContainerEl.appendChild(element);
  });
}
