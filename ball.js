const ball = document.querySelector('.ball');
const container = document.querySelector('.container');

let x = container.clientWidth / 2;
let y = container.clientHeight / 2;
let speedX = 2;
let speedY = 2;
let acceleration = 0.4;
let bounce = 1.0;
let minSpeed = 2;
let maxSpeed = 4

function updateBallPosition() {
    x += speedX;
    y += speedY;
    // speedY += acceleration;

    // Check collisions with container borders
    if (x + ball.clientWidth > container.clientWidth || x < 0) {
        speedX = -speedX; // * bounce
        // correct position if ball is out of the container
        x = x < 0 ? 0 : container.clientWidth - ball.clientWidth;
    }

    if (y + ball.clientHeight > container.clientHeight || y < 0) {
        speedY = -speedY; // * bounce
        // correct position if ball is out of the container
        y = y < 0 ? 0 : container.clientHeight - ball.clientHeight;
    }

    // Update position in the container
    ball.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(updateBallPosition);
}

updateBallPosition();
