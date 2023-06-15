const quoteContainerEl = document.getElementById('quote-container'),
  quoteTextEl = document.getElementById('quote'),
  authorEl = document.getElementById('author'),
  twitterBtnEl = document.getElementById('twitter'),
  newQuoteBtnEl = document.getElementById('new-quote'),
  loaderEl = document.getElementById('loader');

let storeQuotes = [],
  quotesUrl = `https://type.fit/api/quotes`;

newQuoteBtnEl.addEventListener('click', newQuotes);
twitterBtnEl.addEventListener('click', twitterQuotes);

function newQuotes() {
  showSpinner();
  let quotes = storeQuotes[Math.floor(Math.random() * storeQuotes.length)];

  removeSpinner();
  authorEl.innerText = !quotes.author ? 'Unknown' : quotes.author;
  quoteTextEl.innerText = !quotes.text ? 'Unknown' : quotes.text;
}

function twitterQuotes() {
  let twitterApi = `https://twitter.com/intent/tweet?text=${quoteTextEl.textContent} - ${authorEl.textContent}`;
  window.open(twitterApi, '_blank');
}

showSpinner();

function getQuotes() {
  showSpinner();
  fetch(quotesUrl)
    .then((response) => response.json())
    .then((quotesApi) => {
      storeQuotes = quotesApi;
      removeSpinner();
      newQuotes();
    })
    .catch((error) => {
      console.log(error);
      removeSpinner();
      newQuotes();
    });
}

getQuotes();

function showSpinner() {
  loaderEl.hidden = false;
  quoteContainerEl.hidden = true;
}

function removeSpinner() {
  setInterval(() => {
    loaderEl.hidden = true;
    quoteContainerEl.hidden = false;
  }, 1000);
}
