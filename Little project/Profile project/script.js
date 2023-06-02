const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((counter) => {
  counter.innerHTML = '0';

  incrementCounter();

  function incrementCounter() {
    let counterNum = +counter.innerText;
    const maxValue = counter.getAttribute('data-max');

    counterNum = Math.ceil(counterNum + maxValue / 15);

    if (counterNum <= maxValue) {
      counter.innerText = counterNum;
      setTimeout(incrementCounter, 50);
    } else {
      counter.innerText = maxValue;
    }
  }
});
