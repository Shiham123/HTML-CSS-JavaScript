const textInput = document.getElementById('input'),
  copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () => {
  textInput.select();
  document.execCommand('copy');
});
