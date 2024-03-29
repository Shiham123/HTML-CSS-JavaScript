const numOne = Math.ceil(Math.random() * 10),
  numTwo = Math.ceil(Math.random() * 10);

const questionElement = document.getElementById('question'),
  formElement = document.getElementById('form'),
  inputElement = document.getElementById('input'),
  scoreElement = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
  score = 0;
}

scoreElement.innerText = `Score : ${score}`;
questionElement.innerText = `what is ${numOne} multiply by ${numTwo}?`;
const correctAnswer = numOne * numTwo;

formElement.addEventListener('submit', () => {
  const userAns = +inputElement.value;

  if (userAns === correctAnswer) {
    score++;
    localScore();
  } else {
    score--;
    localScore();
  }
});

function localScore() {
  localStorage.setItem('score', JSON.stringify(score));
}
