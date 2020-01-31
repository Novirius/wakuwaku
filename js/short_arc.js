import * as CONSTANT from './constants.js';

export default class shortArc {
    constructor(centerX, centerY, circleRadius, color, label, ringRadius, timer) {
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
        //Functions
        this.draw = this.draw.bind(this);
        this.expandRadiusFadeOut = this.expandRadiusFadeOut.bind(this);
        this.checkActive = this.checkActive.bind(this);

    }

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
    }
}

