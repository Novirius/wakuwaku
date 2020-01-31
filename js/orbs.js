import * as CONSTANT from './constants.js';

export default class Orbs {
    constructor(centerX, centerY, circleRadius, color, label, ringRadius, timer) {
        //Variables
        // this.ctx = ctx;
        this.centerX = centerX;
        this.centerY = centerY;
        this.circleRadius = circleRadius;
        this.initialCircleRadius = circleRadius;
        this.color = color;
        this.label = label;
        this.ringRadius = ringRadius;
        this.timer = timer;
        this.timerSize = this.timerSize.bind(this);
        this.alpha = 1;
        this.alphaPerFrame = 0.04;
        this.growthPerFrame = 3;
        //Functions
        this.draw = this.draw.bind(this);
        this.expandRadiusFadeOut = this.expandRadiusFadeOut.bind(this);
    }

    //Animate ring: decrease size of ring as time goes on
    timerSize () {
        this.ringRadius = this.ringRadius - (this.initialCircleRadius/(60*this.timer))
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

    randomRingColor () {
        const color = Math.random() * 360
    }

    static generateRandomOrb () {
        new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 1, 150, 0.30);
    }

    // draw (ctx, dt) {
    //         //It never reahes zero since it subtracts a percentage of its current radius
    //     if (this.ringRadius > 0) {
    //         //Ring
    //         ctx.beginPath();
    //         ctx.arc(this.centerX, this.centerY, this.timerSize(), 0, 2 * Math.PI);
    //         ctx.lineWidth = 5;
    //         ctx.strokeStyle = "hsla("+Math.random() * 360+", 100%, 80%, 0.9)";  
    //         ctx.stroke();
    //         ctx.closePath();
    //         //Circle
    //         ctx.beginPath();
    //         let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
    //         grd.addColorStop(0.000, 'rgba(24, 49, 73, 0.2)');
    //         grd.addColorStop(1.000, 'rgba(78, 102, 150, 0.2)');
    //         ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
    //         ctx.fillStyle = grd;
    //         ctx.fill();
    //         ctx.lineWidth = 5;
    //         ctx.strokeStyle = this.color.outterRing;
    //         ctx.stroke();
    //         ctx.save();
    //         ctx.closePath();
    //         //Text font, color, and positioning
    //         ctx.font = "80px Verdana";
    //         ctx.fillStyle = 'white';
    //         ctx.textBaseline = 'middle';
    //         ctx.textAlign = 'center';
    //         ctx.fillText(this.label, this.centerX, this.centerY);
    //         ctx.addHitRegion
    //     }
    //     else {
    //         //Circle
    //         ctx.beginPath();
    //         this.expandRadiusFadeOut();
    //         // ctx.globalAlpha = this.alpha;
    //         let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
    //         grd.addColorStop(0.000, 'rgba(24, 49, 73, '+this.alpha+')');
    //         grd.addColorStop(1.000, 'rgba(78, 102, 150, '+this.alpha+')');
    //         ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
    //         ctx.fillStyle = grd;
    //         ctx.fill();
    //         ctx.lineWidth = 5;
    //         ctx.strokeStyle = 'rgba(233, 233, 233, '+this.alpha+')'
    //         ctx.stroke();
    //         ctx.save();
    //         ctx.closePath();
    //     }
    // }
    draw (ctx, dt, canvas) {
        //Create Arc
        ctx.beginPath();
        const length = this.circleRadius * 2
        const lineThickness = length + 5
        ctx.lineWidth = lineThickness;
        ctx.lineCap = "round";
        CONSTANT.shortArc.bottomRight.translateBottom(ctx, length);
        CONSTANT.shortArc.bottomRight.createArc(ctx, this.centerX, this.centerY, length)
        ctx.strokeStyle = '#e9e9e9';
        ctx.stroke();
        ctx.lineWidth = 95;
        ctx.strokeStyle = '#16151f';
        ctx.stroke();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.closePath();
        //Circle
        ctx.beginPath();
        let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
        grd.addColorStop(0.000, 'rgba(24, 49, 73, 0.2)');
        grd.addColorStop(1.000, 'rgba(78, 102, 150, 0.2)');
        ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.color.outterRing;
        ctx.stroke();
        ctx.save();
        ctx.closePath();

    }
}

