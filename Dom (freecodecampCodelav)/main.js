// -------------------------------project 1 -----------------------

/*

let btn = document.querySelector('#new-quote'),
  quote = document.querySelector('.quote'),
  person = document.querySelector('.person');

const quotes = [
  {
    quote: `the best way to find yourself is to lose yourself in the service of others.`,
    person: `Mahatma gandhi`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not people or things"`,
    person: `Albert einstein`,
  },
  {
    quote: `"At his best, man is the noblest of all animals, separated from law and justice he is the worst"`,
    person: `Aristotle`,
  },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life"`,

    person: `Steve jobs`,
  },
  {
    quote: `"Tell me and i forget, Teach me and i remember, Involve me and i learn"`,
    person: `Benjamin Franklin`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `"It does not matter how slowly you go as long as you do not stop"`,
    person: `Confucius`,
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter"`,
    person: `Martin Luther king, jr.`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of love"`,
    person: `Dalai Lama`,
  },
  {
    quote: `"The journey of a thousand miles begins with one stop"`,
    person: `Lao Tzu`,
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

*/

// ----------------------- project 2------------------------------------

/*


let openBtn = document.getElementById('open-btn'),
  modalContainer = document.getElementById('modal-container'),
  closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function () {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

*/

// --------------------------  project 3---------------------------

/*

const accordion = document.getElementsByClassName('content-container');
console.log(accordion);

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
*/

// --------------------------  project 4  ---------------------------

/*


const startStopBtn = document.querySelector('#start-btn'),
  resetBtn = document.querySelector('#reset-btn');

let seconds = 0,
  minutes = 0,
  hours = 0;

let leadingSecond = 0,
  leadingMinutes = 0,
  leadingHours = 0;

let timerInterval = null,
  timerStatus = 'stopped';

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSecond = '0' + seconds.toString();
  } else {
    leadingSecond = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = '0' + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = '0' + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = (document.getElementById('timer').innerText =
    leadingHours + ':' + leadingMinutes + ':' + leadingSecond);
}

startStopBtn.addEventListener('click', function () {
  if (timerStatus === 'stopped') {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      'start-btn'
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = 'started';
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      'start-btn'
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
  }
});

resetBtn.addEventListener('click', function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').innerHTML = '00:00:00';
});

*/

// -------------------------------------- project 5 -------------------

const addTask = document.getElementById('add-task'),
  taskContainer = document.getElementById('task-container'),
  inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function () {
  let task = document.createElement('div');
  task.classList.add('task');

  let listItem = document.createElement('li');
  listItem.innerText = `${inputTask.value}`;
  task.appendChild(listItem);

  let checkBtn = document.createElement('button');
  checkBtn.innerHTML = `<i class="fa-solid fa-check" ></i>`;
  checkBtn.classList.add('checkTask');
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteBtn.classList.add('deleteBtn');
  task.appendChild(deleteBtn);

  if (inputTask.value === '') {
    alert('please input a task');
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = '';

  checkBtn.addEventListener('click', function () {
    checkBtn.parentElement.style.textDecoration = 'line-through';
  });

  deleteBtn.addEventListener('click', (e) => {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
