const modalEl = document.getElementById('modal'),
  showModalEl = document.getElementById('show-modal'),
  closeModalEl = document.getElementById('close-modal'),
  bookmarkFormEl = document.getElementById('bookmark-form'),
  websiteNameEl = document.getElementById('website-name'),
  websiteUrlEl = document.getElementById('website-url'),
  bookmarkContainerEl = document.getElementById('bookmarks-container');

bookmarkFormEl.addEventListener('submit', storeBookmark);

let bookmarks = [];

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
    urlValue = `https//${urlValue}`;
  }

  if (!validate(nameValue, urlValue)) {
    return false;
  }

  const bookmark = {
    name: nameValue,
    url: urlValue,
  };

  bookmarks.push(bookmark);
  localStorage.setItem('bookmark', JSON.stringify(bookmark));
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
    bookmarks = [{ name: 'shiham', url: 'https://www.facebook.com/' }];
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
  }
}
