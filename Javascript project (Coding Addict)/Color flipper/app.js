const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const colorSpan = document.querySelector('.color');
const colorBtn = document.querySelector('.btn');

colorBtn.addEventListener('click', function () {
  const getRandomColor = randomColor();

  document.body.style.backgroundColor = colors[getRandomColor];
  colorSpan.textContent = colors[getRandomColor];
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
