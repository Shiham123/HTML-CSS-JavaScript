const containerElement = document.querySelector('.container');
window.addEventListener('mousemove', (event) => {
  containerElement.innerHTML = `<div class="mouse-event">
    ${event.clientX}
    <h4>Mouse X position(px)</h4>
  </div>

  <div class="mouse-event">
    ${event.clientY}
    <h4>Mouse Y position</h4>
  </div>`;
});
