import * as CONSTANT from './constants.js';
import Health from './health';

export default class Orb {
    constructor(x, y, radius, color, label, timerRadius, timer, game, callback) {
        //Constructor
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.label = label;
        this.game = game;
        this.callback = callback;
        //Timer variables
        this.timer = timer;
        this.timerRadius = timerRadius;
        //Animation variables
        this.active = 'active'
        this.alpha = 0.7;
        //Expire variables
        this.swing = 'miss'; //Changes to perfect etc if done right -- allows points to be assigned at the end
        this.alphaPerFrame = timer > 1 ? 0.04 : 0.08
        this.growthPerFrame = (radius*3)/(radius);
        
        this.expiring = false;
        this.clickable = true;
        //Functions
        this.timerSize = this.timerSize.bind(this);
        this.activeOrb = this.activeOrb.bind(this);
        this.expireOrb = this.expireOrb.bind(this);
        this.draw = this.draw.bind(this);
        this.expandRadiusFadeOut = this.expandRadiusFadeOut.bind(this);
        this.checkActive = this.checkActive.bind(this);
        this.notClickable = this.notClickable.bind(this);
    }

    notClickable () {
        this.clickable = false;
    }

    //Timer Ring: Shows time remaining before orb expires. Decreases in size closer to expiration.
    //IMPORTANT: timerRadius is the ADDITIONAL radius added on to circle radius. newRingRadius is radius + timerRadius
    timerSize (dt) {
        this.timerRadius = this.timerRadius - ((this.radius/(this.timer)) * dt*3)
        if (this.timerRadius < 0) {
            this.timerRadius = 0;
        }
        const newRingRadius = this.radius + this.timerRadius;
        return newRingRadius;
    }

    expandRadiusFadeOut () {
        this.radius = this.radius + this.growthPerFrame
        this.alpha = this.alpha - (this.alphaPerFrame);
        if (this.alpha < 0) {
            this.alpha = 0;
        }
    }

    checkActive () {
        if ((this.timerRadius < 1) && !this.expiring) {
            this.expiring = true;
            this.active = 'expire'
            this.game.expireOrbPointsReduction();

        }
    }

    expireOrb(ctx, dt) {
        //Circle
        ctx.beginPath();
        this.expandRadiusFadeOut();
        let grd = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, 30);
        CONSTANT[this.color].circleLight(grd, this.alpha);
        CONSTANT[this.color].circleDark(grd, this.alpha);
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(233, 233, 233, '+this.alpha+')'
        ctx.stroke();
        ctx.save();
        ctx.closePath();
    }

    activeOrb(ctx, dt) {
        //Timer Animation
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.timerSize(dt), 0, 2 * Math.PI);
        ctx.lineWidth = 5;
        let grd2 = ctx.createLinearGradient(50, 0, 0, 220);
        CONSTANT[this.color].timerLight(grd2);
        CONSTANT[this.color].timerDark(grd2);
        ctx.strokeStyle = grd2;
        ctx.stroke();
        ctx.closePath();
        // //Circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        let grd = ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, 20);
        CONSTANT[this.color].circleLight(grd, this.alpha);
        CONSTANT[this.color].circleDark(grd, this.alpha);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.lineWidth = 10;
        ctx.strokeStyle = CONSTANT[this.color].circleEdge;
        ctx.stroke();
        ctx.save();
        ctx.closePath();
        //Text font, color, and positioning
        ctx.font = "30px Sans-Serif";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(this.label, this.x, this.y);
    }

    draw (ctx, dt) {
        this.checkActive();

        //It never reahes zero since it subtracts a percentage of its current radius
        if (this.active != 'expire') {
            this.activeOrb(ctx, dt);
        }
        else {
            this.expireOrb(ctx);
        }
        if (this.alpha === 0) {
            this.game.removeObject();
            if (this.callback === true) {
                this.game.generateManyOrbs();
            }
        }
    }
}

