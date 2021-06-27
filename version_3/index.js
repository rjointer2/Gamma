// We have to make 3 variables for the rectangle

let context, controller, controller1, Rectangle, loop;

// we now have to slect the canvas html5 element and get the context
context = document.querySelector("canvas").getContext('2d');


// we have to define the dimessions of the html5 canvas 

context.canvas.height = 180;
context.canvas.width = 320;

// define the propteries and dimesion of the rectangle



Rectangle = function(height, width, jumping, x_velocity, x, y_velocity, y, color, name, dom) {
    this.height = height;
    this.width = width;
    // we have access to this prop so when it's jumping we define 
    // flase in the air
    this.jumping = jumping;
    this.x_velocity = x_velocity;
    this.x = x; // on the ground
    this.y_velocity = y_velocity;
    this.y = y;
    this.color = color;
    this.name = name;
    this.dom = dom;

}

Rectangle.prototype = {
    input1: function() {
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

        // makes a new square
        context.beginPath();
        // we have to give the canvas gray filling
        context.rect(this.x, this.y, this.width, this.height);
        // so blue is working now! just no input
        context.fillStyle = this.color;// layer color: ;
        context.fill();
    }, 
    // for the collision
    bottom: function() {
        return this.y + this.height
    },
    left: function() {
        return this.x
    },
    top: function() {
        return this.x + this.width
    },
    right: function() {
        return this.y
    },
    testCollision:function(rectangle) {

        if (this.top > rectangle.bottom || this.right < rectangle.left || this.bottom < rectangle.top || this.left > rectangle.right) {
    
          return false;
    
        }
    
        return true;
    
      }
}



red = new Rectangle(32, 32, true, 0, 144, 0, 0, '#eb4334', 'red', document.createElement('h2'));
blue = new Rectangle(32, 32, true, 0, 100, 0, 0, '#3477eb');





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

        console.log(event.keyCode)
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


// now let's merge the controller logic with the physics

loop = function() {

    red.input1();
    blue.input2();

    context.fillStyle = '#202020';
    context.fillRect(0, 0, 320, 180);

    red.draw();
    blue.draw();

    console.log(red.left())

    

    window.requestAnimationFrame(loop);

};

// player 1

// so why is the controller defined but the controller 1 isn't

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);

window.addEventListener("keydown", controller1.keyListener);
window.addEventListener("keyup", controller1.keyListener);




window.requestAnimationFrame(loop);

console.log(red)

