const styleSwitcherTogglerEl = document.querySelector(
  '.style-switcher-toggler'
);
const styleSwitcherEl = document.querySelector('.style-switcher');
const alternativeStyleEl = document.querySelectorAll('.alternate-style');
const dayNightEl = document.querySelector('.day-night');

styleSwitcherTogglerEl.addEventListener('click', () => {
  styleSwitcherEl.classList.toggle('open');
});

window.addEventListener('scroll', () => {
  if (styleSwitcherEl.classList.contains('open')) {
    styleSwitcherEl.classList.remove('open');
  }
});

dayNightEl.addEventListener('click', () => {
  dayNightEl.querySelector('i').classList.toggle('fa-sun');
  dayNightEl.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
  if (document.body.classList.add('dark')) {
    dayNightEl.querySelector('i').classList.add('fa-sun');
  } else {
    dayNightEl.querySelector('i').classList.remove('fa-moon');
  }
});

function setActiveStyle(color) {
  alternativeStyleEl.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}
