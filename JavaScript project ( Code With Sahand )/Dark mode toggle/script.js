const inputEl = document.querySelector('input'),
  bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('mode'));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = `black`;
  } else {
    bodyEl.style.backgroundColor = `white`;
  }
}

inputEl.addEventListener('input', () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}
