const body = document.querySelector('body'),
  toggle = document.querySelector('#toggle'),
  sunIcon = document.querySelector('.toggle.bxs-sun'),
  moonIcon = document.querySelector('.toggle.bx-moons');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  sunIcon.className =
    sunIcon.className == 'bx bxs-sun' ? 'bx bxs-sun' : 'bx bxs-sun';
  moonIcon.className =
    moonIcon.className == 'bx bx-moon' ? 'bx bx-moon' : 'bx bx-moon';
});
