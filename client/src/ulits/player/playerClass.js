
// Rectangle Class

let Rectangle = function(height, width, jumping, x_velocity, x, y_velocity, y, color, name ) {

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

export default Rectangle;

