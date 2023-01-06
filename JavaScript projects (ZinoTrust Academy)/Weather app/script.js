const apiData = {
  key: '920568cd7d5c9c0a865ebec1649ea039',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const searchEl = document.querySelector('.search'),
  btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', getInput);

function getInput(event) {
  event.preventDefault();

  if (event.type == 'click') {
    getData(searchEl.value);
    console.log(searchEl.value);
  }
}

function getData() {
  fetch(
    `${apiData.base}weather?q=${searchEl.value}&units=metric&appid=${apiData.key}`
  )
    .then((response) => {
      return response.json();
    })
    .then(displayData);
}

function displayData(response) {
  console.log(response);
  if (response.cod === '404') {
    const errorEl = document.querySelector('.error');
    errorEl.textContent = 'Please enter valid city';
    searchEl.value = '';
  } else {
    const cityEl = document.querySelector('.city');
    cityEl.innerText = `${response.name}, ${response.sys.country}`;

    const today = new Date();
    const dateEl = document.querySelector('.date');
    dateEl.innerText = getDateFun(today);
  }
}
