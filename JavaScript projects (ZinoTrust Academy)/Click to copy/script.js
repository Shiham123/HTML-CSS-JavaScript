const btnEl = document.querySelector('.btn'),
  couponEl = document.querySelector('.coupon');

btnEl.addEventListener('click', copyTextFun);

function copyTextFun(event) {
  event.preventDefault();

  couponEl.select();
  couponEl.setSelectionRange(0, 99);
  document.execCommand('copy');

  btnEl.textContent = 'copied!!';

  setTimeout(() => {
    btnEl.textContent = 'copy';
  }, 3000);
}
