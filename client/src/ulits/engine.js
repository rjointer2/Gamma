
import Rectangle from "./player/playerClass";
import { input } from './player/playerControllers';
import { bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2 } from './player/playerPhysics';

Rectangle.prototype = {
    // physics
    bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2,
    // controllers
    input,
}


// we have to define the dimessions of the html5 canvas in pixels

const engine = (...playersData) => {

    const context = document.querySelector("canvas").getContext('2d');

    // Yes we are putting the a method in the engine directly
    // but to keep on time with the deadline, this is 
    // best solution I could think of without the useEffect
    // not catching the context
    Rectangle.prototype = {
        draw: function() {
            // this happens only once!

            // makes a new square
            context.beginPath();
            // we have to give the canvas gray filling
            // x & y defines the postion in the context or space
            context.rect(this.x, this.y, this.width, this.height);
            // so blue is working now! just no input
            context.fillStyle = this.color;// layer color: ;
            context.fill();
        }
    }

    // when a player is connected a new square is created 


    // this loop has to take args for the players connect

    const loop = function(...players) {

        // player's controls here


        

        context.canvas.height = 180; // screen height
        context.canvas.width = 320; // screen width

        // Fills Canvas / Context
        context.fillStyle = '#202020';
        context.fillRect(0, 0, 320, 180);

        // player's animation here

        // player's border detection

        // The window.requestAnimationFrame() method tells the browser that you wish 
        // to perform an animation and requests that the browser calls a specified 
        // function to update an animation before the next repaint. 
        window.requestAnimationFrame(loop);
        // We will recursive call the method give a new frame, => 60 frames every second
        // or 60 fps
    
    }
    
    // Init Engine
    
    window.requestAnimationFrame(loop);
}

// Here We Export the Game

export default engine