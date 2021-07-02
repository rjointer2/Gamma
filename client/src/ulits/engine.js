

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import Rectangle from "./player/playerClass";
import { controller, input } from './player/playerControllers';
import { bottom, top, x_cood, y_cood, borderDetectionPlayer1, borderDetectionPlayer2 } from './player/playerPhysics';


// we have to define the dimessions of the html5 canvas in pixels

const useEngine = () => {

    useEffect(() => {
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


    let playersFound = {};

    //let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');
    
    // when a player is connected a new square is created 
    // remove this later 
    socket.emit('newPlayer', );

    socket.on('updatePlayers', players => {

        // when this updatePlayer fires it need to make a new square and pass in the for loop

        // now to literate through the dictionaries
        
        // player's data from the socket
        console.log(players)
        console.log(clientPlayers)
        for(let id in players) {
            // client get's own id on window
            if(clientPlayers[id] === undefined && id !== socket.id ) { 
                clientPlayers[id] = players[id]
                console.log(clientPlayers)
            }
            playersFound = true;
        }
        for(let id in clientPlayers) {
            // we need a remove or delete function to remove the 
            // square from the screen
            console.log(playersFound)
            if(!playersFound[id]) {
                
            }
        }
    })

    for(let i in clientPlayers ) {
        clientPlayers[i].input();
        clientPlayers[i].draw();
        console.log(clientPlayers[i])
    }
 
    // this loop has to take args for the players connect

    const loop = function() {

        context.canvas.height = 180; // screen height
        context.canvas.width = 320; // screen width

        // Fills Canvas / Context
        context.fillStyle = '#202020';
        context.fillRect(0, 0, 320, 180);

            for( let i in clientPlayers ) {
                // in here new square methods have to be called input and draw
            }

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
    }, [])
}

// Here We Export the Game

export default useEngine;