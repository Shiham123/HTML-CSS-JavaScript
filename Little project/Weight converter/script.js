const poundInputEl = document.getElementById('inputPounds'),
  kilogramInputEl = document.getElementById('inputKilograms'),
  resultPoundEl = document.getElementById('resultPound'),
  resultKilogramsEl = document.getElementById('resultKilograms'),
  errorEl = document.getElementById('error');

poundInputEl.addEventListener('input', convertPound);
kilogramInputEl.addEventListener('input', convertKilograms);

let poundError, poundResult;
let kilogramsError, kilogramsResult;

function convertPound() {
  if (poundInputEl.value <= 0 || isNaN(poundInputEl.value)) {
    errorEl.innerText = 'Please input a valid number!';
    clearTimeout(poundError);

    poundError = setTimeout(() => {
      poundInputEl.value = '';
      errorEl.innerHTML = '';
    }, 1000);
  } else {
    resultPoundEl.innerHTML = (+poundInputEl.value / 2.2).toFixed(2);

    clearTimeout(poundResult);
    poundResult = setTimeout(() => {
      poundInputEl.value = '';
      resultPoundEl.innerHTML = '';
      errorEl.innerText = '';
    }, 3000);
  }
}

function convertKilograms() {
  if (kilogramInputEl.value <= 0 || isNaN(kilogramInputEl.value)) {
    errorEl.innerHTML = 'Please input a valid number';

    clearTimeout(kilogramsError);
    kilogramsError = setTimeout(() => {
      errorEl.innerHTML = '';
      kilogramInputEl.value = '';
    }, 2000);
  } else {
    resultKilogramsEl.innerHTML = (+kilogramInputEl.value * 2.2046).toFixed(3);

    clearTimeout(kilogramsResult);
    kilogramsResult = setTimeout(() => {
      kilogramInputEl.value = '';
      resultKilogramsEl.innerHTML = '';
    }, 3000);
  }
}
