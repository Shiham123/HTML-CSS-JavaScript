const imgContainerEl = document.getElementById('image-container'),
  loaderEl = document.getElementById('loader');

const initialCount = 5,
  apiKey = '-KsOXvdzrmis5K5FFHbUNb1HOJks2OpVmYARueRdjAw',
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;

let photosArray = [];

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', () => {});
