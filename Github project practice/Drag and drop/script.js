const addBtnEl = document.querySelectorAll('.add-btn:not(.solid)'),
  saveItemBtn = document.querySelectorAll('.solid'),
  addContainerEl = document.querySelectorAll('.add-container'),
  addItemEl = document.querySelectorAll('.add-item');

const listColumnsEl = document.querySelectorAll('.drag-item-list'),
  backlogListEl = document.getElementById('backlog-list'),
  progressListEl = document.getElementById('progress-list'),
  completeListEl = document.getElementById('complete-list'),
  holdListEl = document.getElementById('on-hold-list');

function showInputBox(column) {
  addBtnEl[column].style.visibility = 'hidden';
  saveItemBtn[column].style.display = 'flex';
  addContainerEl[column].style.display = 'flex';
}

function hideInputBox(column) {
  addBtnEl[column].style.visibility = 'visible';
  saveItemBtn[column].style.display = 'none';
  addContainerEl[column].style.display = 'none';
  addToColumn(column);
}

function addToColumn(column) {}
