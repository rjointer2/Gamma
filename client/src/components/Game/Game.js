
import { useEffect } from 'react';

import engine from '../../ulits/engine';

// this is can be used with a proxy later on



const Game = () => {

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

export default Game