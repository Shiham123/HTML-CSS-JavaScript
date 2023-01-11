const apiUrl =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const mainEl = document.querySelector('.main'),
  formEl = document.getElementById('form'),
  searchEl = document.querySelector('.search');

getMovies(apiUrl);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  console.log(respData);
  showMovies(respData.results);
}

function showMovies(movies) {
  mainEl.innerHTML = '';

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
        <img
          src="${imgPath + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByVote(vote_average)}" >${vote_average}</span>
        </div>
        <div class="overview"> <h4>OverView:</h4>
        ${overview}</div>
    `;
    mainEl.appendChild(movieEl);
  });
}

function getClassByVote(vote) {
  if (vote >= 10) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchTerm = searchEl.value;

  if (searchTerm) {
    getMovies(searchAPI + searchTerm);
    searchEl.value = '';
  }
});
