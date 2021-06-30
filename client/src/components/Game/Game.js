
import { useEffect } from 'react';

import { io } from 'socket.io-client';
import engine from '../../ulits/engine';

// this is can be used with a proxy later on



const Game = () => {

    const socket = io('http://localhost:3001');

    socket.on('serverToClient', (data) => {
        console.log( `test message: ${data}`)
    });

    // engine here 

    useEffect(() => {
        const context = document.querySelector("canvas");
        console.log(context)
    }, []);

    

    return (
        <div>
            {/* THIS IS WHERE THE GAME'S SCREEN IS HELD */}
           <canvas></canvas>
        </div>
    )
}

export default Game;