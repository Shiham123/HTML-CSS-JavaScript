const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const colorSpanEl = document.querySelector('.color'),
  btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function () {
  const getRandomColor = colors[randomColor()];

  document.body.style.backgroundColor = getRandomColor;
  colorSpanEl.textContent = getRandomColor;
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
