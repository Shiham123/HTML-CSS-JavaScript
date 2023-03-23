const myBtnEl = document.querySelector('.MyBtn button'),
  rulesBoxEl = document.querySelector('.RulesBox'),
  exitButtonEl = document.querySelector('.ExitButton'),
  continueButtonEl = document.querySelector('.ContinueButton'),
  questionsEl = document.querySelector('.Questions'),
  nextBtnEl = document.querySelector('.nextBtn');

const textEl = document.querySelector('.text'),
  myOptionsEl = document.querySelector('.MyOptions'),
  totalQuestionEl = document.querySelector('.total_que');

const timeCountEl = document.querySelector('.TimeCount .Seconds'),
  secondsEl = document.querySelector('.Seconds');

let questionCount = 0;
let timerCounter;
let timeValue = 5;

myBtnEl.addEventListener('click', () => {
  rulesBoxEl.classList.add('activeInfo');
});

exitButtonEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
});

continueButtonEl.addEventListener('click', () => {
  rulesBoxEl.classList.remove('activeInfo');
  questionsEl.classList.add('activeQuiz');
  showQuestion(0);
  startTime(5);
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
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

nextBtnEl.addEventListener('click', () => {
  if (questionCount < questionsData.length - 1) {
    questionCount++;
    showQuestion(questionCount);
    clearInterval(timerCounter);
    startTime(timeValue);
  } else {
    window.location.reload();
  }
});

function optionSelected(answer) {
  clearInterval(timerCounter);
  let userAnswer = answer.textContent;
  let correctAnswer = questionsData[questionCount].answer;

  let tickIcon = `<div class="tick icon"><i class="fas fa-check"></i></div>`,
    crossIcon = `<div class="cross icon"><i class="fas fa-times"></i></div>`;

  if (userAnswer === correctAnswer) {
    answer.classList.add('correct');
    answer.insertAdjacentHTML('beforeend', tickIcon);
  } else {
    answer.classList.add('incorrect');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    for (let i = 0; i < myOptionsEl.children.length; i++) {
      if (myOptionsEl.children[i].textContent === correctAnswer) {
        myOptionsEl.children[i].setAttribute('class', 'options correct');
        myOptionsEl.children[i].insertAdjacentHTML('beforeend', tickIcon);
      }
    }
  }

  for (let i = 0; i < myOptionsEl.children.length; i++) {
    myOptionsEl.children[i].classList.add('disabled');
  }
}

function startTime(timer) {
  secondsEl.innerHTML = timer;
  timerCounter = setInterval(() => {
    timeCountEl.textContent = timer;
    timer--;
  }, 1000);
}
