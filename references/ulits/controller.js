import { io }  from "socket.io-client";
const socket = io('/', {'force new connection': true});

// to send as little data as possible a global var can be set detect
// the key if being held

let isKeyBeingPressed = false;

function emitUserInputs(obj) {
    console.log()
    let userInputs = {
        left: controller.left,
        right: controller.right,
        up: controller.up,
    }
    console.log(controller.left)
    // now we will send the userInputs
    socket.emit('userInputs', userInputs)
}

export let controller = {

    left: false,
    right: false,
    up: false,
    keyListener: function (event) {
        // state of the key

        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {

            case 37: // left key
            controller.left = key_state;
            if(!controller.left) {
                isKeyBeingPressed = true
            }
            break;
            case 38: // up key
            controller.up = key_state;
            if(!controller.up) {
                isKeyBeingPressed = true
            }
            break;
            case 39: // right key
            controller.right = key_state;
            if(!controller.right) {
                isKeyBeingPressed = true
            }
            break;

        }
        // we have to send the input to the server
        // if the key is being pressed set back to false and this should send less data
        if(isKeyBeingPressed) {
            emitUserInputs(controller);
            isKeyBeingPressed = false
        }
        
    }

}

