import { controller } from "./controller";
import { drawSquare } from "./draw";
import { input } from "./input";

const init = (canvas, context) => {

    let SQUARES = [];

    // Rectangle Class
    let Rectangle = function(height, width, jumping, x_velocity, x, y_velocity, y, color, name ) {
        // regular properties to be used later
        // dimessions
        this.height = height;
        this.width = width;
        // coords
        this.x = x; // height poisitioning
        this.y = y; // left and right / y position
        // physics
        this.jumping = jumping; // a boolean to tell if the rectangle isn't grounded
        this.x_velocity = x_velocity;
        this.y_velocity = y_velocity;
        // characteristics / comestics
        this.color = color;
        this.name = name;
        // With the square class, every it's instanisated push in the ref of the SQUARE arr
        SQUARES.push(this);
    }

    Rectangle.prototype = {
        drawSquare, input, controller
    }

    let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');
    let blue = new Rectangle(32, 32, true, 0, 200, 0, 0, '#3477eb', 'blue');


    function engine() {

        context.fillStyle = '#202020';
        context.fillRect(0, 0, 320, 180);

        // now for each created render it on in the engine
        SQUARES.forEach((square) => {
            square.input()
            square.drawSquare(context);
        })

        requestAnimationFrame(engine)
    }

    requestAnimationFrame(engine)

    window.addEventListener("keydown", controller.keyListener);
    window.addEventListener("keyup", controller.keyListener);

    
}


// Here We Export the Game

export default init;


