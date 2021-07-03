
import { io }  from "socket.io-client";

import { disconnectPlayer } from "./disconnectPlayer";
import { controller } from "./controller";
import { drawSquare } from "./draw";
import { input } from "./input";


const init = (canvas, context) => {


    const socket = io('/', {'force new connection': true});

    /* 
    
        TODO's 

        completed : connection creates new instantaion of square for each player
        seperate controls
        sync movemnet both clients 
        make collision methods
        squares can shoot
        lost health
        win and lose conditions
    
    */

    // CLIENT INSTANTIATION
    // ____________________

    let clientPlayers = {};

    // PLAYER INSTANTIATION
    // ____________________

    let SQUARES = [];

    // Rectangle Class
    let Rectangle = function(height, width, jumping, x_velocity, x, y_velocity, y, color, name, firstPlayer ) {
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

    Rectangle.prototype = {
        drawSquare, input, controller, disconnectPlayer
    };

    /* let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');
    let blue = new Rectangle(32, 32, true, 0, 200, 0, 0, '#3477eb', 'blue'); */
    let red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');







    // CLIENT SOCKETS
    // ____________________

    let playerSettings = {
        height: 32, width: 32, jumping: true, x_velocity: 0, x: 0, y_velocity: 0, y: 0, color: 'red', name: 'red', firstPlayer: null
    }

    
    socket.emit('newPlayerJoined', playerSettings);

    // client will listen for this event then
    socket.on('updatePlayers', data => {
        let playerExist = {}
        // cnavas is clear for no stack accidently
        context.clearRect(0, 0, 320, 180);
        for(let id in data) {
            clientPlayers[id] = new Rectangle(
                data[id].height, data[id].width, data[id].jumping, data[id].x_velocity, data[id].x, data[id].y_velocity, data[id].y, data[id].color, data[id].name, data[id].firstPlayer 
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


    socket.on('userInputsUpdated', data => {
       console.log(data)
       controller.left = data.left
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

