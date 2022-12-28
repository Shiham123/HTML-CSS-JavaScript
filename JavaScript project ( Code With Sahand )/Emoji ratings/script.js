const starsEl = document.querySelectorAll('.fa-star'),
  emojisEl = document.querySelectorAll('.far');

const colorsArr = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

starsEl.forEach((starEl, indexOne) => {
  starEl.addEventListener('click', () => {
    updateRating(indexOne);
  });
});

function updateRating(indexOne) {
  starsEl.forEach((starEl, indexTwo) => {
    if (indexTwo < indexOne + 1) {
      starEl.classList.add('active');
    } else {
      starEl.classList.remove('active');
    }
  });

  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${indexOne * 50}px)`;
    emojiEl.style.color = colorsArr[indexOne];
  });
}

updateRating(0);
