const quoteContainerEl = document.getElementById('quote-container'),
  quoteTextEl = document.getElementById('quote'),
  authorEl = document.getElementById('author'),
  twitterBtnEl = document.getElementById('twitter'),
  newQuoteBtnEl = document.getElementById('new-quote'),
  loaderEl = document.getElementById('loader');

let apiQuotes = [];

newQuoteBtnEl.addEventListener('click', newQuote);
twitterBtnEl.addEventListener('click', twitterQuote);

function showLoadingSpinner() {
  loaderEl.hidden = false;
  quoteContainerEl.hidden = true;
}

function removeLoadingSpinner() {
  loaderEl.hidden = true;
  quoteContainerEl.hidden = false;
}

function newQuote() {
  showLoadingSpinner();

  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quotes.author) {
    authorEl.innerText = 'unknown';
  } else {
    authorEl.innerText = quotes.author;
  }

  if (quotes.text.length > 50) {
    quoteTextEl.classList.add('long-quote');
  } else {
    quoteTextEl.classList.remove('long-quote');
  }

  quoteTextEl.innerText = quotes.text;
  removeLoadingSpinner();
}

async function getQuote() {
  showLoadingSpinner();
  const apiURL = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log('whoops, no quote', error);
    getQuote();
  }
}

function twitterQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteTextEl.textContent} - ${authorEl.textContent}`;
  window.open(twitterURL, '_blank');
}

getQuote();
