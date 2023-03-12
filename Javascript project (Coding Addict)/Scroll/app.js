// date section
const dateEl = document.querySelector('footer > p > span');
dateEl.innerHTML = new Date().getFullYear();

const navToggleEl = document.querySelector('.nav-toggle');
const linksContainerEl = document.querySelector('.links-container');
const linksEl = document.querySelector('.links');

navToggleEl.addEventListener('click', () => {
  const containerHeight = linksContainerEl.getBoundingClientRect().height;
  const linkHeight = linksEl.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainerEl.style.height = `${linkHeight}px`;
  } else {
    linksContainerEl.style.height = 0;
  }
});

const navEl = document.querySelector('#nav');
const topLinkEl = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const navbarHeight = navEl.getBoundingClientRect().height;

  const windowHeight = window.scrollY;

  if (windowHeight > navbarHeight) {
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

const scrollLinkEl = document.querySelectorAll('.scroll-link');
scrollLinkEl.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const navbarHeight = navEl.getBoundingClientRect().height;
    const containerHeight = linksContainerEl.getBoundingClientRect().height;
    const fixedHeight = navEl.classList.contains('fixed-nav');

    let position = element.offsetTop - navbarHeight;

    if (!fixedHeight) {
      position -= navbarHeight;
    }

    if (containerHeight > 82) {
      position += containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainerEl.style.height = 0;
  });
});
