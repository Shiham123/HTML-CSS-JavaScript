const passwordEl = document.querySelector('#password'),
  eyeIconEl = document.querySelector('#eye');

eyeIconEl.addEventListener('click', updateIcon);

function updateIcon() {
  if (eyeIconEl.classList.contains('fa-eye')) {
    passwordEl.setAttribute('type', 'text');
    eyeIconEl.classList.replace('fa-aye', 'fa-eye-slash');
  } else {
    passwordEl.setAttribute('type', 'password');
    eyeIconEl.classList.replace('fa-aye-slash', 'fa-eye');
  }
}
