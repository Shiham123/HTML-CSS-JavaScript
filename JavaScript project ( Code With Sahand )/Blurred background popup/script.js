const containerEl = document.querySelector('.container'),
  btnEl = document.querySelector('.btn'),
  popupContainerEl = document.querySelector('.popup-container'),
  closeIconEl = document.querySelector('.close-icon');

btnEl.addEventListener('click', () => {
  containerEl.classList.add('active-container');
  popupContainerEl.classList.remove('active-popup');
});

closeIconEl.addEventListener('click', () => {
  containerEl.classList.remove('active-container');
  popupContainerEl.classList.add('active-popup');
});
