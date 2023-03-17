const groceryFormEl = document.querySelector('.grocery-form'),
  groceryEl = document.getElementById('grocery'),
  alertEl = document.querySelector('.alert'),
  groceryListEl = document.querySelector('.grocery-list'),
  groceryContainerEl = document.querySelector('.grocery-container'),
  submitBtnEl = document.querySelector('.submit-btn'),
  clearBtnEl = document.querySelector('.clear-btn');

let editElement;
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

    const deleteBtn = element.querySelector('.delete-btn'),
      editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    groceryListEl.appendChild(element);
    groceryContainerEl.classList.add('show-container');

    displayAlert('Item is added', 'success');
    setToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('Edit the item', 'success');
    setToDefault();
  } else {
    displayAlert('Please add item', 'danger');
  }
}

function displayAlert(text, action) {
  alertEl.textContent = text;
  alertEl.classList.add(`alert-${action}`);

  setTimeout(() => {
    alertEl.textContent = '';
    alertEl.classList.remove(`alert-${action}`);
  }, 2000);
}

function clearItem() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach((item) => {
      groceryListEl.removeChild(item);
    });
  }
  groceryContainerEl.classList.remove('show-container');
  displayAlert('All item is removed', 'danger');
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  groceryListEl.removeChild(element);

  if (groceryListEl.children.length === 0) {
    groceryContainerEl.classList.remove('show-container');
  }

  displayAlert('Item deleted', 'danger');
  setToDefault();
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  groceryEl.value = editElement.innerHTML;
  editId = element.dataset.id;
  editFlag = true;
  submitBtnEl.textContent = 'Edit';
}

function setToDefault() {
  groceryEl.value = '';
  editFlag = false;
  editId = '';
  submitBtnEl.textContent = 'submit';
}
