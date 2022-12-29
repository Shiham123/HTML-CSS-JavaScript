const imageContainerEl = document.querySelector('.image-container'),
  prevBtnEl = document.querySelector('#prev'),
  nextBtnEl = document.querySelector('#next');

let x = 0,
  timeout;

prevBtnEl.addEventListener('click', () => {
  x = x + 45;
  clearTimeout(timeout);
  updateGallery();
});

nextBtnEl.addEventListener('click', () => {
  x = x - 45;
  clearTimeout(timeout);
  updateGallery();
});

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  timeout = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
