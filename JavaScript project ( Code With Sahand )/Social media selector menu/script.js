const menuEl = document.querySelector('.menu'),
  menuTextEl = menuEl.querySelector('p'),
  socialListEl = document.querySelector('.social-lists'),
  listsItem = socialListEl.querySelectorAll('li');

menuEl.addEventListener('click', () => {
  socialListEl.classList.toggle('hide');
  menuEl.classList.toggle('rotate');
});

listsItem.forEach((listItem) => {
  listItem.addEventListener('click', () => {
    menuTextEl.innerHTML = listItem.innerHTML;
    socialListEl.classList.add('hide');
    menuEl.classList.toggle('rotate');
  });
});
