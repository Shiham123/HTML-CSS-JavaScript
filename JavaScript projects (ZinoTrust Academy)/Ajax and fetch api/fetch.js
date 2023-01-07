const btnEl = document.getElementById('btn');
btnEl.addEventListener('click', getUsers);

function getUsers(event) {
  event.preventDefault();

  fetch('./user.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let output = '';

      data.forEach(function (perData) {
        output += `
        <hr>
        <ul>
            <li>ID: ${perData.id}</li>
            <li>Name: ${perData.name}</li>
            <li>Age: ${perData.age}</li>
            <li>Email: ${perData.email}</li>
        </ul>
        `;
      });

      const showOutput = document.getElementById('users');
      showOutput.innerHTML = output;
    });
}
