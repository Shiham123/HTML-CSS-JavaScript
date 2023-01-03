const colorEl = document.querySelector('.hex'),
  buttonEl = document.querySelector('button'),
  containerEl = document.querySelector('.counter-div');

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  containerEl.style.backgroundColor = '#' + randomColor;
  colorEl.innerHTML = '#' + randomColor;
};

buttonEl.addEventListener('click', generateColor);
generateColor();
