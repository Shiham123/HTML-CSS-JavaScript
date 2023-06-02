const nextIconEl = document.querySelector('.next'),
  prevIconEl = document.querySelector('.prev'),
  imgsEl = document.querySelectorAll('img'),
  imgContainerEl = document.querySelector('.image-container');

let imgCounter = 0;
let slide;

nextIconEl.addEventListener('click', () => {
  imgCounter++;
  clearTimeout(slide);
  updateImg();
});

prevIconEl.addEventListener('click', () => {
  imgCounter--;
  clearTimeout(slide);
  updateImg();
});

updateImg();

function updateImg() {
  if (imgCounter > imgsEl.length - 1) {
    imgCounter = 0;
  } else if (imgCounter < 0) {
    imgCounter = imgsEl.length - 1;
  }
  imgContainerEl.style.transform = `translate(-${imgCounter * 500}px)`;

  slide = setTimeout(() => {
    imgCounter++;
    updateImg();
  }, 3000);
}
