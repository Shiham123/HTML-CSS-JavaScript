const toggleIconEl = document.getElementById('toggle-icon'),
  inputEl = document.querySelector('input[type="checkbox"]'),
  navEl = document.getElementById('nav'),
  imageOneEl = document.getElementById('image1'),
  imageTwoEl = document.getElementById('image2'),
  imageThreeEl = document.getElementById('image3'),
  textBoxEl = document.getElementById('text-box');

inputEl.addEventListener('click', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

function imageMode(color) {
  imageOneEl.src = `img/undraw_proud_coder_${color}.svg`;
  imageTwoEl.src = `img/undraw_feeling_proud_${color}.svg`;
  imageThreeEl.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
  navEl.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBoxEl.style.backgroundColor = 'rgb(255 255 255 / 50%)';

  toggleIconEl.children[0].textContent = 'Dark Mode';
  toggleIconEl.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

function lightMode() {
  navEl.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBoxEl.style.backgroundColor = 'rgb(0 0 0 / 50%)';

  toggleIconEl.children[0].textContent = 'Light Mode';
  toggleIconEl.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', currentTheme);
    inputEl.checked = true;
    darkMode();
  }
}
