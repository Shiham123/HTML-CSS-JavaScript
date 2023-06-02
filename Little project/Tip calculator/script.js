const btnEl = document.getElementById('calculate'),
  billInput = document.getElementById('bill'),
  tipInput = document.getElementById('tip'),
  totalSpan = document.getElementById('total');

btnEl.addEventListener('click', calculateTotal);

function calculateTotal() {
  const billValue = billInput.value,
    tipValue = tipInput.value,
    totalValue = billValue * (1 + tipValue / 100);

  totalSpan.innerHTML = totalValue.toFixed(2);
}
