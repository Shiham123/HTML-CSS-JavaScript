const btlEl = document.querySelector('.get-quotes'),
  numberEl = document.getElementById('number');
btlEl.addEventListener('click', getQuotes);

function getQuotes(event) {
  event.preventDefault();

  if (numberEl.value.length == 0) {
    return alert('Please enter a number ');
  } else {
    const http = new XMLHttpRequest();

    http.open('GET', 'https://type.fit/api/quotes', true);
    http.onload = function () {
      if (this.status === 200) {
        let response = randomQuotes(JSON.parse(this.responseText)),
          output = '';
        // response.forEach(function (res) {
        //   output += `
        //       <hr>
        //           <h5>Quote: ${res.text}</h5>
        //           <h6>Quote: ${res.author}</h6>
        //       <hr>
        //       `;
        // });

        for (let i = 0; i < response.length; i++) {
          if (i == numberEl.value) {
            break;
          }
          output += `
           <hr>
               <h5>Quote: ${response[i].text}</h5>
               <h6>Quote: ${response[i].author}</h6>
               <hr>
        `;
        }
        const quotesEl = document.querySelector('.quotes');
        quotesEl.innerHTML = output;
      }
    };
    http.send();
  }
}

function randomQuotes(quotes) {
  let currentIndex = quotes.length,
    tempValue,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    tempValue = quotes[currentIndex];
    quotes[currentIndex] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }

  return quotes;
}
