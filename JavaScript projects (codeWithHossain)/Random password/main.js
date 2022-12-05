const display = document.querySelector('input'),
  button = document.querySelector('button'),
  copyBtn = document.querySelector('span.far'),
  copyActive = document.querySelector('span.fas');

const chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

button.addEventListener('click', () => {
  let randomPassword = '';
  copyBtn.style.display = 'block';
  copyActive.style.display = 'none';

  for (var i = 0; i < 16; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  display.value = randomPassword;
});

const copy = () => {
  copyBtn.style.display = 'none';
  copyActive.style.display = 'block';
  display.select();
  document.execCommand('copy');
};
