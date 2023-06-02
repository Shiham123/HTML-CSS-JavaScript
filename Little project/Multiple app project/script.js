const questionEl = document.getElementById('question'),
  scoreEl = document.getElementById('score'),
  formEl = document.getElementById('form'),
  inputEl = document.getElementById('input'),
  resetBtnEl = document.getElementById('reset');

const numOne = Math.ceil(Math.random() * 10),
  numTwo = Math.ceil(Math.random() * 10);

const correctAnswer = numOne * numTwo;

questionEl.innerText = `What is ${numOne} Multiply by ${numTwo}`;

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = 0;
}

formEl.addEventListener('submit', (e) => {
  const userInput = +inputEl.value;

  if (userInput === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

scoreEl.innerText = `Score : ${score}`;

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}

resetBtnEl.addEventListener('click', () => {
  score = 1;
  updateLocalStorage();
});
