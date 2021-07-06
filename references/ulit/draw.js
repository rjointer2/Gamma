
export function draw(player, screen) {
    // makes a new square
    screen.beginPath();
    // we have to give the canvas gray filling
    // x & y defines the postion in the screen or space
    screen.rect(player.x, player.y, player.width, player.height);
    // so blue is working now! just no input
    screen.fillStyle = player.color;// layer color: ;
    screen.fill();
}