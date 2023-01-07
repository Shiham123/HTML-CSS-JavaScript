const btlEl = document.querySelector('.get-quotes');
btlEl.addEventListener('click', getQuotes);

function getQuotes(event) {
  event.preventDefault();

  const http = new XMLHttpRequest();

  http.open('GET', 'https://type.fit/api/quotes', true);

  http.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText),
        output = '';

      response.forEach(function (res) {
        output += `
            <hr>
                <h5>Quote: ${res.text}</h5>
                <h6>Quote: ${res.author}</h6>
            <hr>
            `;
      });

      const quotesEl = document.querySelector('.quotes');
      quotesEl.innerHTML = output;
    }
  };

  http.send();
}
