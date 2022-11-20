const leftArrow = document.querySelector('.left-arrow'),
  rightArrow = document.querySelector('.right-arrow'),
  sliderContainer = document.querySelector('.slider'),
  allSliderImg = document.querySelectorAll('.image'),
  bottomContainer = document.querySelector('.bottom-container');

let sliderNumber = 1;
let sliderLength = allSliderImg.length;

for (let i = 0; i < sliderLength; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottomContainer.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBgColor = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = `transparent`;
  });
};

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetBgColor();
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

rightArrow.addEventListener('click', () => {
  sliderNumber < sliderLength ? nextSlide() : getFirstSlide();
});

leftArrow.addEventListener('click', () => {
  sliderNumber > 1 ? prevSlide() : getLastSlide();
});
