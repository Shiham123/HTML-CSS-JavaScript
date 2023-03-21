const groceryFormEl = document.querySelector('.grocery-form'),
  groceryEl = document.getElementById('grocery'),
  alertEl = document.querySelector('.alert'),
  groceryListEl = document.querySelector('.grocery-list'),
  groceryContainerEl = document.querySelector('.grocery-container'),
  submitBtnEl = document.querySelector('.submit-btn'),
  clearBtnEl = document.querySelector('.clear-btn');

let editFlag = false;
let editElement;
let editId = '';

groceryFormEl.addEventListener('submit', addItem);
clearBtnEl.addEventListener('click', clearItem);
window.addEventListener('DOMContentLoaded', setupItems);

function addItem(e) {
  e.preventDefault();

  const value = groceryEl.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createItem(id, value);
    addToLocalStorage(id, value);

    displayAlert('Item is added', 'success');
    setToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;

    editFromLocalStorage(editId, value);

    displayAlert('Edit item', 'success');
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
  displayAlert('All item removed', 'danger');
  setToDefault();

  localStorage.removeItem('list');
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  groceryListEl.removeChild(element);

  if (groceryListEl.children.length === 0) {
    groceryContainerEl.classList.remove('show-container');
  }
  displayAlert('Item is deleted', 'danger');
  setToDefault();

  const id = element.dataset.id;
  removeFromLocalStorage(id);
}

function editItem(e) {
  editElement = e.currentTarget.parentElement.previousElementSibling;
  groceryEl.value = editElement.innerHTML;
  editFlag = true;
  submitBtnEl.textContent = 'Edit';

  const element = e.currentTarget.parentElement.parentElement;
  editId = element.dataset.id;
}

function setToDefault() {
  groceryEl.value = '';
  editFlag = false;
  editId = '';
  submitBtnEl.textContent = 'Submit';
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getToLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getToLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function editFromLocalStorage(id, value) {
  let items = getToLocalStorage();

  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function getToLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function setupItems() {
  let items = getToLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => {
      createItem(item.id, item.value);
    });
    groceryContainerEl.classList.add('show-container');
  }
}

function createItem(id, value) {
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

  const deleteBtnEl = element.querySelector('.delete-btn'),
    editBtnEl = element.querySelector('.edit-btn');

  deleteBtnEl.addEventListener('click', deleteItem);
  editBtnEl.addEventListener('click', editItem);

  groceryListEl.appendChild(element);
  groceryContainerEl.classList.add('show-container');
}
