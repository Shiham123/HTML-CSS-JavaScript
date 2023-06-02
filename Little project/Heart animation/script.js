const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
  const xPosition = event.clientX,
    yPosition = event.clientY;

  const spanEl = document.createElement('span');
  spanEl.style.left = xPosition + 'px';
  spanEl.style.top = yPosition + 'px';

  const size = Math.random() * 100;
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
