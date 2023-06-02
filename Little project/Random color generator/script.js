const containerEl = document.querySelector('.container');

for (let index = 0; index < 10; index++) {
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('color-container');
  containerEl.appendChild(colorContainer);
}

const colorContainersEl = document.querySelectorAll('.color-container');

colorContainersEl.forEach((container) => {
  const colorItem = randomColor();
  container.style.background = '#' + colorItem;
  container.innerHTML = '#' + colorItem;
});

function randomColor() {
  let chars = '0123456789abcdef',
    length = 6;

  let colors = '';

  for (let index = 0; index < length; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colors += chars.substring(randomNumber, randomNumber + 1);
  }
  return colors;
}
