// date section
const dateEl = document.querySelector('footer > p > span');
dateEl.innerHTML = new Date().getFullYear();

// responsive mood fix
const navToggleEl = document.querySelector('.nav-toggle'),
  linksContainerEl = document.querySelector('.links-container'),
  linksEl = document.querySelector('.links');

navToggleEl.addEventListener('click', () => {
  const containerHeight = linksContainerEl.getBoundingClientRect().height;
  const linkHeight = linksEl.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainerEl.style.height = `${linkHeight}px`;
  } else {
    linksContainerEl.style.height = 0;
  }
});

// navbar fix
const navbarEl = document.querySelector('#nav');
const topLinkEl = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const navbarHeight = navbarEl.getBoundingClientRect().height;
  const windowHeight = window.scrollY;

  if (windowHeight > navbarHeight) {
    navbarEl.classList.add('fixed-nav');
  } else {
    navbarEl.classList.remove('fixed-nav');
  }

  const topLinkHeight = topLinkEl.getBoundingClientRect().height;

  if (topLinkHeight < 500) {
    topLinkEl.classList.add('show-link');
  } else {
    topLinkEl.classList.remove('show-link');
  }
});
