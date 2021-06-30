// We have 5 variables

let context, controller, controller1, Rectangle, loop; 
                                                // engine

/* 

    context ->          This is the Canvas HTML5 Element in native Javascript that allows 
                        ditigal painting to be made. This game relays heavily on the canvas
                        and ALL physics and mechanics must account for the context.

    controller ->       This keybinds used to move the rectangles, each rectangle gets a controller
    controller1 ->      In this beta model, we have the arrow keys codes and "a", "w", "s", "d"
                        to control the rectangles individually

    Rectangle ->        A class use to blueprint the dimension and position on the context 

    loop ->             The "engine" that loop each frame of the context to simulate moving

*/

// getContext method returns a drawing context on the canvas,
// "2d", leading to the creation of a CanvasRenderingContext2D 
// object representing a two-dimensional rendering context.

context = document.querySelector("canvas").getContext('2d');


// we have to define the dimessions of the html5 canvas in pixels

context.canvas.height = 180;
context.canvas.width = 320;















// Rectangle Class

Rectangle = function(height, width, jumping, x_velocity, x, y_velocity, y, color, name ) {

    // regular properties to be used later

    // dimessions
    this.height = height;
    this.width = width;

    // coords

    this.x = x; // height poisitioning
    this.y = y; // left and right / y position

    // physics
    
    this.jumping = jumping; // a boolean to tell if the rectangle isn't grounded
    
    this.x_velocity = x_velocity;
    this.y_velocity = y_velocity;

    // characteristics / comestics

    this.color = color;
    this.name = name;

}










// Rectangle Class Controls and Inputs and Physics Logic

Rectangle.prototype = {
    // For Red rectangle
    input1: function() {

        // jumping 
        if(controller.up && this.jumping == false) {
            this.y_velocity -= 20;
            this.jumping = true;
        }
    
        // left controlloer input
        if(controller.left) {
            this.x_velocity -= 0.2;
        }
    
        // right controller input 
        if(controller.right) {
            this.x_velocity += 0.2;
        }
    
        // physics
    
        // velocity is 1.5 every frame
        this.y_velocity += 0.4; // gravity of the canvas
        this.x += this.x_velocity;
        this.y += this.y_velocity;
    
        // friction -> slow gradually
    
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;
    
        // ground detection
    
        if ( this.y > 180 - 16 - 32 ) {
    
            this.jumping = false;
            this.y = 180 - 16 - 32;
    
            // once the this hits the ground, your veclocity should stop
            // instantly
            this.y_velocity = 0;
    
        }
    },
    input2: function() {
        
        if(controller1.up && this.jumping == false) {
            this.y_velocity -= 20;
            this.jumping = true;
        }
    
        // left controlloer input
        if(controller1.left) {
            this.x_velocity -= 0.2;
        }
    
        // right controller1 input 
        if(controller1.right) {
            this.x_velocity += 0.2;
        }
    
        // physics
    
        // velocity is 1.5 every frame
        this.y_velocity += 0.4; // gravity of the canvas
        this.x += this.x_velocity;
        this.y += this.y_velocity;
    
        // friction -> slow gradually
    
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;
    
        // ground detection
    
        if ( this.y > 180 - 16 - 32 ) {
    
            this.jumping = false;
            this.y = 180 - 16 - 32;
    
            // once the this hits the ground, your veclocity should stop
            // instantly
            this.y_velocity = 0;
    
        }
    }, 
    draw: function() {

        // this happens only once!

        // makes a new square
        context.beginPath();
        // we have to give the canvas gray filling
        // x & y defines the postion in the context or space
        context.rect(this.x, this.y, this.width, this.height);
        // so blue is working now! just no input
        context.fillStyle = this.color;// layer color: ;
        context.fill();
<<<<<<< HEAD:version_3/index.js
    }, 


    // for the collision detection

    bottom: function() { return this.y + this.height },
    x_cood: function() { return this.x },
    top: function() { return this.x + this.width },

    borderDetectionPlayer1: function() {
        if(this.x_cood() > 148  ) {
            this.x = 148;
        }
        return false;
    },
    borderDetectionPlayer2: function() {
        if(this.x_cood() < 148  ) {
            this.x = 148;
        }
        return false;
=======
>>>>>>> 890562d68376901d1074896937df4b27b163a5e2:references/version_3/index.js
    }
}
















// Players

red = new Rectangle(32, 32, true, 0, 80, 0, 0, '#eb4334', 'red');
blue = new Rectangle(32, 32, true, 0, 200, 0, 0, '#3477eb', 'blue');























// controllers

/* 

    we have to bind the addEventListeners to the window object

*/

// so blue needs a second controller to play now

controller = {

    left: false,
    right: false,
    up: false,
    keyListener: function (event) {
        // state of the key

        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {

            case 37: // left key
            controller.left = key_state;
            break;
            case 38: // up key
            controller.up = key_state;
            break;
            case 39: // right key
            controller.right = key_state;
            break;


        }
    }

}

controller1 = {

    left: false,
    right: false,
    up: false,
    keyListener: function (event) {

        console.log('controller 1')

        // state of the key

        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {

            case 65: // left key
            controller1.left = key_state;
            break;
            case 87: // up key
            controller1.up = key_state;
            break;
            case 68: // right key
            controller1.right = key_state;
            break;

        }
    }

}




























// Engine

loop = function() {

    red.input1();
    blue.input2();

    // Fills Canvas / COntext
    context.fillStyle = '#202020';
    context.fillRect(0, 0, 320, 180);

    // Redraws the red and blue square each frame
    red.draw();
    blue.draw();

<<<<<<< HEAD:version_3/index.js
    blue.borderDetectionPlayer2();
    red.borderDetectionPlayer1();
=======
>>>>>>> 890562d68376901d1074896937df4b27b163a5e2:references/version_3/index.js

    // The window.requestAnimationFrame() method tells the browser that you wish 
    // to perform an animation and requests that the browser calls a specified 
    // function to update an animation before the next repaint. 
    window.requestAnimationFrame(loop);
    // We will recursive call the method give a new frame, => 60 frames every second
    // or 60 fps

};














// Key Listener for Players

// Red

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);

// Blue

window.addEventListener("keydown", controller1.keyListener);
window.addEventListener("keyup", controller1.keyListener);


// Init Engine

window.requestAnimationFrame(loop);

console.log(red);

// New Goals

/* 

-> Define a invisible wall or detection for each square to not cross!
-> Make the square shoot something

// it's a animation that shoots square


____________________

other goals

- losing health 
- death or win conditions

*/

