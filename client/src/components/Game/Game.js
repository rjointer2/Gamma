
// to get individual sockets
import { io } from 'socket.io-client';

// this is can be used with a proxy later on
const socket = io('http://localhost:3000');

socket.on('init', handleInit);

const Game = () => {

    function handleInit(msg) {
        console.log(msg)
    }

    return (
        <div>
           
        </div>
    )
}

export default Game;