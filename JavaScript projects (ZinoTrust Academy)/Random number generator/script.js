const numberEl = document.querySelector('.number'),
  btnEl = document.querySelector('.generate');

const generateNumberAF = () => {
  const random = Math.floor(Math.random() * 10 + 1);
  numberEl.innerHTML = random;
};

btnEl.addEventListener('click', generateNumberAF);
generateNumberAF();
