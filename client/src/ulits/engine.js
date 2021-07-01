

import { io } from 'socket.io-client';

import Rectangle from "./player/playerClass";
import { controller, input } from './player/playerControllers';
import { bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2 } from './player/playerPhysics';


// we have to define the dimessions of the html5 canvas in pixels

const engine = (...playersData) => {

    // here we will set a dictionary of the player on the client-side
    let clientPlayers = {};

    // port listening to
    const socket = io('http://localhost:3001');

    const context = document.querySelector("canvas").getContext('2d');

    Rectangle.prototype = {
        // physics
        bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2,
        // controllers
        input,
        // animation
        draw: function() {
            // because the useEffect isn't catching the canvas on every went import from a different file
            // we will define the draw method directly in the prototype of the Rectangle with the same reference of the canvas
            
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

    let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');
    
    // when a player is connected a new square is created 

    socket.emit('newPlayer', {x: red.x_cood()});

    socket.on('updatePlayers', players => {
        context.clearRect(0, 0, 320, 180);
        // now to literate through the dictionaries
        let playersFound = {};


        for(let id in players) {
                                                // client get's own id on window
            if(clientPlayers[id] === undefined && id !== socket.id ) { 
                clientPlayers[id] = new Rectangle (32, 32, true, 0, 160, 0, 0, '#eb4334', 'red');
            }
            playersFound = true;
        }
        for(let id in clientPlayers[id]) {
            // we need a remove or delete function to remove the 
            // square from the screen
            if(!playersFound[id]) {
                
            }
        }
    })
 
    // this loop has to take args for the players connect

    const loop = function(...players) {

        // player's controls here

        red.input();
        

        context.canvas.height = 180; // screen height
        context.canvas.width = 320; // screen width

        // Fills Canvas / Context
        context.fillStyle = '#202020';
        context.fillRect(0, 0, 320, 180);

        // player's animation here

        red.draw();

        socket.emit('update', { x: red.x_cood() } )

        // player's border detection

        // The window.requestAnimationFrame() method tells the browser that you wish 
        // to perform an animation and requests that the browser calls a specified 
        // function to update an animation before the next repaint. 
        window.requestAnimationFrame(loop);
    
    }

    // Key Listener for Players

    // Red

    window.addEventListener("keydown", controller.keyListener);
    window.addEventListener("keyup", controller.keyListener);


    // Init Engine
    
    window.requestAnimationFrame(loop);
}

// Here We Export the Game

export default engine