const modally = new Modally({
  blur: false,
  centered: false,
  animation: 'fade-down',
});

const modalOne = document.querySelector('[data-modally-id="modal-one"]');
modalOne.addEventListener('after_open', (event) => {
  const modal = event.detail;
  modal.querySelector('.modally-content span').innerText = 'we changed this';
});

console.log(modally);
