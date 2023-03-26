const myBtnEl = document.querySelector('.MyBtn > button'),
  rulesBoxEl = document.querySelector('.RulesBox'),
  exitButtonEl = document.querySelector('.ExitButton'),
  questionsEl = document.querySelector('.Questions'),
  continueButtonEl = document.querySelector('.ContinueButton');

const textEl = document.querySelector('.text'),
  myOptionsEl = document.querySelector('.MyOptions'),
  totalQuestionEl = document.querySelector('.total_que'),
  nextBtnEl = document.querySelector('.nextBtn');

const timeCountEl = document.querySelector('.TimeCount .Seconds'),
  timeLineEl = document.querySelector('.time_lines');

const resultBoxEl = document.querySelector('.result_box'),
  restartQuizEl = document.querySelector('.restart1'),
  quitQuizEl = document.querySelector('.quit'),
  scoreTextEl = document.querySelector('.score_text');

let questionCounter = 0;
let timerCounter;
let timerValue = 15;

let lineCounter;
let lineValue = 0;

let userScore = 0;

myBtnEl.addEventListener('click', () => {
  rulesBoxEl.classList.add('activeInfo');
});

exitButtonEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
});

continueButtonEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
  questionsEl.classList.add('activeQuiz');

  showQuestion(questionCounter);
  startTimer(timerValue);

  startTimerLine(lineValue);
});

restartQuizEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
  resultBoxEl.classList.remove('activeResult');
  questionsEl.classList.add('activeQuiz');

  questionCounter = 0;
  userScore = 0;
  showQuestion(questionCounter);

  clearInterval(timerCounter);
  startTimer(timerValue);

  clearInterval(lineCounter);
  startTimerLine(lineValue);
});

nextBtnEl.addEventListener('click', () => {
  if (questionCounter < questionsData.length - 1) {
    questionCounter++;
    showQuestion(questionCounter);

    clearInterval(timerCounter);
    startTimer(timerValue);

    clearInterval(lineCounter);
    startTimerLine(lineValue);
  } else {
    showResult();
  }

  nextBtnEl.style.display = 'none';
});

function showQuestion(index) {
  textEl.innerHTML = `<span>${questionsData[index].numb}. ${questionsData[index].question}</span>`;
  myOptionsEl.innerHTML =
    `<div class="options">${questionsData[index].options[0]}</div>` +
    `<div class="options">${questionsData[index].options[1]}</div>` +
    `<div class="options">${questionsData[index].options[2]}</div>` +
    `<div class="options">${questionsData[index].options[3]}</div>`;
  totalQuestionEl.innerHTML = `<p>${questionsData[index].numb} of ${questionsData.length} Questions</p>`;

  const option = myOptionsEl.querySelectorAll('.options');
  for (let i = 0; i < myOptionsEl.children.length; i++) {
    option[i].setAttribute('onclick', 'selectOption(this)');
  }
}

function selectOption(answer) {
  clearInterval(lineCounter);
  clearInterval(timerCounter);

  let userAnswer = answer.textContent;
  let correctAnswer = questionsData[questionCounter].answer;

  let checkIcon = `<div><i class="fas fa-check"></i></div>`,
    crossIcon = `<div><i class="fas fa-times"></i></div>`;

  if (userAnswer === correctAnswer) {
    userScore += 1;

    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', checkIcon);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    for (let i = 0; i < myOptionsEl.children.length; i++) {
      if (myOptionsEl.children[i].textContent === correctAnswer) {
        myOptionsEl.children[i].setAttribute('class', 'options correct');
        myOptionsEl.children[i].insertAdjacentHTML('beforeend', checkIcon);
      }
    }
  }

  for (let i = 0; i < myOptionsEl.children.length; i++) {
    myOptionsEl.children[i].classList.add('disabled');
  }

  nextBtnEl.style.display = 'block';
}

function startTimer(timer) {
  timeCountEl.textContent = timer;

  timerCounter = setInterval(() => {
    timeCountEl.textContent = timer;
    timer--;

    if (timer < 9) {
      let addZero = timeCountEl.textContent;
      timeCountEl.textContent = 0 + addZero;
    }

    if (timer < 0) {
      timeCountEl.textContent = '00';
    }
  }, 1000);
}

function startTimerLine(timerLine) {
  lineCounter = setInterval(() => {
    timerLine += 1;
    timeLineEl.style.width = timerLine + 'px';

    if (timerLine > 319) {
      clearInterval(lineCounter);
    }
  }, 50);
}

function showResult() {
  rulesBoxEl.classList.remove('activeInfo');
  questionsEl.classList.remove('activeQuiz');
  resultBoxEl.classList.add('activeResult');

  if (userScore > 3) {
    scoreTextEl.innerHTML = `<span>Congratulation you got <p>${userScore}</p> Out of <p>${questionsData.length}</p></span>`;
  } else if (userScore > 1) {
    scoreTextEl.innerHTML = `<span>Carry on,  you got <p>${userScore}</p> Out of <p>${questionsData.length}</p></span>`;
  } else {
    scoreTextEl.innerHTML = `<span>no result yet try again you got <p>${userScore}</p> Out of <p>${questionsData.length}</p></span>`;
  }
}

quitQuizEl.addEventListener('click', () => {
  window.location.reload();
});
