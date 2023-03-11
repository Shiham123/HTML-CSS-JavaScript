// date time is update for copyright section
const dateEl = document.querySelector('footer > p > span');
dateEl.innerHTML = new Date().getFullYear();

// responsive navbar fixing
const navToggleEl = document.querySelector('.nav-toggle');
const linksContainerEl = document.querySelector('.links-container');
const linksEl = document.querySelector('.links');

navToggleEl.addEventListener('click', () => {
  const containerHeight = linksContainerEl.getBoundingClientRect().height;
  const linksHeight = linksEl.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainerEl.style.height = `${linksHeight}px`;
  } else {
    linksContainerEl.style.height = 0;
  }
});

// navbar fixed setup and back to top button setup

const navEl = document.querySelector('#nav');
const topLinkEl = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const navHeight = navEl.getBoundingClientRect().height;
  const windowHeight = window.scrollY;

  if (windowHeight > navHeight) {
    navEl.classList.add('fixed-nav');
  } else {
    navEl.classList.remove('fixed-nav');
  }

  if (windowHeight > 500) {
    topLinkEl.classList.add('show-link');
  } else {
    topLinkEl.classList.remove('show-link');
  }
});
