
import { useEffect } from 'react';

import { io } from 'socket.io-client';
import engine from '../../ulits/engine';

// this is can be used with a proxy later on



const Game = () => {

    const socket = io('http://localhost:3001');

    // In the engine we can pass players in the function
    // have a arr of player

    socket.emit('update', )

    // engine here 

    useEffect(() => {
        // We have to pass the engine in the useEffect to not 
        // render on a side effect and prevent canvas 
        // selected from being null when queryed
        engine();
    }, []);

    

    return (
        <div>
            {/* THIS IS WHERE THE GAME'S SCREEN IS HELD */}
           <canvas></canvas>
        </div>
    )
}

export default Game;