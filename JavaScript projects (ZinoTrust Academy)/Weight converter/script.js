const poundsEl = document.querySelector('.pounds'),
  kilogramsEl = document.querySelector('.kilograms'),
  gramsEl = document.querySelector('.grams'),
  ouncesEl = document.querySelector('.ounces'),
  formEl = document.querySelector('form');

formEl.addEventListener('input', convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains('pounds')) {
    let x = e.target.value;
    kilogramsEl.value = (x / 2.2046).toFixed(2);
    gramsEl.value = (x / 0.0022046).toFixed(2);
    ouncesEl.value = (x * 16).toFixed(2);
  }
  if (e.target.classList.contains('kilograms')) {
    let x = e.target.value;
    poundsEl.value = (x * 2.2046).toFixed(2);
    gramsEl.value = (x * 1000).toFixed(2);
    ouncesEl.value = (x * 35.274).toFixed(2);
  }
  if (e.target.classList.contains('grams')) {
    let x = e.target.value;
    kilogramsEl.value = (x / 1000).toFixed(2);
    poundsEl.value = (x * 0.0022046).toFixed(2);
    ouncesEl.value = (x * 0.035274).toFixed(2);
  }
  if (e.target.classList.contains('ounces')) {
    let x = e.target.value;
    kilogramsEl.value = (x / 35.274).toFixed(2);
    gramsEl.value = (x / 0.035275).toFixed(2);
    poundsEl.value = (x * 0.0625).toFixed(2);
  }
}
