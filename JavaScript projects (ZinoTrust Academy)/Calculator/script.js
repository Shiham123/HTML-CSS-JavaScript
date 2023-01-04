const btnEl = document.querySelector('.btn'),
  tipEl = document.querySelector('.tip'),
  totalEl = document.querySelector('.total'),
  errorEl = document.querySelector('.error');

btnEl.addEventListener('click', calculateTip);

function calculateTip() {
  const billEl = document.querySelector('.bill').value,
    rateEl = document.querySelector('.rate').value;

  if (billEl === '' || rateEl === '') {
    errorEl.style.display = 'block';
    hideError();
  } else if (isNaN(billEl)) {
    errorEl.innerHTML = 'Please enter your number';
    errorEl.style.display = 'block';
    hideError();
  } else {
    let tipAmount = billEl * rateEl;
    tipEl.innerHTML = `Tip Amount: $${Math.ceil(tipAmount)}`;

    let totalBill = Number(billEl) + tipAmount;
    totalEl.innerHTML = `Total Amount: $${Math.ceil(totalBill)}`;
  }
}

function hideError() {
  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 2000);
}
