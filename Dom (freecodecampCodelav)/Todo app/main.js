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

let storeData = {};

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
  storeData['text'] = textInputEl.value;
  storeData['date'] = dateInputEl.value;
  storeData['description'] = textareaInputEl.value;

  createTasks();
};

const createTasks = () => {
  let { text, date, description } = storeData;
  tasksEl.innerHTML += `
  <div>
    <span class="fw-bold">${text}</span>
    <span class="small text-secondary">${date}</span>
    <p>${description}</p>
    <span class="options">
      <i class="fas fa-edit"></i>
      <i class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  resetForm();
};

let resetForm = () => {
  textInputEl.value = '';
  dateInputEl.value = '';
  textareaInputEl.value = '';
};
