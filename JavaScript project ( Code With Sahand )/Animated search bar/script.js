const searchBarContainerEl = document.querySelector('.search-bar-container'),
  magnifierEl = document.querySelector('.magnifier');
console.log(magnifierEl);

magnifierEl.addEventListener('click', () => {
  searchBarContainerEl.classList.toggle('active');
});
