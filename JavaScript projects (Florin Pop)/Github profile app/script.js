const apiURL = 'https://api.github.com/users/';

const mainEl = document.getElementById('main'),
  formEl = document.getElementById('form'),
  searchEl = document.getElementById('search');

async function getUser(userName) {
  const resp = await fetch(apiURL + userName);
  const respData = await resp.json();

  createUserCard(respData);

  getRepos(userName);
}

async function getRepos(userName) {
  const resp = await fetch(apiURL + userName + '/repos');
  const respData = await resp.json();

  addReposToCard(respData);
}

function createUserCard(user) {
  const cardHtml = `
  <div class="card">
    <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
    </div>
    <div>
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul class="info">
            <li> <strong>Followers</strong> ${user.followers}</li>
            <li> <strong>Following</strong> ${user.following}</li>
            <li> <strong>Repos</strong> ${user.public_repos}</li>
        </ul>

        <h4>Repos: </h4>
        <div class="repos" id="repos"></div>

    </div>
  </div>
  `;
  mainEl.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = repo.html_url;
      repoEl.target = '_blank';
      repoEl.innerText = repo.name;

      reposEl.appendChild(repoEl);
    });
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = searchEl.value;

  if (user) {
    getUser(user);
    searchEl.value = '';
  }
});
