
// Rectangle Class
export class Rectangle {
    constructor(height, width, x, y, color, name ) {

        // position and coord
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        // physical stats

        this.speed = 10;

        // characteristics

        this.id = id;
        this.color = color;

        // this obj will be a bool to determine if the rectangle is moving
        this.moving = {};
        this.isMain = main;
        this.name = name;
    }

    draw(context) {
        // any keys release will be false 
        
        if (this.moving.right) this.x += this.speed;
        if (this.moving.left) this.x -= this.speed;
        if (this.moving.up) this.y -= this.speed;
        if (this.moving.down) this.y += this.speed;

        context.beginPath();
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.color;
    }

    move(dir) {
        // set the property of moving to true
        this.moving[dir] = true
    }

    stop(dir) {
        // set the property of moving to true
        this.moving[dir] = false
    }


};