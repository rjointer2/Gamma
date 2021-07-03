
import { draw } from "./draw";
import { controller, userController } from "./userController";

export const init = (canvas, context) => {


    // PLAYER INSTANTIATION
    // ____________________

    let SQUARES = [];

    // Rectangle Class
    class Rectangle {
        constructor(height, width, jumping, x_velocity, x, y_velocity, y, color, name, firstPlayer ) {
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
            this.firstPlayer = firstPlayer;
            // With the square class, every it's instanisated push in the ref of the SQUARE arr
            SQUARES.push(this);
        }
    }
    

    let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red')

    // ENGINE
    // ____________________

    function engine() {

        // Fills Canvas / Context aand repaint background
        context.fillStyle = '#202020';
        context.fillRect(0, 0, 320, 180);
    
        /* red.drawSquare(context);
        red.input(); */
    
        // now for each created render it on in the engine
        SQUARES.forEach((square) => {
            draw(red, context);
            userController(red, canvas);
        })
    
        requestAnimationFrame(engine);

    }

    requestAnimationFrame(engine);

    window.addEventListener('keydown', controller.keyListener)
    window.addEventListener('keyup', controller.keyListener)
    
}