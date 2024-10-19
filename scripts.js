const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];
let theme = 'dark';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createStars() {
    stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            color: theme === 'dark' ? '#ffffff' : '#ffd700'
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        ctx.closePath();
    });
}

function animateStars(mouseX, mouseY) {
    stars.forEach(star => {
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            star.x += Math.cos(angle) * 2;
            star.y += Math.sin(angle) * 2;
        }
        
        // Wrap around screen
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height) star.y = 0;
        if (star.y < 0) star.y = canvas.height;
        
        drawStars();
    });
}

canvas.addEventListener('mousemove', event => {
    animateStars(event.clientX, event.clientY);
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    
    createStars(); // Recreate stars with new theme colors
});

window.addEventListener('resize', () => {
   canvas.width = window.innerWidth; 
   canvas.height = window.innerHeight; 
   createStars();
});

createStars();
drawStars();