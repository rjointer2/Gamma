
// We have to make 3 variables for the rectangle

let context, controller, rectangle, loop;

// we now have to slect the canvas html5 element and get the context
context = document.querySelector("canvas").getContext('2d');

// we have to define the dimessions of the html5 canvas 

context.canvas.height = 180;
context.canvas.width = 320;

// define the propteries and dimesion of the rectangle

rectangle = {
    height: 32,
    width: 32,
    // we have access to this prop so when it's jumping we define 
    // flase in the air
    jumping: true,
    x_velocity: 0,
    x: 144, // on the ground
    y_velocity: 0,
    y: 0,
}




// controllers

/* 

    we have to bind the addEventListeners to the window object

*/

controller = {

    left: false,
    right: false,
    up: false,
    keyListener: (event) => {
        // state of the key

        let key_state = (event.type == "keydown") ? true : false;
        console.log(event.keyCode)

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

// now let's merge the controller logic with the physics

loop = function() {
    
    if(controller.up && rectangle.jumping == false) {
        rectangle.y_velocity -= 20;
        rectangle.jumping = true;
    }

    // left controlloer input
    if(controller.left) {
        rectangle.x_velocity -= 0.2;
    }

    // right controller input 
    if(controller.right) {
        rectangle.x_velocity += 0.2;
    }

    // physics

    // velocity is 1.5 every frame
    rectangle.y_velocity += 0.4; // gravity of the canvas
    rectangle.x += rectangle.x_velocity;
    rectangle.y += rectangle.y_velocity;

    // friction -> slow gradually

    rectangle.x_velocity *= 0.9;
    rectangle.y_velocity *= 0.9;

    // ground detection

    if ( rectangle.y > 180 - 16 - 32 ) {

        rectangle.jumping = false;
        rectangle.y = 180 - 16 - 32;

        // once the rectangle hits the ground, your veclocity should stop
        // instantly
        rectangle.y_velocity = 0;

    }

    // wall detection

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

    context.strokeStyle = "#202020";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 164);
    context.lineTo(320, 164);
    context.stroke();
    

    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);