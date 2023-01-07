const empty = '',
  upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase = 'abcdefghijklmnopqrstuvwxyz',
  number = '0123456789',
  symbol = '!@#$^%&*=-_';

const passInputEl = document.getElementById('password'),
  passCopyEl = document.getElementById('copy'),
  passLengthEl = document.getElementById('p-length'),
  passUppercaseEl = document.getElementById('p-uppercase'),
  passLowercaseEl = document.getElementById('p-lowercase'),
  passNumberEl = document.getElementById('p-number'),
  passSymbolEl = document.getElementById('p-symbol'),
  submitBtnEl = document.getElementById('submit');

submitBtnEl.addEventListener('click', () => {
  let initialPassword = empty;

  passUppercaseEl.checked ? (initialPassword += upperCase) : '';
  passLowercaseEl.checked ? (initialPassword += lowerCase) : '';
  passNumberEl.checked ? (initialPassword += number) : '';
  passSymbolEl.checked ? (initialPassword += symbol) : '';

  passInputEl.value = generatePass(passLengthEl.value, initialPassword);
});

function generatePass(passLength, initialPass) {
  let pass = '';

  for (let i = 0; i < passLength; i++) {
    pass += initialPass.charAt(Math.floor(Math.random() * initialPass.length));
  }

  return pass;
}

passCopyEl.addEventListener('click', () => {
  if (passInputEl.value == '') {
    alert('Please enter a password');
  } else {
    passInputEl.select();
    document.execCommand('copy');
    alert('password has been copied to clipboard');
    passInputEl.value = '';
  }
});
