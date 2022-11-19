function result() {
  var a, b, c;
  a = Number(document.getElementById('number1').value);
  b = Number(document.getElementById('number2').value);
  c = a + b;

  document.getElementById('demo').innerHTML = c;
}
