const text = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const loremFormEl = document.querySelector('.lorem-form'),
  amountEl = document.getElementById('amount'),
  loremTextEl = document.querySelector('.lorem-text');

loremFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = amountEl.value;
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 26) {
    loremTextEl.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map((item) => {
        return `<p class="result">${item.toUpperCase()}</p>`;
      })
      .join('');
    loremTextEl.innerHTML = tempText;
  }
});
