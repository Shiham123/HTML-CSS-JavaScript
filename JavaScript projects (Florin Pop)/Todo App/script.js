const formEl = document.getElementById('form'),
  inputEl = document.getElementById('input'),
  todosEl = document.getElementById('todos');

const todosLS = JSON.parse(localStorage.getItem('notes'));

if (todosLS) {
  todosLS.forEach((todoLS) => {
    addTodo(todoLS);
  });
}

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  addTodo();
});

function addTodo(todosLS) {
  let todoText = inputEl.value;

  if (todosLS) {
    todoText = todosLS.text;
  }
  if (todoText) {
    const todoEl = document.createElement('li');
    if (todosLS && todosLS.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      addTodoLS();
    });

    // Right click remove the todo
    todoEl.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      todoEl.remove();
      addTodoLS();
    });

    todosEl.appendChild(todoEl);
    inputEl.value = '';

    addTodoLS();
  }
}

function addTodoLS() {
  const notesEl = document.querySelectorAll('li');
  const notes = [];
  notesEl.forEach((noteEl) => {
    notes.push({
      text: noteEl.innerText,
      completed: noteEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}
