const imgContainerEl = document.querySelector('.image-container'),
  btnEl = document.querySelector('.btn');

let imgNumber = 10;

btnEl.addEventListener('click', () => {
  addNewImg();
});

const addNewImg = () => {
  for (let i = 0; i < imgNumber; i++) {
    let newImgEl = document.createElement('img');
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgContainerEl.appendChild(newImgEl);
  }
};
