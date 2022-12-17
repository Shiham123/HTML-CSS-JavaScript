const myBtn = document.querySelector('.my-btn button'),
  rulesBox = document.querySelector('.rules-box'),
  questionSection = document.querySelector('.question'),
  exitRulesButton = document.querySelectorAll('.rules-btn button')[0],
  continueRulesButton = document.querySelectorAll('.rules-btn button')[1];

myBtn.addEventListener('click', () => {
  rulesBox.classList.add('activeInfo');
});

exitRulesButton.addEventListener('click', () => {
  rulesBox.classList.remove('activeInfo');
});

continueRulesButton.addEventListener('click', () => {
  rulesBox.classList.remove('activeInfo');
  questionSection.classList.add('activeQue');
  showQuestion(0);
});

const showQuestion = (index) => {
  const questionText = document.querySelector('.answer-section');
  const answerList = document.querySelector('.my-options');
  const questionTag = `<h3>${questionsArray[index].num} . ${questionsArray[index].question}</h3>`;
  const answerTag = `<div class="option">
   <span>${questionsArray[index].options}</span>
  </div>`;

  questionText.innerHTML = questionTag;
  answerList.innerHTML = answerTag;
};
