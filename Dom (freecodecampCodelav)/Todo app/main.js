const formEl = document.getElementById('form'),
  textInputEl = document.getElementById('textInput'),
  dateInputEl = document.getElementById('dateInput'),
  textareaInputEl = document.getElementById('textareaInput');

const inputMsgEl = document.getElementById('inputMsg'),
  dateMsgEl = document.getElementById('dateMsg'),
  descMsgEl = document.getElementById('descMsg');

const addEl = document.getElementById('add'),
  tasksEl = document.getElementById('tasks');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});

let storeData = [];

const formValidation = () => {
  textInputEl.value !== ''
    ? (inputMsgEl.innerHTML = '')
    : (inputMsgEl.innerHTML = 'Must provide task no');

  dateInputEl.value !== ''
    ? (dateMsgEl.innerHTML = '')
    : (dateMsgEl.innerHTML = 'Must provide a date');

  textareaInputEl.value !== ''
    ? (descMsgEl.innerHTML = '')
    : (descMsgEl.innerHTML = 'Must provide some description');

  if (
    textInputEl.value !== '' &&
    dateInputEl.value !== '' &&
    textareaInputEl.value !== ''
  ) {
    addEl.setAttribute('data-bs-dismiss', 'modal');
    addEl.click();
    acceptData();

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
    desc: textareaInputEl.value,
  });
  createTask();

  localStorage.setItem('data', JSON.stringify(storeData));
};

const createTask = () => {
  tasksEl.innerHTML = '';
  storeData.map((task, index) => {
    let { text, date, desc } = task;
    return (tasksEl.innerHTML += `
    <div id="${index}">
    <span class="fw-bold">${text}</span>
    <span class="small text-secondary">${date}</span>
    <p>${desc}</p>
      <span class="options">
        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
        <i onclick="deleteTask(this); createTask()" class="fas fa-trash-alt"></i>
      </span>
  </div>
    `);
  });
  resetTask();
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

const resetTask = () => {
  textInputEl.value = '';
  dateInputEl.value = '';
  textareaInputEl.value = '';
};

(() => {
  storeData = JSON.parse(localStorage.getItem('data')) || [];
  createTask();
})();
