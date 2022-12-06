function getTimeRemaining(endTime) {
  var time = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor((time / 1000) % 60);
  var minutes = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  var days = Math.floor(time / (1000 * 60 * 60 * 24));

  return {
    total: time,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(className, endTime) {
  var clock = document.querySelector(`.${className}`);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var time = getTimeRemaining(endTime);

    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = ('0' + time.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + time.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  var timeInterval = setInterval(updateClock, 1000);
}

var deadLine = new Date(Date.parse(new Date()) + 11 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadLine);
