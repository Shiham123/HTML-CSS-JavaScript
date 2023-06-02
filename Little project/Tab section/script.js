const tabsEl = document.querySelector('.tabs');
const btnEl = document.querySelectorAll('.button');
const contentEl = document.querySelectorAll('.content');

tabsEl.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (id) {
    btnEl.forEach((btn) => {
      btn.classList.remove('live');
    });
    e.target.classList.add('live');

    contentEl.forEach((content) => {
      if (content.getAttribute('id') === id) {
        content.classList.add('live');
      } else {
        content.classList.remove('live');
      }
    });
  }
});
