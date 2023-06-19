const modalEl = document.getElementById('modal'),
  showModalEl = document.getElementById('show-modal'),
  closeModalEl = document.getElementById('close-modal'),
  bookmarkFormEl = document.getElementById('bookmark-form'),
  websiteNameEl = document.getElementById('website-name'),
  websiteUrlEl = document.getElementById('website-url'),
  bookmarkContainerEl = document.getElementById('bookmarks-container');

let bookmarks = [];

bookmarkFormEl.addEventListener('submit', storeBookmark);

showModalEl.addEventListener('click', showModal);
closeModalEl.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  event.target === modalEl && modalEl.classList.remove('show-modal');
});

function showModal() {
  modalEl.classList.add('show-modal');
  websiteNameEl.focus();
}

function closeModal() {
  modalEl.classList.remove('show-modal');
}

function storeBookmark(event) {
  event.preventDefault();

  let nameValue = websiteNameEl.value,
    urlValue = websiteUrlEl.value;

  if (urlValue.includes('http://', 'https://')) {
    urlValue = `https://${urlValue}`;
  }

  if (!validate(nameValue, urlValue)) {
    return false;
  }

  const bookmark = {
    name: nameValue,
    url: urlValue,
  };

  bookmarks.push(bookmark);
  localStorage.setItem('bookmark', JSON.stringify(bookmarks));

  bookmarkFormEl.reset();
  fetchBookmarks();
}

function validate(nameValue, urlValue) {
  const expression =
    /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;

  const regex = new RegExp(expression);

  if (!nameValue || !urlValue) {
    alert('please submit value for both fields');
    return false;
  }

  if (!urlValue.match(regex)) {
    alert('please provide a correct website address');
    return false;
  }

  return true;
}

function fetchBookmarks() {
  if (localStorage.getItem('bookmark')) {
    bookmarks = JSON.parse(localStorage.getItem('bookmark'));
  } else {
    bookmarks = [
      { name: 'bruce wayne', url: 'https://www.linkedin.com/in/ymw0331/' },
    ];
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  }

  buildBookmarkDOM();
}

function buildBookmarkDOM() {
  bookmarkContainerEl.textContent = '';

  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;

    const item = document.createElement('div');
    item.classList.add('item');

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas', 'fa-times');
    closeIcon.setAttribute('title', 'delete bookmark');
    closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);

    const linkInfo = document.createElement('div');
    linkInfo.classList.add('name');

    const favicon = document.createElement('img');
    favicon.setAttribute(
      'src',
      `https://s2.googleusercontent.com/s2/favicons?domain=${url}`
    );
    favicon.setAttribute('alt', 'Favicon');

    const link = document.createElement('a');
    link.setAttribute('href', `${url}`);
    link.setAttribute('target', '_blank');
    link.textContent = name;

    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);

    bookmarkContainerEl.appendChild(item);
  });
}

function deleteBookmark(url) {
  bookmarks.forEach((bookmark, index) => {
    if (bookmark.url === url) {
      bookmarks.splice(index, 1);
    }
  });
  localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  fetchBookmarks();
}

fetchBookmarks();
