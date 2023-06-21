const gamePageEl = document.getElementById('game-page'),
  scorePageEl = document.getElementById('score-page'),
  splashPageEl = document.getElementById('splash-page'),
  countdownPageEl = document.getElementById('countdown-page');

// splash page
const startFormEl = document.getElementById('start-form'),
  radioContainerEl = document.querySelectorAll('.radio-container'),
  radioInputEl = document.querySelectorAll('input'),
  bestScoreValueEl = document.querySelectorAll('.best-score-value');

const countdownEl = document.querySelector('.countdown'),
  itemContainerEl = document.querySelector('.item-container');

const finalTimeEl = document.querySelector('.final-time'),
  baseTimeEl = document.querySelector('.base-time'),
  penaltyTimeEl = document.querySelector('.penalty-time'),
  playAgainBtnEl = document.querySelector('.play-again');
