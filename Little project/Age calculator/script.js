const btnEl = document.getElementById('btn'),
  birthdayInputEl = document.getElementById('birthday'),
  resultEl = document.getElementById('result');

btnEl.addEventListener('click', showBirthDay);

function showBirthDay() {
  let birthdayValue = birthdayInputEl.value;

  if (birthdayValue === '') {
    showInvalidDate();
  } else {
    let age = getAge(birthdayValue);
    let ageMonth = getMonthAge(birthdayValue);
    let getDay = getDayAge(birthdayValue);
    resultEl.innerHTML = `Your age is ${age} years ${ageMonth} month and ${getDay} days old`;
  }
}

function getAge(value) {
  let currentDate = new Date(),
    birthdayDate = new Date(value);

  let year = currentDate.getFullYear() - birthdayDate.getFullYear();
  if (currentDate.getFullYear() < birthdayDate.getFullYear()) {
    year--;
  }
  return year;
}

function getMonthAge(value) {
  let currentDate = new Date();
  let birthdayDate = new Date(value);

  let month = currentDate.getMonth() - birthdayDate.getMonth();
  if (currentDate.getMonth() < birthdayDate.getMonth()) {
    month--;
  }
  return month;
}

function getDayAge(value) {
  let currentDate = new Date();
  let birthdayDate = new Date(value);

  let day = currentDate.getDate() - birthdayDate.getDate();

  if (currentDate.getDate() < birthdayDate.getDate()) {
    day--;
  }
  return day;
}

function showInvalidDate() {
  resultEl.innerText = 'Please add a birthday';
  resultEl.style.color = 'red';

  setTimeout(() => {
    resultEl.innerText = 'Input a valid date';
    resultEl.style.color = 'black';
  }, 2000);
}
