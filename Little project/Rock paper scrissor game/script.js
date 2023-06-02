const btnEl = document.querySelectorAll('button'),
  resultEl = document.getElementById('result'),
  userScoreEl = document.getElementById('user-score'),
  computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

btnEl.forEach((btn) => {
  btn.addEventListener('click', () => {
    const result = showScore(btn.id, getComputerScore());
    resultEl.textContent = result;
  });
});

function getComputerScore() {
  const element = ['rock', 'paper', 'scissors'];
  const result = Math.floor(Math.random() * element.length);
  return element[result];
}

function showScore(player, computer) {
  if (player === computer) {
    return `it's a tie`;
  } else if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    playerScore++;
    userScoreEl.textContent = playerScore;
    return `You win! ${player} beats ${computer}`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return `You lose! ${computer} beats ${player}`;
  }
}
