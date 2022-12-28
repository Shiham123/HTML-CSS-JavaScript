const tabEl = document.querySelector('.tabs'),
  btnsEl = document.querySelectorAll('.button'),
  articleEls = document.querySelectorAll('.content');

tabEl.addEventListener('click', (event) => {
  let id = event.target.dataset.id;

  if (id) {
    btnsEl.forEach((btn) => {
      btn.classList.remove('live');
    }); 
    event.target.classList.add('live');

    articleEls.forEach((article) => {
      article.classList.remove('live');
    });
    let element = document.getElementById(id);
    element.classList.add('live');
  }
});
