


export default class Particle {
    constructor(mouseX, mouseY, radius, color){
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.radius = radius;
        this.color = color;
        this.radians = 0;
        this.velocity = 0.5;
        //Functions
        this.update = this.update.bind(this);
        this.draw = this.draw.bind(this);
    }

    update (ctx) {
        this.radians += this.velocity;
        this.x = Math.cos(this.radians) * this.radius;
        this.y = Math.sin(this.radians) * this.radius;
        this.draw(ctx);
    }

    draw (ctx) {
        ctx.beginPath();
        ctx.fillstyle = 'white';
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
}