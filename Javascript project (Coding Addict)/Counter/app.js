const valueEl = document.querySelector('#value'),
  btnEl = document.querySelectorAll('.btn');

let count = 0;
btnEl.forEach(function (el) {
  el.addEventListener('click', function () {
    let selected = el.classList;
    if (selected.contains('increase')) {
      count++;
    } else if (selected.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }
    valueEl.textContent = count;

    if (count > 0) {
      valueEl.style.color = 'green';
    }
    if (count < 0) {
      valueEl.style.color = 'red';
    }
    if (count === 0) {
      valueEl.style.color = 'gray';
    }
  });
});
