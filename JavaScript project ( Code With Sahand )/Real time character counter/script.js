const textarea = document.getElementsByTagName('textarea')[0],
  totalCharacter = document.getElementsByTagName('span')[0],
  remainingCharacter = document.getElementsByTagName('span')[1];

textarea.addEventListener('keyup', () => {
  updateCounter();
});

function updateCounter() {
  let countCharacter = textarea.value.length;
  let remainCharacter = textarea.getAttribute('maxLength') - countCharacter;

  totalCharacter.innerText = `Total Character : ${countCharacter}`;
  remainingCharacter.innerText = `Remaining character : ${remainCharacter}`;
}
