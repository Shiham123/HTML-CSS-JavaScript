const btnEl = document.querySelector('.btn'),
  closeIconEl = document.querySelector('.close-icon'),
  trailerContainerEl = document.querySelector('.trailer-container'),
  videoEl = document.querySelector('video');

btnEl.addEventListener('click', () => {
  trailerContainerEl.classList.remove('active');
});

closeIconEl.addEventListener('click', (e) => {
  trailerContainerEl.classList.add('active');
  videoEl.pause();
  videoEl.currentTime = 0;
});
