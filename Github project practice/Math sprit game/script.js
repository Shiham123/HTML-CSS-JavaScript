const startFormEl = document.getElementById('start-form'),
  radioContainerEl = document.querySelectorAll('.radio-container'),
  inputEl = document.querySelectorAll('input'),
  splashPageEl = document.getElementById('splash-page'),
  countdownPageEl = document.getElementById('countdown-page'),
  countdownEl = document.querySelector('.countdown'),
  gamePageEl = document.getElementById('game-page'),
  itemContainerEl = document.querySelector('.item-container');

const correctValueEl = document.querySelector('.correct-value'),
  wrongValueEl = document.querySelector('.wrong-value'),
  finalTimeEl = document.querySelector('.final-time'),
  baseTimeEl = document.querySelector('.base-time'),
  penaltyTimeEl = document.querySelector('.penalty-time'),
  scorePageEl = document.getElementById('score-page'),
  playAgainBtnEl = document.querySelector('.play-again'),
  bestScoreValueEl = document.querySelectorAll('.best-score-value');

let questionAmount = 0,
  equationObject = {},
  equationArray = [],
  firstNumber = 0,
  secondNumber = 0,
  wrongFormat = [];

let verticalValue = 0,
  playerGuessArray = [],
  timePlayed = 0,
  penaltyTime = 0,
  finalTime = 0,
  timer,
  correctValue = 0,
  wrongValue = 0,
  finalTimeDisplay = '0.0',
  baseTime = 0;

let bestScoreArray = [];

startFormEl.addEventListener('submit', startQuestionAmount);
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

gamePageEl.addEventListener('click', startTimer);
playAgainBtnEl.addEventListener('click', playAgain);

function startQuestionAmount(event) {
  event.preventDefault();
  questionAmount = getRadioValue();
  if (questionAmount) {
    startCountdownPage();
  }
}

function getRadioValue() {
  let radioValue;
  inputEl.forEach((item) => {
    if (item.checked) {
      radioValue = item.value;
    }
  });
  return radioValue;
}

function startCountdownPage() {
  splashPageEl.hidden = true;
  countdownPageEl.hidden = false;
  startCountDown();
  populateGamePage();

  setTimeout(showGamePage, 4000);
}

function startCountDown() {
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
  const topSpacer = document.createElement('div');
  topSpacer.classList.add('height-240');

  const selectedItem = document.createElement('div');
  selectedItem.classList.add('selected-item');
  itemContainerEl.append(topSpacer, selectedItem);

  createEquation();
  equationToDOM();

  const bottomSpacer = document.createElement('div');
  bottomSpacer.classList.add('height-500');

  itemContainerEl.appendChild(bottomSpacer);
}

function createEquation() {
  const correctEquation = getRandomInt(questionAmount);
  console.log(`Correct equation : ${correctEquation}`);

  for (let i = 0; i < correctEquation; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber,
      equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;

    equationObject = { value: equation, evaluated: 'true' };
    equationArray.push(equationObject);
  }

  const wrongEquation = questionAmount - correctEquation;
  console.log(`Wrong equation : ${wrongEquation}`);

  for (let i = 0; i < wrongEquation; i++) {
    firstNumber = getRandomInt(9);
    secondNumber = getRandomInt(9);
    const equationValue = firstNumber * secondNumber;
    wrongFormat[0] = `${firstNumber - 1} x ${secondNumber} = ${equationValue}`;
    wrongFormat[1] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
    wrongFormat[2] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;

    const formatChoice = getRandomInt(2),
      equation = wrongFormat[formatChoice];

    equationObject = { value: equation, evaluated: 'false' };
    equationArray.push(equationObject);
  }
  shuffle(equationArray);
}

function getRandomInt(array) {
  return Math.floor(Math.random() * Math.floor(array));
}

function equationToDOM() {
  equationArray.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('item');

    const itemContent = document.createElement('h1');
    itemContent.textContent = item.value;

    element.append(itemContent);
    itemContainerEl.appendChild(element);
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryIndex,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryIndex = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryIndex;
  }
  return array;
}

/**
 * ? =====================
 * ? section tow
 * ! section two
 */

function select(guessNumber) {
  verticalValue += 80;
  itemContainerEl.scrollTo({
    top: verticalValue,
    behavior: 'smooth',
  });

  return guessNumber
    ? playerGuessArray.push('true')
    : playerGuessArray.push('false');
}

function startTimer() {
  timePlayed = 0;
  penaltyTime = 0;
  finalTime = 0;
  timer = setInterval(addTime, 100);
  gamePageEl.removeEventListener('click', startTimer);
}

function addTime() {
  timePlayed += 0.1;
  checkTime();
}

function checkTime() {
  console.log(timePlayed);

  if (playerGuessArray.length == questionAmount) {
    clearInterval(timer);

    equationArray.forEach((equation, index) => {
      if (equation.evaluated === playerGuessArray[index]) {
        correctValue++;
      } else {
        wrongValue++;
        penaltyTime += 0.5;
      }
    });

    finalTime = timePlayed + penaltyTime;
    console.log(
      `Time Played : ${timePlayed}, penalty Time : ${penaltyTime}, Final time : ${finalTime}`
    );
    scoreToDOM();
  }
}

function scoreToDOM() {
  finalTimeDisplay = finalTime.toFixed(1);
  baseTime = timePlayed.toFixed(1);
  penaltyTime = penaltyTime.toFixed(1);

  finalTimeEl.textContent = `Final time : ${finalTimeDisplay}`;
  penaltyTimeEl.textContent = `Penalty time : ${penaltyTime}`;
  baseTimeEl.textContent = `Base time : ${baseTime}`;
  correctValueEl.textContent = `Correct value : ${correctValue}`;
  wrongValueEl.textContent = `Wrong value : ${wrongValue}`;

  updateBestScore();

  itemContainerEl.scrollTo({
    top: 0,
    behavior: 'instant',
  });
  showScorePage();
}

function showScorePage() {
  gamePageEl.hidden = true;
  scorePageEl.hidden = false;
}

function playAgain() {
  gamePageEl.addEventListener('click', startTimer);
  scorePageEl.hidden = true;
  splashPageEl.hidden = false;
  equationArray = [];
  playerGuessArray = [];
  verticalValue = 0;
  playAgainBtnEl.hidden = true;
}

/**
 * ! *********************
 * ! localStorage section
 */

function getSavedBestScore() {
  if (localStorage.getItem('bestScores')) {
    bestScoreArray = JSON.parse(localStorage.getItem('bestScores'));
  } else {
    bestScoreArray = [
      { question: 10, bestScore: finalTimeDisplay },
      { question: 25, bestScore: finalTimeDisplay },
      { question: 50, bestScore: finalTimeDisplay },
      { question: 99, bestScore: finalTimeDisplay },
    ];
  }

  bestScoreToDOM();
  localStorage.setItem('bestScores', JSON.stringify(bestScoreArray));
}

function updateBestScore() {
  bestScoreArray.forEach((score, index) => {
    if (questionAmount == score.question) {
      const savedBestScore = Number(bestScoreArray[index].bestScore);

      if (savedBestScore === 0 || savedBestScore > finalTime) {
        bestScoreArray[index].bestScore = finalTimeDisplay;
      }
    }
  });

  bestScoreToDOM();
  localStorage.setItem('bestScores', JSON.stringify(bestScoreArray));
}

function bestScoreToDOM() {
  bestScoreValueEl.forEach((item, index) => {
    const bestScoreValue = item;
    bestScoreValue.textContent = `${bestScoreArray[index].bestScore}`;
  });
}

getSavedBestScore();
