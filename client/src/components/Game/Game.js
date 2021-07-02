
import { useEffect, useRef } from 'react';

import useEngine from '../../ulits/engine';

// this is can be used with a proxy later on



const Game = () => {

    // engine here 

    useEngine();

    

    return (
        <div>
            {/* THIS IS WHERE THE GAME'S SCREEN IS HELD */}
           <canvas></canvas>
        </div>
    )
}

export default Game