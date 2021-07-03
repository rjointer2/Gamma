import { io }  from "socket.io-client";
const socket = io('/', {'force new connection': true});

function emitUserInputs(obj) {
    console.log(obj)
    let userInputs = {
        left: controller.left,
        right: controller.right,
        up: controller.up,
    }
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
            break;
            case 38: // up key
            controller.up = key_state;
            break;
            case 39: // right key
            controller.right = key_state;
            break;

        }
        // we have to send the input to the server
        console.log('test')
        emitUserInputs(controller);
    }

}

