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
  let questionAdd = `<span>${questionsData[index].numb}. ${questionsData[index].question}</span>`;
  textEl.innerHTML = questionAdd;

  let answerAdd =
    `<div class="options">${questionsData[index].options[0]}</div>` +
    `<div class="options">${questionsData[index].options[1]}</div>` +
    `<div class="options">${questionsData[index].options[2]}</div>` +
    `<div class="options">${questionsData[index].options[3]}</div>`;
  myOptionsEl.innerHTML = answerAdd;

  let totalTag = `<p>${questionsData[index].numb} OF ${questionsData.length}</p>`;
  totalQuestionEl.innerHTML = totalTag;

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
  let correctAnswer = questionsData.answer;

  if (userAnswer === correctAnswer) {
    console.log('this is correct ');
  } else {
    console.log('this is incorrect');
  }
}
