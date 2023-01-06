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
    const errorEl = document.querySelector('.error');
    errorEl.textContent = '';
    searchEl.value = '';

    const cityEl = document.querySelector('.city');
    cityEl.innerText = `${response.name}, ${response.sys.country}`;

    const today = new Date();
    const dateEl = document.querySelector('.date');
    dateEl.innerText = getDateFun(today);

    const tempEl = document.querySelector('.temp');
    tempEl.innerHTML = `Temp : ${Math.round(
      response.main.temp
    )} <span>°C</span>`;

    const weatherEl = document.querySelector('.weather');
    weatherEl.innerText = `Weather : ${response.weather[0].main}`;

    const descriptionEl = document.querySelector('.description');
    descriptionEl.innerText = `Description: ${response.weather[0].description}`;

    const tempRangeEl = document.querySelector('.temp-range');
    tempRangeEl.innerText = `Temp Range: ${Math.round(
      response.main.temp_max
    )} °C / ${Math.round(response.main.temp_min)} °C`;

    const weatherIconEl = document.querySelector('.weather-icon');
    const iconURL = 'http://openweathermap.org/img/w/';
    weatherIconEl.src = iconURL + response.weather[0].icon + '.png';
  }
}

function getDateFun(today) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  let day = days[today.getDay()];
  let date = today.getDate();
  let month = months[today.getMonth()];
  let year = today.getFullYear();

  return `${day}, ${date} ${month}, ${year}`;
}
