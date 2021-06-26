
// first we need 3 variables -> a context, rectangle, loop;

// context will be the canvas or the div class canvas

let context, rectangle, loop;

context = document.querySelector("canvas").getContext("2d");

/* 

    Returns an object that provides methods and properties for drawing 
    and manipulating images and graphics on a canvas element in a document. 
    A context object includes information about colors, line widths, fonts, 
    and other graphic parameters that can be drawn on a canvas.

*/

// next we will set the size of the canvas for the rectangle to be contained in

context.canvas.height = 180;
context.canvas.width = 320;

// next the retangle dimessions

rectangle = {
    height: 32,
    width: 32,
    x: 0,
    y: 72
}

// next is the loop, for the game

loop = function() {

    // this moves the square's x cood
    rectangle.x+=1;

    // we have to give the canvas gray filling
    context.fillStyle = '#202020';
    // This erases the color behind and around the square, because it
    // didn't we will get a contiouns stroke
    context.fillRect(0, 0, 320, 180);
    // This keeps the rectangle stroking the canvas
    context.fillStyle = "#ff0000";// hex for red
    context.beginPath();
    // the dimessional of the rectangle
    context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    context.fill();

    // collision detection
    // if pass 320 start over

    if( rectangle.x > 320 ) {
        rectangle.x = -20
    }

    // browser redrawing and refreshing the screen 60fps and when a refresh
    // the loop
    window.requestAnimationFrame(loop);

}

window.requestAnimationFrame(loop);