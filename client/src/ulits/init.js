

import { useEffect } from 'react';
import { io } from 'socket.io-client';

import Rectangle from "./player/playerClass";
import { controller, input } from './player/playerControllers';
import { bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2 } from './player/playerPhysics';


// we have to define the dimessions of the html5 canvas in pixels

const init = () => {

    // here we will set a dictionary of the player on the client-side

        // port listening to
        const socket = io('http://localhost:3001', {'force new connection': true});

        const context = document.querySelector("canvas").getContext('2d');

        // here we will send the starting x_cood of the rectangles

        // here we will update the player
        // instantise new rectangles and tell if the client has a connection or disconnection


        // make a game logic function here to catch the emit of the socket

        // here will where the player can use the key controller functions
        // here will be the game loop

        // userControllers here
        userControllers(/*  */)
        // engine invoked by requestAnimationFrame
}

// Here We Export the Game

export default init;


/* 

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

        let playerSettings = { height: 32, width: 32, jumping: true, x_velocity: 0, x: 80, y_velocity: 0, y: 0, color: '#eb4334', name: 'red' }

       let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');

       // will hold clients
        var clientPlayers = {};
        
        // we will emit a player to the server when connected
        socket.emit('newPlayer', playerSettings);
        
        
        // the server sends back the new connected client
        socket.on('updatePlayers', data => {
            for(let id in clientPlayers) {
                let playersFound = {}
                if(clientPlayers[id] !== undefined && id !== data.id) {
                    clientPlayers[id] = new Rectangle(
                        data[id].height, data[id].width, data[id].jumping, data[id].x_velocity, data[id].x, data[id].y_velocity, data[id].y, data[id].color, data[id].name
                    )
                    console.log(clientPlayers)
                    playersFound[id] = true
                }
            }
        })
        
        const loop = function() {

            context.canvas.height = 180; // screen height
            context.canvas.width = 320; // screen width

            // Fills Canvas / Context
            context.fillStyle = '#202020';
            context.fillRect(0, 0, 320, 180);


            


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

*/