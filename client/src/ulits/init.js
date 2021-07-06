import {io} from 'socket.io-client';
import { Rectangle } from './player';
import { userControllers } from './userControllers';


export function init(canvas, context) {

    const socket = io('/')

    // where the players on connection will be pushed
    let players = [];

    socket.on('init', ({id, clients}) => {

        // pass in player 
        let player = new Rectangle(32, 32, 80, 80, 'red', 'hero');
        console.log(player)

        // user controllers
        userControllers(player, socket)

        // send the server a plain object 
        socket.emit("new_player", player);

        // now we have tp pass a plain obj and instanise it because
        // server won't get a define class object with methods
        // so on new connection cast that plain obj with the client's props
        socket.on("new_player", obj => players.push(new Rectangle(obj)));

        // we have to listen for the control of the client now
        // how the key is or isn't pressed
        // when we emit to the server, we still have the id of the same socket
        // so we have to find which player isn't moving
        socket.on("move_player", ({id, direction}) => players.find( obj => obj.id === id ).move(direction)) 
        /* 
        
            the find method returns the object versus map returning a array
        
        */
        socket.on("move_player", ({id, direction}) => players.find( obj => obj.id === id ).move(direction)) 

        // now redefine player dynamically on each connection make 
        // a new player and create an array
        players = clients.map(obj => new Rectangle(obj)).concat(player)

        const engine = () => {
            // size of canvas
            context.fillStyle = '#202020';
            context.fillRect(0, 0, 600, 200);

            // return a instanisted rectangle object with the draw method
            players.forEach(obj => obj.draw(context))

            requestAnimationFrame(engine)
        }
        engine()
    })


}