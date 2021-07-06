
import {io} from 'socket.io-client';

import { draw } from "./draw.js";
import { controller, userController } from "./userController";

export const init = (canvas, context) => {

    const socket = io('/');

    // PLAYER INSTANTIATION
    // ____________________

    let SQUARES = [];

    // Rectangle Class
     class Rectangle {
        constructor(height, width, jumping, x_velocity, x, y_velocity, y, color, name, ducking ) {
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
            this.ducking = ducking;
            this.orginalHeight = height;
            // With the square class, every it's instanisated push in the ref of the SQUARE arr
            SQUARES.push(this)
        }
    };


    // we can pass the arr as a arg in a function to 
    // instantise class objects 

    let clie = {}

    let newPlayer = {
        height: 32,
        width: 32,
        jumping: true,
        x: 0,
        x_velocity: 0,
        height: 32,
        height: 32,
    }

    let red = new Rectangle(32, 32, true, 0, 20, 0, 0, 'red', 'hero', false);

    socket.on('updatePostionOfPlayer', players => {
        for(let id in players) {
            clie[id] = new Rectangle()
        }
    })
    

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
            draw(square, context);
            userController(square, canvas);
        })
    
        requestAnimationFrame(engine);

    }

    requestAnimationFrame(engine);

    window.addEventListener('keydown', controller.keyListener)
    window.addEventListener('keyup', controller.keyListener)
    
}