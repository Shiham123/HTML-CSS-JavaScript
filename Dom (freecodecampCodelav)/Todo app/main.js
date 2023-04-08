const formEl = document.getElementById('form'),
  textInputEl = document.getElementById('textInput'),
  dateInputEl = document.getElementById('dateInput'),
  textareaInputEl = document.getElementById('textareaInput');

const tasksEl = document.getElementById('tasks'),
  addEl = document.getElementById('add');

const inputMsgEl = document.getElementById('inputMsg'),
  dateMsgEl = document.getElementById('dateMsg'),
  descMsgEl = document.getElementById('descMsg');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  fromValidation();
});

let storeData = [];

const fromValidation = () => {
  textInputEl.value !== ''
    ? (inputMsgEl.innerHTML = '')
    : (inputMsgEl.innerHTML = 'text Cannot be blank');

  dateInputEl.value !== ''
    ? (dateMsgEl.innerHTML = '')
    : (dateMsgEl.innerHTML = 'date must provide');

  textareaInputEl.value !== ''
    ? (descMsgEl.innerHTML = '')
    : (descMsgEl.innerHTML = 'Description must be added');

  if (
    textInputEl.value !== '' &&
    dateInputEl.value !== '' &&
    textareaInputEl.value !== ''
  ) {
    acceptData();
    addEl.setAttribute('data-bs-dismiss', 'modal');
    addEl.click();

    (() => {
      addEl.setAttribute('data-bs-dismiss', '');
    })();
  } else {
    console.log('nothing');
  }
};

const acceptData = () => {
  storeData.push({
    text: textInputEl.value,
    date: dateInputEl.value,
    description: textareaInputEl.value,
  });

  localStorage.setItem('data', JSON.stringify(storeData));
  createTasks();
};

const createTasks = () => {
  tasksEl.innerHTML = '';
  storeData.map((taskOne, taskTwo) => {
    let { text, date, description } = taskOne;
    return (tasksEl.innerHTML += `
    <div id="${taskTwo}">
      <span class="fw-bold">${text}</span>
      <span class="small text-secondary">${date}</span>
      <p>${description}</p>

      <span class="options">
        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onclick="deleteTask(this); createTasks()" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `);
  });
  resetForm();
};

const deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  storeData.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem('data', JSON.stringify(storeData));
};

const editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInputEl.value = selectedTask.children[0].innerHTML;
  dateInputEl.value = selectedTask.children[1].innerHTML;
  textareaInputEl.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

const resetForm = () => {
  textInputEl.value = '';
  dateInputEl.value = '';
  textareaInputEl.value = '';
};

(() => {
  storeData = JSON.parse(localStorage.getItem('data')) || [];
  createTasks();
})();
