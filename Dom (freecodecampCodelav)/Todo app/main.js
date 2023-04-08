const formEl = document.getElementById('form'),
  textInputEl = document.getElementById('textInput'),
  dateInputEl = document.getElementById('dateInput'),
  textareaInputEl = document.getElementById('textareaInput');

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
  } else {
    console.log('nothing');
  }
};

const acceptData = () => {
  storeData['text'] = textInputEl.value;
  storeData['date'] = dateInputEl.value;
  storeData['description'] = textareaInputEl.value;
  console.log(storeData);
};
