const canvasEl = document.getElementById('canvas'),
  decreaseBtnEl = document.getElementById('decrease'),
  increaseBtnEl = document.getElementById('increase'),
  sizeEl = document.getElementById('size'),
  colorEl = document.getElementById('color'),
  clearBtnEl = document.getElementById('clear');

const ctx = canvasEl.getContext('2d');

let size = 10,
  isPressed = false,
  color,
  x = undefined,
  y = undefined;

canvasEl.addEventListener('mousedown', function (event) {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

canvasEl.addEventListener('mouseup', function (event) {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvasEl.addEventListener('mousemove', function (event) {
  if (isPressed) {
    const x2 = event.offsetX,
      y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increaseBtnEl.addEventListener('click', function () {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

decreaseBtnEl.addEventListener('click', function () {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

colorEl.addEventListener('change', function (event) {
  color = event.target.value;
});

clearBtnEl.addEventListener('click', function () {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
});

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}
