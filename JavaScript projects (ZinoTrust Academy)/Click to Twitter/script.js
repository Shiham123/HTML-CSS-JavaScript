const inputEl = document.querySelector('textarea'),
  btnEl = document.querySelector('.btn'),
  limitEl = document.querySelector('.limit');

let max = 50;

function updateLimit() {
  limitEl.textContent = max;
  inputEl.addEventListener('input', fixingLimit);
}

function fixingLimit() {
  let inputLength = inputEl.value.length;
  limitEl.textContent = max - inputLength;

  if (inputLength > max) {
    btnEl.disabled = true;
    limitEl.style.color = 'red';
  } else {
    btnEl.disabled = false;
    limitEl.style.color = 'black';
  }
}
updateLimit();

btnEl.addEventListener('click', updateTweet);
function updateTweet(event) {
  event.preventDefault();
  tweet();
}

function tweet() {
  let tweetInput = 'https://twitter.com/intent/tweet?text=';
  window.open(`${tweetInput} ${inputEl.value}`);
}
