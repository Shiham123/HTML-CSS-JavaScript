const formEl = document.querySelector('.form'),
  inputEl = document.querySelector('.input'),
  ulEl = document.querySelector('.list');

let listArr = JSON.parse(localStorage.getItem('todo')) || [];

if (listArr) {
  listArr.forEach((item) => {
    createTodoList(item);
  });
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodoList();
});

function createTodoList(task) {
  let newTodo = inputEl.value;

  if (task) {
    newTodo = task.name;
  }

  let liEl = document.createElement('li');
  liEl.textContent = newTodo;

  if (task && task.checked) {
    liEl.classList.add('checked');
  }

  inputEl.value = '';

  let checkIconEl = document.createElement('div');
  checkIconEl.innerHTML = `<i class="fas fa-check-square"></i>`;

  let trashIconEl = document.createElement('div');
  trashIconEl.innerHTML = `<i class="fas fa-trash"></i>`;

  ulEl.appendChild(liEl);
  liEl.appendChild(checkIconEl);
  liEl.appendChild(trashIconEl);

  checkIconEl.addEventListener('click', () => {
    liEl.classList.toggle('checked');
    updateLocalStorage();
  });

  trashIconEl.addEventListener('click', () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  let allListEl = document.querySelectorAll('li');

  listArr = [];

  allListEl.forEach((item) => {
    listArr.push({
      name: item.textContent,
      checked: item.classList.contains('checked'),
    });
  });
  localStorage.setItem('todo', JSON.stringify(listArr));
}
