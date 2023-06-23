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
    const card = document.createElement('div');
    card.classList.add('card');

    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View Full Image';
    link.target = '_blank';

    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'NASA Pictures of the day';
    image.loading = 'lazy';
    image.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-title');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = result.title;

    const saveText = document.createElement('p');
    saveText.classList.add('clickable');

    if (page === 'results') {
      saveText.textContent = 'ADD to favorites';
      saveText.setAttribute('onclick', `saveFavorites('${result.url}')`);
    } else {
      saveText.textContent = 'Remove favorites';
      saveText.setAttribute('onclick', `removeFavorites('${result.url}')`);
    }

    const cardText = document.createElement('p');
    cardText.textContent = result.explanation;

    const footer = document.createElement('small');
    footer.classList.add('text-muted');

    const date = document.createElement('strong');
    date.textContent = result.date;

    const copyRightResult =
      result.copyright === undefined ? '' : result.copyright;

    const copyRight = document.createElement('span');
    copyRight.textContent = `${copyRightResult}`;

    footer.append(date, copyRight);
    cardBody.append(cardTitle, saveText, cardText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    imageContainerEl.appendChild(card);
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
