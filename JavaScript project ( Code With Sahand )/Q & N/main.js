const question = document.querySelectorAll('.question');

question.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    question.classList.toggle('show-text');
  });
});
