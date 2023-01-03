const searchBarContainerEl = document.querySelector('.search-bar-container'),
  magnifierEl = document.querySelector('.magnifier');

magnifierEl.addEventListener('click', () => {
  searchBarContainerEl.classList.toggle('active');
});
