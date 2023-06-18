const modalEl = document.getElementById('modal'),
  showModalEl = document.getElementById('show-modal'),
  closeModalEl = document.getElementById('close-modal'),
  bookmarkFormEl = document.getElementById('bookmark-form'),
  websiteNameEl = document.getElementById('website-name'),
  websiteUrlEl = document.getElementById('website-url'),
  bookmarkContainerEl = document.getElementById('bookmarks-container');

showModalEl.addEventListener('click', showModal);
closeModalEl.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
  event.target === modalEl && modalEl.classList.remove('show-modal');
});

function showModal() {
  modalEl.classList.add('show-modal');
  websiteNameEl.focus();
}

function closeModal() {
  modalEl.classList.remove('show-modal');
}
