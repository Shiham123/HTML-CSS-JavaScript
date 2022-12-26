const container = document.querySelector('.container');

for (let i = 0; i < 50; i++) {
  const colorContainerEl = document.createElement('div');
  colorContainerEl.classList.add('color-container');
  container.appendChild(colorContainerEl);
}

const allColorContainerEl = document.querySelectorAll('.color-container');

function generateColors() {
  allColorContainerEl.forEach((colorEl) => {
    const newColorCode = randomColor();
    colorEl.style.backgroundColor = `#${newColorCode}`;
    colorEl.innerText = `#${newColorCode}`;
  });
}

generateColors();

function randomColor() {
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}

randomColor();
