
import { useEffect } from 'react';
import engine from '../../ulits/engine';

// this is can be used with a proxy later on



const Game = () => {

    useEffect(() => {
        // engine here 
        engine();
    }, [])


    return (
        <div>
            {/* THIS IS WHERE THE GAME'S SCREEN IS HELD */}
           <canvas></canvas>
        </div>
    )
}

export default Game