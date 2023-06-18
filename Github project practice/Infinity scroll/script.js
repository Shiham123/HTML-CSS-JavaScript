const imgContainerEl = document.getElementById('image-container'),
  loaderEl = document.getElementById('loader');

const initialCount = 5,
  apiKey = '-KsOXvdzrmis5K5FFHbUNb1HOJks2OpVmYARueRdjAw',
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;

let photosArray = [],
  imagesLoaded = 0,
  totalImages = 0;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

function setAttributeEl(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log(photosArray);

  photosArray.forEach((photo) => {
    const image = document.createElement('img'),
      item = document.createElement('a');

    setAttributeEl(item, {
      href: photo.links.html,
      target: '_blank',
    });

    setAttributeEl(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    item.appendChild(image);
    imgContainerEl.appendChild(item);

    image.addEventListener('load', imageLoaded);
  });
}

function imageLoaded() {
  console.log('hlw');
}

window.addEventListener('scroll', () => {
  getPhotos();
});
