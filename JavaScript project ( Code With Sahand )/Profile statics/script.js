const countersEl = document.querySelectorAll('.counter');

countersEl.forEach((counterEl) => {
  counterEl.innerText = `0`;
  incrementCounter();

  function incrementCounter() {
    let currentNumber = +counterEl.innerText,
      dataCeil = counterEl.getAttribute('data-ceil'),
      increment = dataCeil / 15;

    currentNumber = Math.ceil(currentNumber + increment);

    if (currentNumber < dataCeil) {
      counterEl.innerText = currentNumber;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
