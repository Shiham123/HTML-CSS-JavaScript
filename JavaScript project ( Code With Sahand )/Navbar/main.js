const barElement = document.querySelector('i');
const menuElement = document.querySelector('.menu');

barElement.addEventListener('click', () => {
  menuElement.classList.toggle('show-menu');
});
