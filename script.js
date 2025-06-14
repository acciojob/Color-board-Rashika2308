const container = document.getElementById('container');

// Create 800 squares
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);
}