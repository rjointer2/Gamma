
export function userController(player, canvas) {

    // jumping 
    if(controller.up && player.jumping == false) {
        player.y_velocity -= 20;
        player.jumping = true;
    }

    // left controlloer input
    if(controller.left) {
        player.x_velocity -= 0.2;
    }

    // right controller input 
    if(controller.right) {
        player.x_velocity += 0.2;
    }

    // physics

    // velocity is 1.5 every frame
    player.y_velocity += 0.4; // gravity of the canvas
    player.x += player.x_velocity;
    player.y += player.y_velocity;

    // friction -> slow gradually

    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    // ground detection

    if ( player.y > 180 - 16 - 32 ) {

        player.jumping = false;
        player.y = 180 - 16 - 32;

        // once the player hits the ground, your veclocity should stop
        // instantly
        player.y_velocity = 0;

    }

}

export let controller = {

    left: false,
    right: false,
    up: false,
    // this invokes the function
    keyListener: function (event) {
    
        // state of the key

        // when the event type is compared to keydown and the ternary is truthy or falsy
        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {
            // so the server has to make it server
            case 37: // left key
            controller.left = key_state;
            console.log(controller.left)
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