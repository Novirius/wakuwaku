import * as CONSTANT from './constants.js';

export default class Orbs {
    constructor(centerX, centerY, circleRadius, color, label, ringRadius, timer, game) {
        //Variables
        this.centerX = centerX;
        this.centerY = centerY;
        this.circleRadius = circleRadius;
        this.initialRingRadius = circleRadius;
        this.testRadius = circleRadius;
        this.color = color;
        this.label = label;
        this.ringRadius = ringRadius;
        this.timer = timer;
        this.timerSize = this.timerSize.bind(this);
        this.alpha = 0.7;
        this.alphaPerFrame = 0.04;
        this.growthPerFrame = (circleRadius*3)/(circleRadius);
        this.active = 'active'
        this.frame = 0;
        this.time = 0;
        this.game = game;
        //Functions
        this.activeOrb = this.activeOrb.bind(this);
        this.expireOrb = this.expireOrb.bind(this);
        this.draw = this.draw.bind(this);
        this.expandRadiusFadeOut = this.expandRadiusFadeOut.bind(this);
        this.checkActive = this.checkActive.bind(this);

    }

    //Timer Ring: Shows time remaining before orb expires. Decreases in size closer to expiration.
    //IMPORTANT: ringRadius is the ADDITIONAL radius added on to circle radius. newRingRadius is circleRadius + ringRadius
    timerSize (dt) {
        this.ringRadius = this.ringRadius - ((this.initialRingRadius/(this.timer)) * dt*3)
        if (this.ringRadius < 0) {
            this.ringRadius = 0;
        }
        const newRingRadius = this.circleRadius + this.ringRadius;
        return newRingRadius;
    }

    expandRadiusFadeOut () {
        this.circleRadius = this.circleRadius + this.growthPerFrame
        this.alpha = this.alpha - (this.alphaPerFrame);
        if (this.alpha < 0) {
            this.alpha = 0;
        }
    }

    checkActive () {
        if (this.ringRadius === 0) {
            this.active = 'expire'
        }
    }

    expireOrb(ctx, dt) {
        //Circle
        ctx.beginPath();
        this.expandRadiusFadeOut();
        let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
        CONSTANT[this.color].circleLight(grd, this.alpha);
        CONSTANT[this.color].circleDark(grd, this.alpha);
        ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(233, 233, 233, '+this.alpha+')'
        ctx.stroke();
        ctx.save();
        ctx.closePath();
    }

    activeOrb(ctx, dt) {
        //Test Code
        // this.frame += 1;
        // this.time += dt;
        //Timer Animation
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.timerSize(dt), 0, 2 * Math.PI);
        ctx.lineWidth = 5;
        let grd2 = ctx.createLinearGradient(50, 0, 0, 220);
        CONSTANT[this.color].timerLight(grd2);
        CONSTANT[this.color].timerDark(grd2);
        ctx.strokeStyle = grd2;
        ctx.stroke();
        ctx.closePath();
        //Circle
        ctx.beginPath();
        let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
        CONSTANT[this.color].circleLight(grd, this.alpha);
        CONSTANT[this.color].circleDark(grd, this.alpha);
        ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = CONSTANT[this.color].circleEdge;
        ctx.stroke();
        ctx.save();
        ctx.closePath();
        //Text font, color, and positioning
        ctx.font = "30px Sans-Serif";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(this.label, this.centerX, this.centerY);
        ctx.addHitRegion
    }

    draw (ctx, dt) {
        this.checkActive();

        //It never reahes zero since it subtracts a percentage of its current radius
        if (this.active != 'expire') {
            this.activeOrb(ctx, dt);
        }
        else {
            // alert(`${this.frame} in ${this.time}s`)
            this.expireOrb(ctx);
        }
        if (this.alpha === 0) {
            this.game.removeObject();
        }
    }
    // draw (ctx, dt, canvas) {
    //     //Create Arc
    //     ctx.beginPath();
    //     const length = this.circleRadius * 2
    //     const lineThickness = length + 5
    //     ctx.lineWidth = lineThickness;
    //     ctx.lineCap = "round";
    //     CONSTANT.shortArc.bottomRight.translateBottom(ctx, length);
    //     CONSTANT.shortArc.bottomRight.createArc(ctx, this.centerX, this.centerY, length)
    //     ctx.strokeStyle = '#e9e9e9';
    //     ctx.stroke();
    //     ctx.lineWidth = 95;
    //     ctx.strokeStyle = '#16151f';
    //     ctx.stroke();
    //     ctx.setTransform(1, 0, 0, 1, 0, 0);
    //     ctx.closePath();
    //     //Circle
    //     ctx.beginPath();
    //     let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
    //     grd.addColorStop(0.000, 'rgba(24, 49, 73, 0.2)');
    //     grd.addColorStop(1.000, 'rgba(78, 102, 150, 0.2)');
    //     ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
    //     ctx.fillStyle = grd;
    //     ctx.fill();
    //     ctx.lineWidth = 5;
    //     ctx.strokeStyle = this.color.outterRing;
    //     ctx.stroke();
    //     ctx.save();
    //     ctx.closePath();

    // }
}

