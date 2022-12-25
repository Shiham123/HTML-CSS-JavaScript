const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('mouseover', (event) => {
  const xPosition = event.pageX - buttonElement.offsetLeft;
  const yPosition = event.pageY - buttonElement.offsetTop;

  buttonElement.style.setProperty('--xPosition', xPosition + 'px');
  buttonElement.style.setProperty('--yPosition', yPosition + 'px');
});
