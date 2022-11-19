const leftArrow = document.querySelector('.left'),
  rightArrow = document.querySelector('.right'),
  slider = document.querySelector('.slider'),
  images = document.querySelectorAll('.image'),
  bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

// creating div
for (let i = 0; i < length; i++) {
  const div = document.createElement('div');
  div.classList.add('button');
  bottom.appendChild(div);
}

// default background set
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

// changing background dot
const resetDot = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = 'transparent';
  });
};

// sliding dot with image
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    resetDot();
    slider.style.transform = `translateX(-${index * 800}px)`;
    slideNumber = index + 1;
    button.style.backgroundColor = 'white';
  });
});

// event listeners
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

// dot color changing
const changingDotColor = () => {
  resetDot();
  buttons[slideNumber - 1].style.backgroundColor = 'white';
};

// right side Listener
rightArrow.addEventListener('click', () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changingDotColor();
});

// left side listener
leftArrow.addEventListener('click', () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changingDotColor();
});
