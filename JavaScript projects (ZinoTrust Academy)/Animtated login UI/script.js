const loginLinkEl = document.querySelector('.login-link'),
  forgotLinkEl = document.querySelector('.forgot-link'),
  registerLinkEl = document.querySelector('.register-link');

const loginSectionEl = document.querySelector('.login'),
  registerSectionEl = document.querySelector('.register'),
  forgotSectionEl = document.querySelector('.forgot');

const closeBtnEl = document.querySelector('.close');

registerLinkEl.addEventListener('click', function (event) {
  event.preventDefault();
  loginSectionEl.style.display = 'none';
  registerSectionEl.style.display = 'flex';
});

loginLinkEl.addEventListener('click', function (event) {
  event.preventDefault();
  loginSectionEl.style.display = 'flex';
  registerSectionEl.style.display = 'none';
});

forgotLinkEl.addEventListener('click', function (event) {
  event.preventDefault();
  loginSectionEl.style.display = 'none';
  forgotSectionEl.style.display = 'flex';
});

closeBtnEl.addEventListener('click', function (event) {
  event.preventDefault();
  loginSectionEl.style.display = 'flex';
  forgotSectionEl.style.display = 'none';
});
