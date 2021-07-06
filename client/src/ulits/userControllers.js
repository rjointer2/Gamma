
export const userControllers = (
    // we pass the player 
    player,
    // we pass the socket emit method because 
    // every time we move, we need to send that
    // data to the server everytime cleanly to
    // every client
    emitSocket
) => {
    document.onkeydown = e => {

        let direction;
        if(e.keyCode === 37) direction = "left";
        if(e.keyCode === 38) direction = "up";
        if(e.keyCode === 39) direction = "right";
        if(e.keyCode === 40) direction = "down";

        player.move(direction);
        emitSocket.emit('move_player', direction);
    }

    document.onkeyup = e => {

        let direction;
        if(e.keyCode === 37) direction = "left";
        if(e.keyCode === 38) direction = "up";
        if(e.keyCode === 39) direction = "right";
        if(e.keyCode === 40) direction = "down";

        player.stop(direction);
        emitSocket.emit('stop_player', direction);
    }

}