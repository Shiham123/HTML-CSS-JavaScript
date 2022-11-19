// MCQ data section

const data = [
  {
    id: 1,
    question: 'Which is these is a hyper text markup language?',
    answers: [
      { answer: 'HTML', isCorrect: true },
      { answer: 'CSS', isCorrect: false },
      { answer: 'Scss', isCorrect: false },
      { answer: 'JavaScript', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'Which is these is scripting language?',
    answers: [
      { answer: 'javaScript', isCorrect: true },
      { answer: 'Python', isCorrect: false },
      { answer: 'PHP', isCorrect: false },
      { answer: 'Java', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'Which is these is CSS library?',
    answers: [
      { answer: 'typeScript', isCorrect: false },
      { answer: 'ReactJs', isCorrect: false },
      { answer: 'Bootstrap', isCorrect: true },
      { answer: 'Angular js', isCorrect: false },
    ],
  },
  {
    id: 4,
    question: 'Which is these is javaScript library?',
    answers: [
      { answer: 'Bootstrap', isCorrect: false },
      { answer: 'ReactJs', isCorrect: true },
      { answer: 'Bulma', isCorrect: false },
      { answer: 'tailwind', isCorrect: false },
    ],
  },
];

// adding html with DOM

const gameContainer = document.querySelector('.game'),
  resultContainer = document.querySelector('.result'),
  questionSection = document.querySelector('.question'),
  answerContainer = document.querySelector('.answers'),
  submit = document.querySelector('.submit'),
  playButton = document.querySelector('.play');

let qIndex = 0,
  correctCount = 0,
  wrongCount = 0,
  total = 0,
  selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

playButton.addEventListener('click', () => {
  resultContainer.style.display = 'none';
  gameContainer.style.display = 'block';
  playAgain();
});

const showResult = () => {
  resultContainer.style.display = 'block';
  gameContainer.style.display = 'none';

  resultContainer.querySelector(
    '.correct'
  ).textContent = `Correct answer : ${correctCount}`;

  resultContainer.querySelector(
    '.wrong'
  ).textContent = `Wrong answer : ${wrongCount} `;

  resultContainer.querySelector('.score').textContent = `Score : ${
    (correctCount - wrongCount) * 10
  } `;
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

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert('select a answer');
  });
};

showQuestion(qIndex);
submitAnswer();
