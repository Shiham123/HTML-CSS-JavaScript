const quoteContainerEl = document.getElementById('quote-container'),
  quoteTextEl = document.getElementById('quote'),
  authorTextEl = document.getElementById('author'),
  twitterEl = document.getElementById('twitter'),
  newQuoteEl = document.getElementById('new-quote'),
  loaderEl = document.getElementById('loader');

let apiQuotes = [];

newQuoteEl.addEventListener('click', newQuote);
twitterEl.addEventListener('click', twitterQuote);

function showLoadingSpinner() {
  loaderEl.hidden = false;
  quoteContainerEl.hidden = true;
}

function removeLoadSpinner() {
  loaderEl.hidden = true;
  quoteContainerEl.hidden = false;
}

function newQuote() {
  showLoadingSpinner();

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quote.author) {
    authorTextEl.innerText = 'Unknown';
  } else {
    authorTextEl.innerText = quote.author;
  }

  if (quote.text.length > 50) {
    quoteTextEl.classList.add('long-quote');
  } else {
    quoteTextEl.classList.remove('long-quote');
  }

  quoteTextEl.innerText = quote.text;
  removeLoadSpinner();
}

function twitterQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteTextEl.textContent} - ${authorTextEl.textContent}`;
  window.open(twitterURL, '_blank');
}

async function getQuote() {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
    getQuote();
  }
}

getQuote();
