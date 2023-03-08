const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colorSpan = document.querySelector('.color');
const colorBtn = document.querySelector('.btn');

colorBtn.addEventListener('click', function () {
  let hashTag = '#';
  for (let i = 0; i < 6; i++) {
    hashTag += hex[randomColor()];
  }

  document.body.style.backgroundColor = hashTag;
  colorSpan.textContent = hashTag;
});

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}
