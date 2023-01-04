const inputTextEl = document.querySelector('.input-text'),
  btnEl = document.querySelector('.btn'),
  resultEl = document.querySelector('.result');

btnEl.addEventListener('click', countVowelFun);

function countVowelFun() {
  let count = 0,
    inputVal = inputTextEl.value.toLowerCase();

  for (let i = 0; i < inputVal.length; i++) {
    let letter = inputVal[i];

    if (letter.match(/([a,i,o,u,e])/)) {
      count++;
    }
  }
  resultEl.innerHTML = `${inputTextEl.value.toUpperCase()} has ${count} vowels`;
}
