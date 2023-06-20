const modalEl = document.getElementById('modal'),
  showModalEl = document.getElementById('show-modal'),
  closeModalEl = document.getElementById('close-modal'),
  websiteNameEl = document.getElementById('website-name'),
  websiteUrlEl = document.getElementById('website-url'),
  bookmarkContainerEl = document.getElementById('bookmarks-container'),
  bookmarkFormEl = document.getElementById('bookmark-form');

showModalEl.addEventListener('click', showModal);
closeModalEl.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
  event.target === modalEl ? closeModal() : false;
});

bookmarkFormEl.addEventListener('submit', initialBookmark);

let storeBookmarks = [];

function showModal() {
  modalEl.classList.add('show-modal');
  websiteNameEl.focus();
}

function closeModal() {
  modalEl.classList.remove('show-modal');
}

function initialBookmark(event) {
  event.preventDefault();

  let websiteName = websiteNameEl.value,
    websiteUrl = websiteUrlEl.value;

  if (websiteName.includes('http://', 'https://')) {
    websiteUrl = `https://${websiteUrl}`;
  }

  if (!validate(websiteName, websiteUrl)) {
    return false;
  }

  const bookmark = {
    name: websiteName,
    url: websiteUrl,
  };

  storeBookmarks.push(bookmark);
  localStorage.setItem('bookmarkItem', JSON.stringify(storeBookmarks));

  bookmarkFormEl.reset();
  closeModal();
  getBookmarks();
}

function validate(webName, webUrl) {
  const expression =
    /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;

  const regex = new RegExp(expression);

  if (!webName || !webUrl) {
    alert('Please add both field');
    return false;
  }

  if (!webUrl.match(regex)) {
    alert('please add a valid email');
    return false;
  }

  return true;
}

function createBookmark() {
  bookmarkContainerEl.textContent = '';

  storeBookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;

    const item = document.createElement('div');
    item.classList.add('item');

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas', 'fa-times');
    closeIcon.setAttribute('title', 'delete Bookmark');
    closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);

    const linkInfo = document.createElement('div');
    linkInfo.classList.add('name');

    const favicon = document.createElement('img');
    favicon.setAttribute(
      'src',
      `https://s2.googleusercontent.com/s2/favicons?domain=${url}`
    );
    favicon.setAttribute('alt', name);

    const link = document.createElement('a');
    link.setAttribute('href', `${url}`);
    link.setAttribute('target', '_blank');
    link.textContent = name;

    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);

    bookmarkContainerEl.appendChild(item);
  });
}

function getBookmarks() {
  if (localStorage.getItem('bookmarkItem')) {
    storeBookmarks = JSON.parse(localStorage.getItem('bookmarkItem'));
  } else {
    storeBookmarks = [{ name: 'shiham', url: 'http://192.168.0.1/index.html' }];
    localStorage.setItem('bookmarkItem', JSON.stringify(storeBookmarks));
  }

  createBookmark();
}

function deleteBookmark(url) {
  storeBookmarks.forEach((bookmark, index) => {
    if (bookmark.url === url) {
      storeBookmarks.splice(index, 1);
    }
  });
  localStorage.setItem('bookmarkItem', JSON.stringify(storeBookmarks));
  getBookmarks();
}

getBookmarks();
