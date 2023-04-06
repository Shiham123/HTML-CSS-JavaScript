const formEl = document.getElementById('form'),
  inputEl = document.getElementById('input'),
  msgEl = document.getElementById('msg');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  fromValidation();
  acceptData();
});

const data = {};

function fromValidation() {
  if (inputEl.value !== '') {
    msgEl.innerHTML = '';
  } else {
    msgEl.innerHTML = 'cannot be blank';
  }
}

function acceptData() {}
