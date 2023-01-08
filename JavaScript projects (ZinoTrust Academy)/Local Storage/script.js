const inputEl = document.querySelector('.input'),
  btnEl = document.querySelector('.btn'),
  todoListEl = document.querySelector('.todo-list');

btnEl.addEventListener('click', addTask);

function addTask() {
  const newLiEl = document.createElement('li'),
    completeEl = document.createElement('p'),
    checkBtnEl = document.createElement('button'),
    delBtnEl = document.createElement('button');

  checkBtnEl.innerHTML = '<i class="fas fa-check"></i>';
  delBtnEl.innerHTML = '<i class="fas fa-trash-alt"></i>';
  completeEl.textContent = 'Completed';

  if (inputEl.value !== '') {
    newLiEl.textContent = inputEl.value;
    todoListEl.appendChild(newLiEl);
    newLiEl.appendChild(checkBtnEl);
    newLiEl.appendChild(delBtnEl);
    inputEl.value = '';
  } else {
    alert('Please enter some text');
  }

  checkBtnEl.addEventListener('click', function () {
    newLiEl.appendChild(completeEl);
  });

  delBtnEl.addEventListener('click', function () {
    const delItem = confirm('Are you want to delete this todo?');
    if (delItem == true) {
      const parentItem = this.parentNode;
      parentItem.remove();
    }
  });
}
