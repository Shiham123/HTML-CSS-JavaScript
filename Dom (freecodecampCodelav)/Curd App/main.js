const formEl = document.getElementById('form'),
  inputEl = document.getElementById('input'),
  msgEl = document.getElementById('msg'),
  postsEl = document.getElementById('posts');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  fromValidation();
});

const data = {};

function fromValidation() {
  if (inputEl.value !== '') {
    msgEl.innerHTML = '';
    acceptData();
  } else {
    msgEl.innerHTML = 'cannot be blank';
  }
}

function acceptData() {
  data['text'] = inputEl.value;
  createPost();
}

function createPost() {
  postsEl.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  inputEl.value = '';
}
