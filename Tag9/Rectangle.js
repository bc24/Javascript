//
// Rectangle
//
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
    }

    draw(ctx) {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillRect(this.x, this.y, this.w, this.h);


    }

}