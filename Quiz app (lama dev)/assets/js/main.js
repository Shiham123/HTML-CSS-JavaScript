const data = [
  {
    id: 1,
    question: 'which is the hyper text markup language ?',
    answers: [
      { answer: 'HTML', isCorrect: true },
      { answer: 'CSS', isCorrect: false },
      { answer: 'JavaScript', isCorrect: false },
      { answer: 'PHP', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'which is the style Sheet language ?',
    answers: [
      { answer: 'HTML', isCorrect: false },
      { answer: 'CSS', isCorrect: true },
      { answer: 'JavaScript', isCorrect: false },
      { answer: 'PHP', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'which is the scripting language ?',
    answers: [
      { answer: 'HTML', isCorrect: false },
      { answer: 'CSS', isCorrect: false },
      { answer: 'JavaScript', isCorrect: true },
      { answer: 'PHP', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'which is the CSS library function ?',
    answers: [
      { answer: 'HTML', isCorrect: false },
      { answer: 'Bootstrap', isCorrect: true },
      { answer: 'JavaScript', isCorrect: false },
      { answer: 'PHP', isCorrect: false },
    ],
  },
  {
    id: 5,
    question: 'which is the JavaScript library function ?',
    answers: [
      { answer: 'HTML', isCorrect: false },
      { answer: 'Bootstrap', isCorrect: false },
      { answer: 'ReactJs', isCorrect: true },
      { answer: 'PHP', isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector('.game'),
  resultScreen = document.querySelector('.result-container'),
  questionSection = document.querySelector('.question'),
  answerContainer = document.querySelector('.answers'),
  submitButton = document.querySelector('.submit'),
  playStart = document.querySelector('.play');

let qIndex = 0,
  correctCount = 0,
  wrongCount = 0,
  total = 0,
  selectedAnswer;

const play = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

playStart.addEventListener('click', () => {
  gameScreen.style.display = 'block';
  resultScreen.style.display = 'none';
  play();
});

const showResult = () => {
  gameScreen.style.display = 'none';
  resultScreen.style.display = 'block';

  resultScreen.querySelector(
    '.correct'
  ).textContent = `Correct answer : ${correctCount}`;

  resultScreen.querySelector(
    '.wrong'
  ).textContent = `Wrong answer : ${wrongCount}`;

  resultScreen.querySelector('.score').textContent = `Score : ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  questionSection.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
    <input name="answer" type="radio" id="${index}" value="${item.isCorrect}" />
    <label for="${index}">${item.answer}</label>
  </div>
  `
    )
    .join('');

  selectAnswer();
};

const selectAnswer = () => {
  answerContainer.querySelectorAll('input').forEach((element) => {
    element.addEventListener('click', (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitSection = () => {
  submitButton.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert('please select the element');
  });
};

showQuestion(qIndex);
submitSection();
