const btnEl = document.querySelector('.btn'),
  inputEl = document.querySelector('.input'),
  iconEl = document.querySelector('i'),
  alertContainerEl = document.querySelector('.alert-container');

btnEl.addEventListener('click', () => {
  createPassword();
});

iconEl.addEventListener('click', () => {
  copyPassword();

  if (inputEl.value) {
    alertContainerEl.classList.remove('active');

    setTimeout(() => {
      alertContainerEl.classList.add('active');
    }, 3000);
  }
});

function createPassword() {
  const character =
      '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    passwordLength = 15;

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * character.length);
    password += character.substring(randomNumber, randomNumber + 1);
    console.log(randomNumber, password);
  }

  inputEl.value = password;
  alertContainerEl.innerText = `password copy!`;
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
