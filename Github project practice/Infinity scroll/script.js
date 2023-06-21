const imageContainerEl = document.getElementById('image-container'),
  loaderEl = document.getElementById('loader');

const initialCount = 10,
  apiKEY = '-KsOXvdzrmis5K5FFHbUNb1HOJks2OpVmYARueRdjAw',
  apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${initialCount}`;

let photosArray = [],
  imagesLoaded = 0,
  totalImage = 0;

function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.getElementById('a');

    setAttributeItem(item, {
      href: photo.links.html,
      target: '_blank',
    });

    const image = document.getElementById('img');

    setAttributeItem(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    image.addEventListener('click', imagesLoaded);
    image.appendChild(img);
    imageContainerEl.appendChild(item);
  });
}

function setAttributeItem(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

getPhotos();
