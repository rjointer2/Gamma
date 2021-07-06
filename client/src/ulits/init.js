import {io} from 'socket.io-client';
import { Rectangle } from './player';


export function init(canvas, context) {

    const socket = io('/')

    // where the players on connection will be pushed
    let players = [];

    socket.on('init', ({id, clients}) => {

        // pass in player 
        const player = new Rectangle({id});

        // send the server a plain object 
        socket.emit("new_player", player);

        // now we have tp pass a plain obj and instanise it because
        // server won't get a define class object with methods
        // so on new connection cast that plain obj with the client's props
        socket.on("new_player", obj => player.push(new Rectangle(obj)))

        // now redefine player dynamically on each connection make 
        // a new player and create an array
        players = clients.map(obj => new Rectangle(obj)).concat(player)

        const engine = () => {
            // size of canvas
            context.fillStyle = '#202020';
            context.fillRect(0, 0, 320, 180);

            // return a instanisted rectangle object with the draw method
            players.forEach(obj => obj.draw(context))

            requestAnimationFrame(engine)
        }
    })


}