const toggleIconEl = document.getElementById('toggle-icon'),
  inputEl = document.querySelector('input[type="checkbox"]'),
  navEl = document.getElementById('nav'),
  imgOneEl = document.getElementById('image1'),
  imgTwoEl = document.getElementById('image2'),
  imgThreeEl = document.getElementById('image3'),
  textBoxEl = document.getElementById('text-box');

inputEl.addEventListener('click', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleSwitchTheme(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleSwitchTheme(false);
  }
}

function toggleSwitchTheme(isMode) {
  navEl.style.backgroundColor = isMode
    ? 'rgb(0 0 0 / 50%)'
    : 'rgb(255 255 255 / 50%)';

  textBoxEl.style.backgroundColor = isMode
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 / 50%)';

  toggleIconEl.children[0].textContent = isMode ? 'Dark Mode' : 'Light Mode';

  toggleIconEl.children[1].classList.replace(
    isMode ? 'fa-sun' : 'fa-moon',
    isMode ? 'fa-moon' : 'fa-sun'
  );

  imageMode(isMode ? 'dark' : 'light');
}

function imageMode(color) {
  imgOneEl.src = `img/undraw_proud_coder_${color}.svg`;
  imgTwoEl.src = `img/undraw_feeling_proud_${color}.svg`;
  imgThreeEl.src = `img/undraw_conceptual_idea_${color}.svg`;
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleSwitchTheme(false);
  if (currentTheme === 'dark') {
    inputEl.checked = true;
    toggleSwitchTheme(true);
  }
}
