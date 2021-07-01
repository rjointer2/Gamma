
import Rectangle from "./playerClass";

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
    }
}