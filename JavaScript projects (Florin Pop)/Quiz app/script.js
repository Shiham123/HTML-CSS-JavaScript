const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];
const quizContainerEl = document.getElementById('quiz'),
  allAnswersEl = document.querySelectorAll('.answer'),
  questionEl = document.getElementById('question'),
  answerOneEl = document.getElementById('a_text'),
  answerTwoEl = document.getElementById('b_text'),
  answerThreeEl = document.getElementById('c_text'),
  answerFourEl = document.getElementById('d_text'),
  submitBtnEl = document.getElementById('submit');

let currentQuiz = 0,
  score = 0;

loadQuiz();

function loadQuiz() {
  deSelectedItem();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  answerOneEl.innerText = currentQuizData.a;
  answerTwoEl.innerText = currentQuizData.b;
  answerThreeEl.innerText = currentQuizData.c;
  answerFourEl.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  allAnswersEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deSelectedItem() {
  allAnswersEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtnEl.addEventListener('click', function () {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContainerEl.innerHTML = `<h2>You answered Correctly At ${score} / ${quizData.length} question</h2><button onclick="location.reload()">Reload</button>`;
    }
  }
});
