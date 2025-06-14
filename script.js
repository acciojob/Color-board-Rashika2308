const container = document.getElementById('container');
const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => {
    const color = getRandomColor();
    square.style.setProperty('--hover-color', color);
    square.classList.add('hovered');
    setTimeout(() => {
      square.classList.remove('hovered');
    }, 1000);
  });

  container.appendChild(square);
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

