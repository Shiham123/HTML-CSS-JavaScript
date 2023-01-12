const apiKey = '3265874a2c77ae4a04bb96236a642d2f';
const apiURL = (location) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

const mainEl = document.getElementById('main'),
  formEl = document.getElementById('form'),
  searchEl = document.getElementById('search');

async function getWeatherByLocation(location) {
  const resp = await fetch(apiURL(location), { origin: 'cors' });
  const respData = await resp.json();

  console.log(respData);

  addWeatherToPage(respData);
}

function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const weatherEl = document.createElement('div');
  weatherEl.classList.add('weather');
  weatherEl.innerHTML = `
  <h2>${temp} C
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""/>
  </h2>
  <small>${data.weather[0].main}</small>

  `;
  mainEl.innerHTML = '';
  mainEl.appendChild(weatherEl);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

formEl.addEventListener('submit', function (event) {
  event.preventDefault();

  const location = searchEl.value;

  if (location) {
    getWeatherByLocation(location);
  }
});
