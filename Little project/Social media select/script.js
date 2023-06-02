const menuEl = document.querySelector('.menu'),
  menuTextEl = document.querySelector('.menu > p'),
  socialListEl = document.querySelector('.social-lists'),
  socialLiEl = document.querySelectorAll('.social-lists > li');

menuEl.addEventListener('click', () => {
  socialListEl.classList.toggle('hide');
  menuEl.classList.toggle('rotate');
});

socialLiEl.forEach((liEl) => {
  liEl.addEventListener('click', () => {
    menuTextEl.innerHTML = liEl.innerHTML;
    socialListEl.classList.add('hide');
    menuEl.classList.toggle('rotate');
  });
});
