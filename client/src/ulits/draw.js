
export function drawSquare(screen) {
    // makes a new square
    screen.beginPath();
    // we have to give the canvas gray filling
    // x & y defines the postion in the screen or space
    screen.rect(this.x, this.y, this.width, this.height);
    // so blue is working now! just no input
    screen.fillStyle = this.color;// layer color: ;
    screen.fill();
}