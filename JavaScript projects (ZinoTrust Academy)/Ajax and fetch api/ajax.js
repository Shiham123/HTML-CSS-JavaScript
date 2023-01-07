const btnEl = document.getElementById('btn');
btnEl.addEventListener('click', getUsers);

function getUsers(event) {
  event.preventDefault();

  const http = new XMLHttpRequest();
  http.open('GET', './user.json', true);

  http.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);

      const users = JSON.parse(this.responseText);

      let output = '';

      users.forEach(function (user) {
        output += `
        <hr>
        <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Age: ${user.age}</li>
            <li>Email: ${user.email}</li>
        </ul>
        `;
      });
      const showEl = document.getElementById('users');
      showEl.innerHTML = output;
    }
  };

  http.send();
}
