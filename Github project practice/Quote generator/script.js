const quoteContainerEl = document.getElementById('quote-container'),
  quoteTextEl = document.getElementById('quote'),
  authorEl = document.getElementById('author'),
  twitterBtnEl = document.getElementById('twitter'),
  newQuoteBtnEl = document.getElementById('new-quote'),
  loaderEl = document.getElementById('loader');

let apiQuotes = [],
  apiUrl = `https://type.fit/api/quotes`;

newQuoteBtnEl.addEventListener('click', newQuote);
twitterBtnEl.addEventListener('click', twitterQuote);

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

function newQuote() {
  showSpinner();
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  authorEl.innerText = !quotes.author ? 'Unknown' : quotes.author;
  quoteTextEl.innerText = !quotes.text ? 'Unknown' : quotes.text;
  removeSpinner();
}

function twitterQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteTextEl.textContent} - ${authorEl.textContent}`;
  window.open(twitterUrl, '_blank');
}

async function getQuotes() {
  try {
    let response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log('whoops something out there', error);
    getQuotes();
  }
}

getQuotes();
