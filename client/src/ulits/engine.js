
import Rectangle from "./player/playerClass";
import { bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2 } from './player/playerPhysics';

Rectangle.prototype = {
    //physics
    bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2,
    
}
console.log(Rectangle)


/* 

    TODOS 

    when a client connect on the socket, the play instantises 
    a new player

    the max is two players

*/

// we have to define the dimessions of the html5 canvas in pixels

const engine = (...playersData) => {

    // when a player is connected a new square is created 



    
    // Select the canvas element and define it's dimessions

    const context = document.querySelector("canvas").getContext('2d');

    // getContext method returns a drawing context on the canvas,
    // "2d", leading to the creation of a CanvasRenderingContext2D 
    // object representing a two-dimensional rendering context.

    context.canvas.height = 180; // screen height
    context.canvas.width = 320; // screen width


    // this loop has to take args for the players connect

    const loop = function(...players) {

        // player's controls here

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