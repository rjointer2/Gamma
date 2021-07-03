
import { io }  from "socket.io-client";

import { disconnectPlayer } from "./disconnectPlayer";
import { controller } from "./controller";
import { drawSquare } from "./draw";
import { input } from "./input";

const init = (canvas, context) => {

    const socket = io('/', {'force new connection': true});

    /* 
    
        TODO's 

        connection creates new instantaion of square for each player 
        make collision methods
        squares can shoot
    
    */

    // CLIENT INSTANTIATION
    // ____________________

    let clientPlayers = {};

    // PLAYER INSTANTIATION
    // ____________________

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
        drawSquare, input, controller, disconnectPlayer
    };

    /* let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');
    let blue = new Rectangle(32, 32, true, 0, 200, 0, 0, '#3477eb', 'blue'); */








    // CLIENT SOCKETS
    // ____________________

    let playerSettings = {
        height: 32, width: 32, jumping: true, x_velocity: 0, x: 0, y_velocity: 0, y: 0, color: 'red', name: 'red' 
    }

    
    socket.emit('newPlayerJoined', playerSettings);

    // client will listen for this event then
    socket.on('updatePlayers', data => {
        let playerExist = {}
        // cnavas is clear for no stack accidently
        context.clearRect(0, 0, 320, 180);
        for(let id in data) {
            clientPlayers[id] = new Rectangle(
                data[id].height, data[id].width, data[id].jumping, data[id].x_velocity, data[id].x, data[id].y_velocity, data[id].y, data[id].color, data[id].name 
            )
            playerExist[id] = true
        }
        

        // for disconnects
        for(let id in clientPlayers) {
            // remove from global array
            if(!playerExist[id]) {
                clientPlayers[id].disconnectPlayer(SQUARES);
                delete clientPlayers[id];
            }
        }


    })






    // ENGINE
    // ____________________

    function engine() {

        // Fills Canvas / Context aand repaint background
        context.fillStyle = '#202020';
        context.fillRect(0, 0, 320, 180);

        // now for each created render it on in the engine
        SQUARES.forEach((square) => {
            square.input();
            square.drawSquare(context);
        })

        requestAnimationFrame(engine);
    }

    requestAnimationFrame(engine);

    // controls
    window.addEventListener("keydown", controller.keyListener);
    window.addEventListener("keyup", controller.keyListener);

    
}


// Here We Export the Game

export default init;


