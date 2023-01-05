const toggleDarkModeEl = document.querySelector('.toggle-darkmode'),
  toggleTextEl = document.querySelector('.toggle-text');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  toggleTextEl.textContent = 'Light';
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  toggleTextEl.textContent = 'Dark';
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

toggleDarkModeEl.addEventListener('click', () => {
  let darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
