const navbarElement = document.getElementsByTagName('div')[0],
  paragraphDiv = document.getElementsByTagName('div')[2];

window.addEventListener('scroll', () => {
  let windowScroll = window.scrollY,
    paraHeight = paragraphDiv.offsetTop,
    navHeight = navbarElement.offsetHeight;

  if (windowScroll > paraHeight - navHeight - 50) {
    navbarElement.classList.add('active');
  } else {
    navbarElement.classList.remove('active');
  }
});
