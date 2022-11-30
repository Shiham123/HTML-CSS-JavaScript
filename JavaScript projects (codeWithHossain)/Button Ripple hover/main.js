const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('mouseenter', function (e) {
    const x = e.clientX - e.target.offSetLeft;
    const y = e.clientY - e.target.offSetTop;
    const ripple = document.createElement('span');

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });
});
