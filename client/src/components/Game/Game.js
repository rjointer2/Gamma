
import { useEffect } from 'react';

import { io } from 'socket.io-client';
import engine from '../../ulits/engine';

// this is can be used with a proxy later on



const Game = () => {

    const socket = io('http://localhost:3001');

    

    function newPlayer() {
        // now the client is sending data constantly
        // in the server we have to receive this data
        socket.emit(`update`, 'test')
    }

    /* 

    If new client a new player is created 
    
    */

    // engine here 

    useEffect(() => {
        // We have to pass the engine in the useEffect to not 
        // render on a side effect and prevent canvas 
        // selected from being null when queryed
        engine()
    }, []);

    

    return (
        <div>
            {/* THIS IS WHERE THE GAME'S SCREEN IS HELD */}
           <canvas></canvas>
        </div>
    )
}

export default Game;