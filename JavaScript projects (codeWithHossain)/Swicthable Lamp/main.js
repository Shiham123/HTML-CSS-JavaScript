const lamp = document.querySelector('.lamp');
const light = document.querySelector('.lamp-light');

lamp.addEventListener('click', () => {
  if (light.classList.contains('on')) {
    light.classList.remove('on');
    light.classList.add('off');
  } else {
    light.classList.remove('off');
    light.classList.add('on');
  }
});
