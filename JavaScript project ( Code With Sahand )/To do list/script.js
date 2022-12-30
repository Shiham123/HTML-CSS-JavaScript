const formEL = document.querySelector('.form'),
  inputEl = document.querySelector('.input'),
  unOrderList = document.querySelector('.list');

let list = JSON.parse(localStorage.getItem('list'));
list.forEach((task) => {
  todoList(task);
});

formEL.addEventListener('submit', (event) => {
  event.preventDefault();
  todoList();
});

function todoList(task) {
  let newTask = inputEl.value;

  if (task) {
    newTask = task.name;
  }

  const listItem = document.createElement('li');

  if (task && task.checked) {
    listItem.classList.add('checked');
  }

  listItem.innerHTML = newTask;
  unOrderList.appendChild(listItem);
  inputEl.value = '';

  const checkBtnEl = document.createElement('div');
  checkBtnEl.innerHTML = `<i class="fas fa-check-square">`;
  listItem.appendChild(checkBtnEl);

  checkBtnEl.addEventListener('click', () => {
    listItem.classList.toggle('checked');
    updateLocalStorage();
  });

  const trashBtnEl = document.createElement('div');
  trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  listItem.appendChild(trashBtnEl);

  trashBtnEl.addEventListener('click', () => {
    listItem.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const listsItem = document.querySelectorAll('li');
  list = [];

  listsItem.forEach((listItem) => {
    list.push({
      name: listItem.innerText,
      checked: listItem.classList.contains('checked'),
    });
  });

  localStorage.setItem('list', JSON.stringify(list));
}
