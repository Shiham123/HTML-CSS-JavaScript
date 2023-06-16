const toggleSwitchEl = document.querySelector('input[type="checkbox"]'),
  navEl = document.getElementById('nav'),
  toggleIconEl = document.getElementById('toggle-icon'),
  imageOneEl = document.getElementById('image1'),
  imageTwoEl = document.getElementById('image2'),
  imageThreeEl = document.getElementById('image3'),
  textBoxEl = document.getElementById('text-box');

toggleSwitchEl.addEventListener('click', switchTheme);

function imageMode(color) {
  imageOneEl.src = `img/undraw_proud_coder_${color}.svg`;
  imageTwoEl.src = `img/undraw_feeling_proud_${color}.svg`;
  imageThreeEl.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  navEl.style.backgroundColor = isDark
    ? 'rgba(0 0 0 / 50%)'
    : 'rgba(255 255 255 / 50% )';

  textBoxEl.style.backgroundColor = isDark
    ? 'rgb(255 255 255 / 50%)'
    : 'rgb(0 0 0 /50%)';

  toggleIconEl.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';

  isDark
    ? toggleIconEl.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIconEl.children[1].classList.replace('fa-moon', 'fa-sun');

  isDark ? imageMode('dark') : imageMode('light');
  console.log(isDark);
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitchEl.checked = true;
  }
}
