const bgImgEl = document.querySelector('.bg-image');

window.addEventListener('scroll', () => {
  updateImg();
});

const updateImg = () => {
  bgImgEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImgEl.style.backgroundSize = 160 - window.pageYOffset / 20 + '%';
};
