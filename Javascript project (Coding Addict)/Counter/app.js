let count = 0,
  counterSpan = document.querySelector('#value'),
  btnElement = document.querySelectorAll('.btn');

btnElement.forEach(function (e) {
  e.addEventListener('click', function () {
    const tagList = e.classList;
    if (tagList.contains('increase')) {
      count++;
    } else if (tagList.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      counterSpan.style.color = 'green';
    }
    if (count < 0) {
      counterSpan.style.color = 'red';
    }

    if (count === 0) {
      counterSpan.style.color = 'gray';
    }

    counterSpan.textContent = count;
  });
});
