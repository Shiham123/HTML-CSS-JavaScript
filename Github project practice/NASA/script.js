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
