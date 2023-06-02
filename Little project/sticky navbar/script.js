const navbarEl = document.querySelector('.navbar'),
  bottomContainerEl = document.querySelector('.bottom-container');

const value = bottomContainerEl.offsetTop - navbarEl.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > value) {
    navbarEl.classList.add('active');
  } else {
    navbarEl.classList.remove('active');
  }
});
