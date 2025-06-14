const container = document.getElementById('container');
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.setProperty('--hover-color', colors[Math.floor(Math.random() * colors.length)]);
    container.appendChild(square);
}