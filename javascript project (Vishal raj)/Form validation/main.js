const formEl = document.getElementById('form'),
  usernameEl = document.getElementById('username'),
  emailEl = document.getElementById('email'),
  passwordEl = document.getElementById('password'),
  password2El = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  let userValue = usernameEl.value.trim(),
    emailValue = emailEl.value.trim(),
    passwordOne = passwordEl.value.trim(),
    passwordTwo = password2El.value.trim();

  userValue === ''
    ? setErrorValue(usernameEl, 'Value is not entered')
    : setSuccessValue(usernameEl);

  emailValue === ''
    ? setErrorValue(emailEl, 'Email is not entered')
    : !isEmail(emailValue)
    ? setErrorValue(emailEl, 'Not a valid email')
    : setSuccessValue(emailEl);

  passwordOne === ''
    ? setErrorValue(passwordEl, 'Not a enter a password')
    : setSuccessValue(passwordEl);

  passwordTwo === ''
    ? setErrorValue(password2El, 'Password2 cannot be blank')
    : passwordOne !== passwordTwo
    ? setErrorValue(password2El, 'Passwords do not match')
    : setSuccessValue(password2El);
}

function setErrorValue(input, message) {
  let formControl = input.parentElement;
  formControl.classList = 'form-control error';

  let small = formControl.querySelector('small');
  small.innerText = message;
}

function setSuccessValue(input) {
  let formControl = input.parentElement;
  formControl.classList = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
