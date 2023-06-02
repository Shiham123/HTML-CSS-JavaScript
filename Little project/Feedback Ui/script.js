const ratingEl = document.querySelectorAll('.rating'),
  btnEl = document.getElementById('btn'),
  containerEl = document.getElementById('container');

let selectedRating = '';

ratingEl.forEach((rating) => {
  rating.addEventListener('click', (event) => {
    removeClass();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

btnEl.addEventListener('click', () => {
  if (selectedRating !== '') {
    containerEl.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support.</p>
    `;
  }
});

function removeClass() {
  ratingEl.forEach((rating) => {
    rating.classList.remove('active');
  });
}
