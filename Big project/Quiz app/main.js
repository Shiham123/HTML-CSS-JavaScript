const boxOneEl = document.getElementById('box-one'),
  boxTwoEl = document.getElementById('box-two'),
  boxThreeEl = document.getElementById('box-three'),
  boxFourEl = document.getElementById('box-four');

const startQuizBtnEl = document.getElementById('start-quiz'),
  exitBtnEl = document.getElementById('exitBtn'),
  continueBtnEl = document.getElementById('continueBtn'),
  nextQuizBtnEl = document.getElementById('nextQuiz'),
  quitQuizBtnEl = document.getElementById('quitQuiz'),
  replyQuizBtnEl = document.getElementById('replyQuiz');

const questionEl = document.getElementById('question'),
  optionEl = document.getElementById('option'),
  totalEl = document.getElementById('total'),
  timerCountEl = document.getElementById('seconds'),
  timerLineEl = document.getElementById('timer-lines'),
  resultContentEl = document.getElementById('result-content');

let questionCount = 0;
let timerCounter;
let timerValue = 15;
let lineCounter;
let lineValue = 0;
let userScore = 0;

startQuizBtnEl.addEventListener('click', () => {
  boxOneEl.style.display = 'none';
  boxTwoEl.style.display = 'block';
});

exitBtnEl.addEventListener('click', () => {
  boxTwoEl.style.display = 'none';
  boxOneEl.style.display = 'block';
});

continueBtnEl.addEventListener('click', () => {
  boxOneEl.style.display = 'none';
  boxTwoEl.style.display = 'none';
  boxThreeEl.style.display = 'block';

  showQuiz(questionCount);
  startTimer(timerValue);
  startTimerLine(lineValue);
});

nextQuizBtnEl.addEventListener('click', () => {
  if (questionCount < quizData.length - 1) {
    questionCount++;
    showQuiz(questionCount);

    clearInterval(timerCounter);
    startTimer(timerValue);

    clearInterval(lineCounter);
    startTimerLine(lineValue);
  } else {
    boxThreeEl.style.display = 'none';
    boxFourEl.style.display = 'block';
    showResult(userScore);
  }
});

quitQuizBtnEl.addEventListener('click', () => {
  location.reload();
});

replyQuizBtnEl.addEventListener('click', () => {
  boxFourEl.style.display = 'none';
  boxTwoEl.style.display = 'block';

  questionCount = 0;
  userScore = 0;
  if (questionCount < quizData.length - 1) {
    showQuiz(questionCount);
    showResult(userScore);
  }
});

function showQuiz(index) {
  questionEl.innerHTML = `<h1>${quizData[index].question}</h1>`;
  optionEl.innerHTML =
    `<div class="options">${quizData[index].options[0]}</div>` +
    `<div class="options">${quizData[index].options[1]}</div>` +
    `<div class="options">${quizData[index].options[2]}</div>` +
    `<div class="options">${quizData[index].options[3]}</div>`;
  totalEl.innerHTML = `<p>${quizData[index].numb} of ${quizData.length}</p>`;

  for (let i = 0; i < optionEl.children.length; i++) {
    optionEl.children[i].setAttribute('onclick', 'selectedOption(this)');
  }

  nextQuizBtnEl.style.display = 'none';
}

function selectedOption(answer) {
  clearInterval(lineCounter);
  clearInterval(timerCounter);

  let userAnswer = answer.textContent;
  let correctAnswer = quizData[questionCount].correct;

  let checkIcon = `<i class="fa-solid fa-check"></i>`,
    crossIcon = `<i class="fa-solid fa-times"></i>`;

  if (userAnswer === correctAnswer) {
    userScore += 1;

    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', checkIcon);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    for (let i = 0; i < optionEl.children.length; i++) {
      if (optionEl.children[i].textContent === correctAnswer) {
        optionEl.children[i].insertAdjacentHTML('beforeend', checkIcon);
        optionEl.children[i].classList.add('correct');
      }
      optionEl.children[i].classList.add('disabled');
    }
  }
  nextQuizBtnEl.style.display = 'block';
}

function startTimer(timer) {
  timerCountEl.textContent = timer;

  timerCounter = setInterval(() => {
    timerCountEl.textContent = timer;
    timer--;

    if (timer < 0) {
      clearInterval(timerCounter);

      for (let i = 0; i < optionEl.children.length; i++) {
        optionEl.children[i].classList.add('disabled');
      }

      totalEl.innerHTML = '<p>Please reload the page</p>';
    }

    if (timer < 9) {
      timerCountEl.textContent = 0 + timerCountEl.textContent;
    }
  }, 1000);
}

function startTimerLine(line) {
  lineCounter = setInterval(() => {
    timerLineEl.style.width = line + 'px';
    line++;

    if (line > 500) {
      clearInterval(lineCounter);
    }
  }, 30);
}

function showResult(score) {
  if (score < 3) {
    resultContentEl.innerHTML = `<h3>Not good, Your result is ${score} Out Of ${quizData.length}</h3>`;
  } else if (score < 5) {
    resultContentEl.innerHTML = `<h3>Your must be improved, Your result is ${score} out of ${quizData.length}</h3>`;
  } else {
    resultContentEl.innerHTML = `<h3>Excellent, Your are good, Your result is ${score} Out of ${quizData.length}</h3>`;
  }
}

showQuiz(questionCount);
