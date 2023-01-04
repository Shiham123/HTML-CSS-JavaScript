const btnEl = document.querySelector('.btn'),
  resultEl = document.querySelector('.result');

btnEl.addEventListener('click', palindrome);

function palindrome() {
  const word = document.querySelector('.input-text').value;
  let wordLength = word.length;

  let start = word.substring(0, Math.floor(wordLength / 2)).toLowerCase();
  let end = word
    .substring(wordLength - Math.floor(wordLength / 2))
    .toLowerCase();

  let flipWord = [...end].reverse().join('');

  if (start == flipWord) {
    resultEl.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    resultEl.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
}
