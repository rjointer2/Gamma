
import Rectangle from "./playerClass";

Rectangle.prototype = {
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
    }
}