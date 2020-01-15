var Ball = function(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 1.5 + 0.5;
    if (Math.random() < 0.5)
        this.speedX *= -1;
    this.speedY = Math.random() * 1.5 + 0.5;
    if (Math.random() < 0.5)
        this.speedY *= -1;
    this.radius = 4;
    this.update = update;
}

function update(width, height) {
    this.x += this.speedX;
    this.y += this.speedY;
    if ((this.x - this.radius < 0 && this.speedX < 0) ||
        (this.x + this.radius > width && this.speedX > 0)) {
        this.speedX *= -1;
    }
    if ((this.y - this.radius < 0 && this.speedY < 0) ||
        (this.y + this.radius > height && this.speedY > 0)) {
        this.speedY *= -1;
    }
}