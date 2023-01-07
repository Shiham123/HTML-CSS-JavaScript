const btnEl = document.getElementById('btn');
btnEl.addEventListener('click', getUsers);

function getUsers(event) {
  event.preventDefault();

  const http = new XMLHttpRequest();
  http.open('GET', './user.json', true);

  http.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  http.send();
}
