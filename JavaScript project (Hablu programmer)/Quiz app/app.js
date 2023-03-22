const myBtnEl = document.querySelector('.MyBtn button'),
  rulesBoxEl = document.querySelector('.RulesBox'),
  exitButtonEl = document.querySelector('.ExitButton'),
  questionsEl = document.querySelector('.Questions'),
  continueButtonEl = document.querySelector('.ContinueButton');

const textEl = document.querySelector('.text'),
  myOptionsEl = document.querySelector('.MyOptions'),
  nextBtnEl = document.querySelector('.nextBtn');

const totalQuestionEl = document.querySelector('.total_que');

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
  let questionAdd = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
  textEl.innerHTML = questionAdd;

  let answerAdd =
    `<div class="options">${questions[index].options[0]}</div>` +
    `<div class="options">${questions[index].options[1]}</div>` +
    `<div class="options">${questions[index].options[2]}</div>` +
    `<div class="options">${questions[index].options[3]}</div>`;
  myOptionsEl.innerHTML = answerAdd;
}

nextBtnEl.addEventListener('click', () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestion(questionCount);
  } else {
    window.location.reload();
  }
});
