const myBtnEl = document.querySelector('.MyBtn button'),
  rulesBoxEl = document.querySelector('.RulesBox'),
  exitButtonEl = document.querySelector('.ExitButton'),
  continueButtonEl = document.querySelector('.ContinueButton'),
  questionsEl = document.querySelector('.Questions');

const textEl = document.querySelector('.text'),
  myOptionsEl = document.querySelector('.MyOptions'),
  totalQuestionEl = document.querySelector('.total_que'),
  nextBtnEl = document.querySelector('.nextBtn');

const timeCountEl = document.querySelector('.TimeCount .Seconds');

let questionCounter = 0;
let counterTimer;
let timerValue = 15;

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
});

nextBtnEl.addEventListener('click', () => {
  if (questionCounter < questionsData.length - 1) {
    questionCounter++;
    showQuestion(questionCounter);
    clearInterval(counterTimer);
    startTimer(timerValue);
  } else {
    window.location.reload();
  }
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
    option[i].setAttribute('onclick', 'selectedOption(this)');
  }
}

function selectedOption(answer) {
  clearInterval(counterTimer);
  let userAnswer = answer.textContent;
  let correctAnswer = questionsData[questionCounter].answer;

  let checkIcon = `<div><i class="fas fa-check"></i></div>`,
    crossIcon = `<div><i class="fas fa-times"></i></div>`;

  if (userAnswer === correctAnswer) {
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
}

function startTimer(timer) {
  timeCountEl.textContent = timer;

  counterTimer = setInterval(() => {
    timeCountEl.textContent = timer;
    timer--;
  }, 1000);
}
