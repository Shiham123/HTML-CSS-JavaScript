// step one --- show the add item and remove item show button
// step two = add the input value to the broad
// step three = add the clear button and remove all item broad

const groceryFormEl = document.querySelector('.grocery-form'),
  groceryEl = document.getElementById('grocery'),
  alertEl = document.querySelector('.alert'),
  groceryListEl = document.querySelector('.grocery-list'),
  groceryContainerEl = document.querySelector('.grocery-container'),
  clearBtnEl = document.querySelector('.clear-btn'),
  submitBtnEl = document.querySelector('.submit-btn');

let editFlag = false;
let editId = '';

groceryFormEl.addEventListener('submit', addItem);
clearBtnEl.addEventListener('click', clearItem);

function addItem(e) {
  e.preventDefault();
  const value = groceryEl.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');

    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `;

    groceryListEl.appendChild(element);
    groceryContainerEl.classList.add('show-container');

    displayAlert('item is added', 'success');
    setToDefault();
  } else if (value && editFlag) {
    console.log('item is editing here');
  } else {
    displayAlert('Please add a item', 'danger');
  }
}

function setToDefault() {
  editId = '';
  editFlag = false;
  groceryEl.value = '';

  submitBtnEl.textContent = 'Submitted';

  setTimeout(() => {
    submitBtnEl.textContent = 'Submit';
  }, 1000);
}

function clearItem() {
  const items = document.querySelectorAll('.grocery-item');

  items.forEach((item) => {
    groceryListEl.removeChild(item);
  });
  groceryContainerEl.classList.remove('show-container');
  displayAlert('Added all Item all removed', 'danger');
}

function displayAlert(text, action) {
  alertEl.textContent = text;
  alertEl.classList.add(`alert-${action}`);

  setTimeout(() => {
    alertEl.textContent = '';
    alertEl.classList.remove(`alert-${action}`);
  }, 3000);
}
