window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        player.moveUp()
    } else if (event.key === 'ArrowDown') {
        player.moveDown()
    }
})

let player = {
    element: document.getElementById('pong-player'),
    top: 30,
    bottom: 60,
    width: 15,

    moveUp: function() {
        if (this.top > 20) {
            this.top -= 10;
            this.bottom -= 10;
            this.updatePosition();
        }
    },

    moveDown: function() {
        if (this.bottom < 100) {
            this.top += 10;
            this.bottom += 10;
            this.updatePosition();
        }
    },

    updatePosition: function() {
        // update 
        this.element.style.top = `${this.top}vh`;
        this.element.style.bottom = `${100 - this.bottom}vh`;
        console.log(player.element.offsetTop);
    }
};


// Ball
let ball = {
    element: document.getElementById('ball'),
    positionX: 50,
    positionY: 50,
    speedX: 5,
    speedY: 5,
    diameter: 20,

    move: function() {
        // Logic for moving the ball


        // Update position
        this.element.style.left = `${this.positionX}%`
        this.element.style.top = `${this.positionY}%`
    }
}


ball.move()