const rightArrow = document.querySelector('.right-arrow'),
  leftArrow = document.querySelector('.left-arrow'),
  sliderContainer = document.querySelector('.slider'),
  allImg = document.querySelectorAll('.image'),
  bottomContainer = document.querySelector('.bottom-container');

let sliderNumber = 0;
let sliderLength = allImg.length;

for (let i = 0; i < sliderLength; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottomContainer.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = `white`;

const removeBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = `transparent`;
  });
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeBg();
    sliderContainer.style.transform = `translateX(-${index * 700}px)`;
    button.style.backgroundColor = `white`;
  });
});

const nextSlide = () => {
  sliderContainer.style.transform = `translateX(-${sliderNumber * 700}px)`;
  sliderNumber++;
};

const prevSlide = () => {
  sliderContainer.style.transform = `translateX(-${
    (sliderNumber - 2) * 700
  }px)`;
  sliderNumber--;
};

const getFirstSlide = () => {
  sliderContainer.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};

const getLastSlide = () => {
  sliderContainer.style.transform = `translateX(-${
    (sliderLength - 1) * 700
  }px)`;
  sliderNumber = sliderLength;
};

const changeBgColor = () => {
  removeBg();
  buttons[sliderNumber - 1].style.backgroundColor = `white`;
};

rightArrow.addEventListener('click', () => {
  sliderNumber < sliderLength ? nextSlide() : getFirstSlide();
  changeBgColor();
});

leftArrow.addEventListener('click', () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
  changeBgColor();
});
