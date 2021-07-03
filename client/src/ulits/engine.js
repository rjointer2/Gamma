
const engine = (canvas, context) => {

    // the canvas and content

    function drawSquare(x, y, height, width) {
        // makes a new square
        context.beginPath();
        // we have to give the canvas gray filling
        // x & y defines the postion in the context or space
        context.rect(x, y, width, height);
        // so blue is working now! just no input
        context.fillStyle = 'red';// layer color: ;
        context.fill();
    }

    drawSquare(80, 0, 32, 32)


}

// Here We Export the Game

export default engine;


