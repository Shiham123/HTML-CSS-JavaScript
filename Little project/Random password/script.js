const btnEl = document.querySelector('.btn'),
  inputEl = document.getElementById('input'),
  copyEl = document.querySelector('.fa-copy'),
  alertEl = document.querySelector('.alert-container');

btnEl.addEventListener('click', () => {
  createPassword();
});

copyEl.addEventListener('click', () => {
  copyPassword();
  if (inputEl.value) {
    alertEl.classList.remove('active');
    setTimeout(() => {
      alertEl.classList.add('active');
    }, 3000);
    inputEl.value = '';
  }
});

function createPassword() {
  const chars =
      '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZs',
    passwordLength = 15;

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  inputEl.value = password;
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 18);
  navigator.clipboard.writeText(inputEl.value);
}
