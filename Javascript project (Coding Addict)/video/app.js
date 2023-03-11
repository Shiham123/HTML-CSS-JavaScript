const videoContainerEl = document.querySelector('.video-container');
const switchBtnEl = document.querySelector('.switch-btn');

switchBtnEl.addEventListener('click', () => {
  if (!switchBtnEl.classList.contains('slide')) {
    switchBtnEl.classList.add('slide');
    videoContainerEl.pause();
  } else {
    switchBtnEl.classList.remove('slide');
    videoContainerEl.play();
  }
});

const preloaderEl = document.querySelector('.preloader');
window.addEventListener('load', () => {
  preloaderEl.classList.add('hide-preloader');
});
