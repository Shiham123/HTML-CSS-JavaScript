const buttonElement = document.querySelector('button'),
  videoElement = document.querySelector('video'),
  icon = document.querySelector('.fas'),
  preloader = document.querySelector('div');

console.log(preloader);

buttonElement.addEventListener('click', () => {
  if (buttonElement.classList.contains('pause')) {
    buttonElement.classList.remove('pause');
    videoElement.play();
    icon.classList.add('fa-pause');
    icon.classList.remove('fa-play');
  } else {
    buttonElement.classList.add('pause');
    videoElement.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});

window.addEventListener('load', () => {
  preloader.style.zIndex = '-2';
});
