
export function disconnectPlayer(array) {
    // check if array is populate
    if(array.indexOf(this) !== -1 ) {
        // start arg is the elem return and the delete arg is 
        // deleting only 1 element
        array.splice(array.indexOf(this), 1);
    }
}