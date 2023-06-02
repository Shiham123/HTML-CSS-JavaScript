const diceEl = document.getElementById('dice'),
  rollBtnEl = document.getElementById('roll-button'),
  rollHistoryEl = document.getElementById('roll-history');

let storeResultRoll = [];

function getDiceRoll() {
  const rollNumber = Math.floor(Math.random() * 6) + 1;
  const resultRoll = getDiceCode(rollNumber);
  diceEl.innerHTML = resultRoll;
  storeResultRoll.push(rollNumber);
  getShowRollResult();
}

function getShowRollResult() {
  rollHistoryEl.innerHTML = '';
  for (let i = 0; i < storeResultRoll.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceCode(
      storeResultRoll[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

function getDiceCode(rollResult) {
  switch (rollResult) {
    case 1:
      return '&#9856';
    case 2:
      return '&#9857';
    case 3:
      return '&#9858';
    case 4:
      return '&#9859';
    case 5:
      return '&#9860';
    case 6:
      return '&#9861';
    default:
      return '';
  }
}

rollBtnEl.addEventListener('click', () => {
  diceEl.classList.add('roll-animation');

  setTimeout(() => {
    diceEl.classList.remove('roll-animation');
    getDiceRoll();
  }, 1000);
});
