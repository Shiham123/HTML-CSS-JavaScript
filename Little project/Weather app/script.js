const formEl = document.querySelector('form'),
  cityInputEl = document.getElementById('city-input'),
  weatherDataEl = document.getElementById('weather-data');

const apiKey = `46f80a02ecae410460d59960ded6e1c6`;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityName = cityInputEl.value;
  getWeatherData(cityName);
});

async function getWeatherData(cityName) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`,
      response = await fetch(url),
      data = await response.json();

    const icon = data.weather[0].icon,
      temperature = Math.round(data.main.temp),
      description = data.weather[0].description,
      details = [
        `Feels like: ${Math.round(data.main.feels_like)}°C`,
        `Humidity: ${data.main.humidity}%`,
        `Wind speed: ${data.wind.speed}`,
      ];

    weatherDataEl.querySelector(
      '.icon'
    ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png"/>`;
    weatherDataEl.querySelector(
      '.temperature'
    ).textContent = `${temperature}°C`;
    weatherDataEl.querySelector('.description').textContent = `${description}`;
    weatherDataEl.querySelector('.details').innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join('');
  } catch (error) {
    console.log(error);
    weatherDataEl.querySelector('.icon').innerHTML = '';
    weatherDataEl.querySelector('.temperature').textContent = '';
    weatherDataEl.querySelector('.description').textContent = '';
    weatherDataEl.querySelector('.details').innerHTML =
      'An error happened, try valid City name!';
  }
}
