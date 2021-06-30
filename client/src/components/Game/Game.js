
// to get individual sockets
import { io } from 'socket.io-client';

// this is can be used with a proxy later on



const Game = () => {

    const socket = io('http://localhost:3001');

    socket.on('init', handleInit);

    function handleInit(msg) {
        console.log(msg)
    }

    console.log('test')

    return (
        <div>
           
        </div>
    )
}

export default Game;