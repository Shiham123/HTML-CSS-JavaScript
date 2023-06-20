const modalEl = document.getElementById('modal'),
  showModalEl = document.getElementById('show-modal'),
  closeModalEl = document.getElementById('close-modal'),
  websiteNameEl = document.getElementById('website-name'),
  websiteUrlEl = document.getElementById('website-url'),
  bookmarkFormEl = document.getElementById('bookmark-form'),
  bookmarkContainerEl = document.getElementById('bookmarks-container');

let storeBookmarks = [];

showModalEl.addEventListener('click', () => {
  modalEl.classList.add('show-modal');
  websiteNameEl.focus();
});

closeModalEl.addEventListener('click', () => {
  modalEl.classList.remove('show-modal');
});

window.addEventListener('click', (event) => {
  event.target === modalEl ? modalEl.classList.remove('show-modal') : false;
});

bookmarkFormEl.addEventListener('submit', initialBookmark);

function initialBookmark(event) {
  event.preventDefault();

  let nameValue = websiteNameEl.value,
    urlValue = websiteUrlEl.value;

  if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
    urlValue = `https://${urlValue}`;
  }

  if (!bookmarkValidation(nameValue, urlValue)) {
    return false;
  }

  let bookmark = {
    name: nameValue,
    url: urlValue,
  };

  storeBookmarks.push(bookmark);
  localStorage.setItem('bookmark', JSON.stringify(storeBookmarks));

  bookmarkFormEl.reset();
  modalEl.classList.remove('show-modal');
  getBookmarks();
}

function bookmarkValidation(webName, webUrl) {
  const expression =
      /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,
    regex = new RegExp(expression);

  if (!webName || !webUrl) {
    alert('please fill the both box');
    return false;
  }

  if (!webUrl.match(regex)) {
    alert('please add a valid email');
    return false;
  }

  return true;
}

function createBookmarks() {
  bookmarkContainerEl.textContent = '';

  storeBookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;

    const item = document.createElement('div');
    item.classList.add('item');

    const linkInfo = document.createElement('name');
    linkInfo.classList.add('name');

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas', 'fa-times');
    closeIcon.setAttribute('title', 'Delete bookmark');
    closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);

    const img = document.createElement('img');
    img.setAttribute(
      'src',
      `https://s2.googleusercontent.com/s2/favicons?domain=${url}`
    );
    img.setAttribute('alt', name);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.textContent = name;

    linkInfo.append(img, link);
    item.append(linkInfo, closeIcon);
    bookmarkContainerEl.appendChild(item);
  });
}

function getBookmarks() {
  if (localStorage.getItem('bookmark')) {
    storeBookmarks = JSON.parse(localStorage.getItem('bookmark'));
  } else {
    storeBookmarks = [{ name: 'shiham', url: 'www.facebook.com' }];
    localStorage.setItem('bookmark', JSON.stringify(storeBookmarks));
  }
  createBookmarks();
}

function deleteBookmark(url) {
  storeBookmarks.forEach((bookmark, index) => {
    if (bookmark.url === url) {
      storeBookmarks.splice(index, 1);
    }
  });
  localStorage.setItem('bookmark', JSON.stringify(storeBookmarks));
  getBookmarks();
}

getBookmarks();
