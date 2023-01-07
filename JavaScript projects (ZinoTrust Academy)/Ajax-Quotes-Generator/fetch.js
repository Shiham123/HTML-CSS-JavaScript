const btlEl = document.querySelector('.get-quotes'),
  numberEl = document.getElementById('number');

btlEl.addEventListener('click', getQuotes);

function getQuotes(event) {
  event.preventDefault();

  if (numberEl.value.length == 0) {
    return alert('Please enter a number');
  } else {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        data = randomQuotes(data);
        let output = '';

        for (let i = 0; i < data.length; i++) {
          if (i == numberEl.value) {
            break;
          }
          output += `
          <hr>
               <h5>Quote: ${data[i].text}</h5>
               <h6>Quote: ${data[i].author}</h6>
               <hr>
          `;
        }
        const quotesEl = document.querySelector('.quotes');
        quotesEl.innerHTML = output;
      });
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
