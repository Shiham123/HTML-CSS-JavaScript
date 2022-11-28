const sideBar = document.querySelector('.side-bar'),
  navItems = document.querySelectorAll('nav .nav-item'),
  toggle = document.querySelector('.side-bar .toggle');

toggle.addEventListener('click', () => {
  if (sideBar.className === 'side-bar') {
    sideBar.classList.add('open');
  } else {
    sideBar.classList.remove('open');
  }
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });
    navItem.classList.add('active');
  });
});
