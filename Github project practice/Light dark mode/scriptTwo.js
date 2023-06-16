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

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleDarkLightMode(false);
  }
}
