const nextEl = document.querySelector('.next'),
  prevEl = document.querySelector('.prev'),
  allImgEl = document.querySelectorAll('img'),
  imgContainerEl = document.querySelector('.image-container');

let currentImg = 1,
  imgLength = allImgEl.length,
  timeout;

nextEl.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  if (currentImg > imgLength) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgLength;
  }
  imgContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

updateImg();
