const container = document.getElementById('container');

function getRandomColor() {
    // Generate random RGB values between 50-255 to ensure visibility
    const r = Math.floor(Math.random() * 206) + 50;
    const g = Math.floor(Math.random() * 206) + 50;
    const b = Math.floor(Math.random() * 206) + 50;
    return `rgb(${r}, ${g}, ${b})`;
}

// Create 800 squares with random hover colors
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    
    // Store random color as a CSS variable
    square.style.setProperty('--hover-color', getRandomColor());
    
    // Apply the hover color using the CSS variable
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getComputedStyle(square).getPropertyValue('--hover-color');
    });
    
    // Return to default color on mouseout
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'rgb(29, 29, 29)';
    });
    
    container.appendChild(square);
}