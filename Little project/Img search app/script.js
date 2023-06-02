const formEl = document.querySelector('form'),
  searchInputEl = document.getElementById('search-input'),
  searchBtnEl = document.getElementById('search-button'),
  searchResultEl = document.querySelector('.search-results'),
  showMoreBtnEl = document.getElementById('show-more-button');

const accessKey = `RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  createImages();
});

let inputData = '',
  page = 1;

async function createImages() {
  try {
    inputData = searchInputEl.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`,
      response = await fetch(url),
      data = await response.json();

    let resultsData = data.results;

    resultsData.map((result) => {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('search-result');

      const image = document.createElement('img');
      image.src = result.urls.small;
      image.alt = result.alt_description;

      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = '_blank';
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResultEl.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
      showMoreBtnEl.style.display = 'block';
    }
  } catch (error) {
    console.log(error);
  }
}

showMoreBtnEl.addEventListener('click', () => {
  createImages();
});
