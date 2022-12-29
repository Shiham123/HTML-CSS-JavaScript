const containerEl = document.querySelector('.container'),
  leftEl = document.querySelector('.left'),
  rightEl = document.querySelector('.right');

leftEl.addEventListener('mouseenter', () => {
  containerEl.classList.add('active-left');
});

leftEl.addEventListener('mouseleave', () => {
  containerEl.classList.remove('active-left');
});

rightEl.addEventListener('mouseenter', () => {
  containerEl.classList.add('active-right');
});

rightEl.addEventListener('mouseleave', () => {
  containerEl.classList.remove('active-right');
});
