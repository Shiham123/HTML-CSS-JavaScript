const countEl = document.querySelector('.count'),
  inputEl = document.querySelector('input');

inputEl.addEventListener('keyup', countText);

function countText() {
  countEl.innerHTML = inputEl.value.length;
}
