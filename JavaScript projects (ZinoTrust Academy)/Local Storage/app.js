window.onload = function () {
  displayTask();
};

const inputEl = document.querySelector('.input'),
  btnEl = document.querySelector('.btn'),
  todoListEl = document.querySelector('.todo-list'),
  clearBtnEl = document.querySelector('.clear');

btnEl.addEventListener('click', addTaskF);

function addTaskF(event) {
  event.preventDefault();

  if (inputEl.value != '') {
    addTaskToLS();
    todoListEl.innerHTML = '';
    displayTask();
  } else {
    const errorEl = document.querySelector('.error');
    errorEl.innerHTML = 'Please inter a number';

    setTimeout(() => {
      errorEl.innerHTML = '';
    }, 2000);
  }
}

function addTaskToLS() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(inputEl.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  inputEl.value = '';
}

function displayTask() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    const newLiEl = document.createElement('li'),
      completeEl = document.createElement('p'),
      checkBtnEl = document.createElement('button'),
      delBtnEl = document.createElement('button');

    checkBtnEl.innerHTML = '<i class="fas fa-check"></i>';
    delBtnEl.innerHTML = '<i class="fas fa-trash-alt"></i>';
    completeEl.textContent = 'Completed';

    newLiEl.appendChild(document.createTextNode(task));
    newLiEl.appendChild(checkBtnEl);
    newLiEl.appendChild(delBtnEl);
    todoListEl.appendChild(newLiEl);

    // Mark the task as a completed
    checkBtnEl.addEventListener('click', function () {
      newLiEl.appendChild(completeEl);
    });

    delBtnEl.addEventListener('click', deleteTask);
  });
}

function deleteTask(index) {
  let tasks;
  const delItem = confirm('Are you want to delete this todo?');

  if (delItem == true) {
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  todoListEl.innerHTML = '';
  displayTask();
}

// CLear all the task in one click
clearBtnEl.addEventListener('click', clearTaskF);

function clearTaskF() {
  const clearTask = confirm('you have successfully deleted all the task');
  if (clearTask == true) {
    localStorage.clear();
    todoListEl.innerHTML = '';
    displayTask();
  }
}

for (let i = 0; i <= localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(localStorage.getItem(key));
}
