function textOne() {
  setText('infoOne', 'click one');
  const sum = toNumber('inputOne');
  console.log(sum);
}
function textTwo() {
  setText('infoTwo', 'click two');
}
function textThree() {
  setText('infoThree', 'click three');
}

function setText(id, text) {
  document.getElementById(id).innerText = text;
}

function toNumber(id) {
  const result = document.getElementById(id).value;
  return parseInt(result);
}
