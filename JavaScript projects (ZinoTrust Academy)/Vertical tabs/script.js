const tabsLinksEl = document.getElementsByClassName('tab-link'),
  allContentEl = document.querySelectorAll('.tab-content');

let tabLength = tabsLinksEl.length;

for (let i = 0; i < tabLength; i++) {
  tabsLinksEl[i].addEventListener('click', function (event) {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';

    const filterContent = event.target.dataset.filter;

    allContentEl.forEach((content) => {
      if (content.classList.contains(filterContent)) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
}
