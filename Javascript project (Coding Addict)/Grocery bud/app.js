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

    addToLocalStorage(id, value);

    groceryListEl.appendChild(element);
    groceryContainerEl.classList.add('show-container');
    displayAlert('Item is added', 'success');
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('Item is edited', 'success');
    setBackToDefault();
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

function clearItem(e) {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach((item) => {
      groceryListEl.removeChild(item);
    });
  }
  groceryContainerEl.classList.remove('show-container');
  displayAlert('All item is removed', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  groceryListEl.removeChild(element);
  const id = element.dataset.id;

  if (groceryListEl.children.length === 0) {
    groceryContainerEl.classList.remove('show-container');
  }

  displayAlert('Item is deleted', 'danger');
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  editElement = e.currentTarget.parentElement.previousElementSibling;
  groceryEl.value = editElement.innerHTML;
  editFlag = true;
  submitBtnEl.textContent = 'Edit';
}

function setBackToDefault() {
  groceryEl.value = '';
  editFlag = false;
  editId = '';
  submitBtnEl.textContent = 'Submit';
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getFromLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getFromLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return id;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function getFromLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}
