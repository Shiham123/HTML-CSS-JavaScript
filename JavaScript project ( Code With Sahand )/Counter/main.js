let num = 0;

const value = document.querySelector('.value'),
  button = document.querySelectorAll('button');

button.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const styles = event.currentTarget.classList;

    if (styles.contains('minus')) {
      num--;
    } else if (styles.contains('plus')) {
      num++;
    } else {
      num = 0;
    }

    value.textContent = num;

    if (num > 0) {
      value.style.color = 'green';
    } else if (num < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'grey';
    }
  });
});
