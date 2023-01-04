const modalEl = document.querySelector('.modal'),
  btnEl = document.querySelector('.btn'),
  closeEl = document.querySelector('.close');

btnEl.addEventListener('click', openModal);
closeEl.addEventListener('click', closeModal);
modalEl.addEventListener('click', closeModal);

function openModal(e) {
  e.preventDefault();
  modalEl.style.display = 'block';
}

function closeModal() {
  modalEl.style.display = 'none';
}
