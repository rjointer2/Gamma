
import { context } from "./engine/engine";

// we have to define the dimessions of the html5 canvas in pixels

const engine = () => {

    
    // Select the canvas element and define it's dimessions

    

    // getContext method returns a drawing context on the canvas,
    // "2d", leading to the creation of a CanvasRenderingContext2D 
    // object representing a two-dimensional rendering context.


    const loop = function() {

        console.log('test')


        // The window.requestAnimationFrame() method tells the browser that you wish 
        // to perform an animation and requests that the browser calls a specified 
        // function to update an animation before the next repaint. 
        window.requestAnimationFrame(loop);
        // We will recursive call the method give a new frame, => 60 frames every second
        // or 60 fps
    
    }
    
    // Init Engine
    
    window.requestAnimationFrame(loop);
}





// Here We Export the Game

export default engine