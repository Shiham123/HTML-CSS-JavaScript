function myTime() {
  let myDate = new Date();
  let hour,
    minute =
      myDate.getMinutes() < 10
        ? '0' + myDate.getMinutes()
        : myDate.getMinutes(),
    sec =
      myDate.getSeconds() < 10
        ? '0' + myDate.getSeconds()
        : myDate.getSeconds(),
    myDateMethod = myDate.getHours() >= 12 ? 'PM' : 'AM';

  if (myDate.getHours() == 0) {
    hour = 12;
  } else if (myDate.getHours() > 12) {
    hour = myDate.getDate() - 12;
  } else {
    hour = myDate.getHours();
  }

  let currentTime = `${hour} : ${minute} : ${sec}`;
  document.getElementsByClassName('hour')[0].innerHTML = currentTime;
  document.getElementsByClassName('minute')[0].innerHTML = minute;

  let myDay = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ],
    myMonth = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ],
    day = myDate.getDate();

  let currentDate = `${myDay[myDate.getDay()]} , ${
    myMonth[myDate.getMonth()]
  } , ${day}`;
  document.getElementsByClassName('date')[0].innerHTML =
    currentDate.toUpperCase();
}

myTime();

setInterval(function () {
  myTime();
}, 1000);
