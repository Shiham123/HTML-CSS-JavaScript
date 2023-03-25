const myBtnEl = document.querySelector('.MyBtn button'),
  rulesBoxEl = document.querySelector('.RulesBox'),
  exitButtonEl = document.querySelector('.ExitButton'),
  continueButtonEl = document.querySelector('.ContinueButton'),
  questionsEl = document.querySelector('.Questions');

const textEl = document.querySelector('.text'),
  myOptionsEl = document.querySelector('.MyOptions'),
  totalQuestionEl = document.querySelector('.total_que'),
  nextBtnEl = document.querySelector('.nextBtn');

const timeCountEl = document.querySelector('.TimeCount .Seconds'),
  timeLineEl = document.querySelector('.QuestionsHeader .time_lines');

let questionsCounter = 0;
let timeCounter;
let timeValue = 15;
let lineCounter;
let lineWidth = 0;

myBtnEl.addEventListener('click', () => {
  rulesBoxEl.classList.add('activeInfo');
});

exitButtonEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
});

continueButtonEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
  questionsEl.classList.add('activeQuiz');
  showQuestion(questionsCounter);
  startTimer(timeValue);
  startTimerLine(0);
});

nextBtnEl.addEventListener('click', () => {
  if (questionsCounter < questionsData.length - 1) {
    questionsCounter++;
    showQuestion(questionsCounter);

    clearInterval(timeCounter);
    startTimer(timeValue);

    clearInterval(lineCounter);
    startTimerLine(lineWidth);

    nextBtnEl.style.display = 'none';
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
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer) {
  clearInterval(lineCounter);
  clearInterval(timeCounter);

  let userAnswer = answer.textContent;
  let correctAnswer = questionsData[questionsCounter].answer;

  let correctIcon = `<div><i class="fas fa-check"></i></div>`,
    crossIcon = `<div><i class="fas fa-times"></i></div>`;

  if (userAnswer === correctAnswer) {
    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', correctIcon);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    for (let i = 0; i < myOptionsEl.children.length; i++) {
      if (myOptionsEl.children[i].textContent === correctAnswer) {
        myOptionsEl.children[i].setAttribute('class', 'options correct');
        myOptionsEl.children[i].insertAdjacentHTML('beforeend', correctIcon);
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

  timeCounter = setInterval(() => {
    timeCountEl.textContent = timer;
    timer--;

    if (timer < 9) {
      let addZero = timeCountEl.textContent;
      timeCountEl.textContent = 0 + addZero;
    }

    if (timer < 0) {
      timeCountEl.textContent = '00';
      clearInterval(timeCounter);
    }
  }, 1000);
}

function startTimerLine(timeLine) {
  lineCounter = setInterval(() => {
    timeLine += 1;
    timeLineEl.style.width = timeLine + 'px';

    if (timeLine > 319) {
      clearInterval(lineCounter);
    }
  }, 50);
}
