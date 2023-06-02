const btnEl = document.getElementById('btn'),
  appEl = document.getElementById('app');

btnEl.addEventListener('click', addNote);

getNote().forEach((note) => {
  let notesEl = createNote(note.id, note.content);
  appEl.insertBefore(notesEl, btnEl);
});

function addNote() {
  let noteArr = getNote();
  let noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: '',
  };
  let notesEl = createNote(noteObj.id, noteObj.content);
  appEl.insertBefore(notesEl, btnEl);

  noteArr.push(noteObj);
  saveNote(noteArr);
}

function createNote(id, content) {
  let element = document.createElement('textarea');
  element.classList.add('note');
  element.placeholder = 'Empty note';
  element.value = content;

  element.addEventListener('input', () => {
    updateNote(id, element.value);
  });

  element.addEventListener('dblclick', () => {
    let warning = confirm('do you want to delete this note?');
    if (warning) {
      deleteNote(id, element);
    }
  });
  return element;
}

function updateNote(id, value) {
  let notes = getNote();
  let target = notes.filter((note) => note.id === id)[0];
  target.content = value;
  saveNote(notes);
}

function deleteNote(id, element) {
  let notes = getNote().filter((note) => note.id != id);
  appEl.removeChild(element);
  saveNote(notes);
}

function getNote() {
  return JSON.parse(localStorage.getItem('note')) || [];
}

function saveNote(note) {
  return localStorage.setItem('note', JSON.stringify(note));
}
