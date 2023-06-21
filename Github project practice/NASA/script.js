const resultNavEl = document.getElementById('resultsNav'),
  favoritesNavEl = document.getElementById('favoritesNav'),
  imageContainerEl = document.querySelector('.navigation-container'),
  saveConfirmedEl = document.querySelector('.save-confirmed'),
  loaderEl = document.querySelector('.loader');

const count = 10,
  apiKey = 'DEMO_KEY',
  apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultArray = [],
  favorites = {};

function showContent(page) {
  window.scrollTo({ top: 0, behavior: 'instant' });
  loaderEl.classList.add('hidden');

  if (page === 'results') {
    resultNavEl.classList.remove('hidden');
    favoritesNavEl.classList.add('hidden');
  } else {
    resultNavEl.classList.add('hidden');
    favoritesNavEl.classList.remove('hidden');
  }
}

function createDOMNodes(page) {
  const currentArray =
    page === 'results' ? resultArray : Object.values(favorites);

  currentArray.forEach((result) => {
    console.log(result);
    const card = document.createElement('div');
    card.classList.add('card');

    const link = document.createElement('a');
  });
}

function updateDOM(page) {
  createDOMNodes(page);
  showContent(page);
}

async function getNasaPictures() {
  loaderEl.classList.remove('hidden');
  try {
    const response = await fetch(apiUrl);
    resultArray = await response.json();
    updateDOM('results');
  } catch (error) {
    console.log(error);
  }
}
getNasaPictures();
