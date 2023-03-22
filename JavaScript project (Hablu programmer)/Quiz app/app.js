const myBtnEl = document.querySelector('.MyBtn button'),
  rulesBoxEl = document.querySelector('.RulesBox'),
  exitButtonEl = document.querySelector('.ExitButton'),
  continueButtonEl = document.querySelector('.ContinueButton'),
  questionsEl = document.querySelector('.Questions');

const textEl = document.querySelector('.text'),
  myOptionsEl = document.querySelector('.MyOptions'),
  nextBtnEl = document.querySelector('.nextBtn');

let questionCount = 0;

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
});

function showQuestion(index) {
  let questionElement = `<span>${questionsData[index].numb}. ${questionsData[index].question}</span>`;
  textEl.innerHTML = questionElement;

  let answerElement =
    `<div class="options">${questionsData[0].answer}</div>` +
    `<div class="options">${questionsData[1].answer}</div>` +
    `<div class="options">${questionsData[2].answer}</div>` +
    `<div class="options">${questionsData[3].answer}</div>`;
  myOptionsEl.innerHTML = answerElement;

  const option = myOptionsEl.querySelectorAll('.options');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

nextBtnEl.addEventListener('click', () => {
  if (questionCount < questionsData.length - 1) {
    questionCount++;
    showQuestion(questionCount);
  } else {
    window.location.reload();
  }
});

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let currentAnswer = questionsData.answer;
}
