import Orb from './orbs';
import Particle from './particle'
import * as CONSTANT from './constants';
import Health from './health';
import anime from 'animejs/lib/anime.es.js';
import Stats from './stats';

export default class Game {
    constructor(canvas, ctx, gameView) {
        //Game board
        this.canvas = canvas;
        this.ctx = ctx;
        this.playTime = 0;
        this.gameView = gameView;
        //Mousemove tracker
        this.mousePosX = 0;
        this.mousePosY = 0;
        //Dimensions
        this.maxWidth = this.canvas.width - 300;
        this.minWidth = 300
        this.maxHeight = this.canvas.height - 300
        this.minHeight = 300
        this.safeWidth = (Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth;
        this.safeHeight = (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight;
        // this.orb = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, 'BLUE' , 1, 150, 3);
        // this.orb = new Orb(300, 300, 50, 'BLUE' , 1, 150, 3);
        //Orb sizing
        this.orbSize = 75;
        this.ringSize = this.orbSize * 3;
        //Objects
        this.health = new Health(1/13, 5, this, this.gameView)
        this.stats = new Stats(this, this.gameView)
        this.objects = [];
        this.dyingObjects = [];
        //Points
        this.points = 0;
        //bgm
        this.bgm = new Audio();
        this.bgm.src = "assets/music/bgm2.mp3";
        this.bgm.loop = false;
        //gameover sound
        this.gameOverSFX = new Audio ();
        this.gameOverSFX.src = "assets/music/gameoversfx.wav";
        this.gameOverSFX.loop = false;
        //Hit and miss sound
        this.hitSound = new Audio();
        this.hitSound.src = "assets/music/taiko.wav";
        this.hitSound.loop = false;
        this.missSound = new Audio();
        this.missSound.src = "assets/music/whoosh.mp3";
        this.missSound.loop = false;
        //Function
        this.bindEventListener = this.bindEventListener.bind(this);
        this.draw = this.draw.bind(this);
        this.increasePlayTime = this.increasePlayTime.bind(this);
        this.removeObject = this.removeObject.bind(this);
        this.generateOrb = this.generateOrb.bind(this);
        this.expireOrbPointsReduction = this.expireOrbPointsReduction.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.stopMusic = this.stopMusic.bind(this);
        this.handleGameInput = this.handleGameInput.bind(this);
    }

    playMusic() {
        this.bgm.play();
    }

    stopMusic() {
        this.bgm.pause();
        setTimeout(()=>this.gameOverSFX.play(), 1000) 
    }

    increasePlayTime (dt) {
        this.playTime += dt
        if (this.playTime > 135) {
            this.gameView.stop();
        }
    }

    removeObject () {
        let dyingOrb = this.objects.shift();
        this.dyingObjects.shift(dyingOrb)
    }


    generateManyOrbs () {
        //Select random color
        const randomColorIndex = Math.floor(Math.random()*CONSTANT.COLORS_ARRAY.length);
        const randomColor = CONSTANT.COLORS_ARRAY[randomColorIndex];
        //Select random of numbers to display
        const randomRange = Math.floor(Math.random()*7) + 1;

        let timer = 1;
        if (this.playTime < 27) {
            timer = 5
        }
        else if ((this.playTime > 26) && (this.playTime < 40)) {
            timer = 1.3
        }
        else if ((this.playTime > 39) && (this.playTime < 60)) {
            timer = 0.9
        }
        else if ((this.playTime > 59) && (this.playTime < 80)) {
            timer = 1
        }
        else if ((this.playTime > 79) && (this.playTime < 110)) {
            timer = 0.8
        }
        else {
            timer = 0.7
        }
        let callback;
        for (let i = 1; i < (randomRange+1); i++) {
            if (i === randomRange) {
                callback = true;
            }
            else {
                callback = false;
            }
            this.generateOrb(randomColor, i, timer, callback)
        }
    }

    generateOrb (color, number, timer, callback) {
        //Select random Arc
        const randomShortArcIndex = Math.floor(Math.random()*CONSTANT.SHORT_ARCS_ARRAY.length);
        const randomShortArc = CONSTANT.SHORT_ARCS_ARRAY[randomShortArcIndex];

        //Create Orb
        const orb = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, this.orbSize, color , number, this.ringSize, timer, this, callback)
        setTimeout(() => this.objects.push(orb), (number-1) * (timer * 500))
        
    }

    expireOrbPointsReduction () {
        this.health.miss();
        this.stats.updateMiss(1)
    }

    handleGameInput(event) {
        let currentOrb = this.objects[0]
        switch(event.keyCode) {
            //If key is z or x
            case 90:
            case 88:
                if (currentOrb instanceof Orb && this.clickable) {
                    if (Math.sqrt((this.mousePosX-currentOrb.centerX)*(this.mousePosX-currentOrb.centerX) + (this.mousePosY-currentOrb.centerY)*(this.mousePosY-currentOrb.centerY)) < currentOrb.circleRadius) {
                        if ((currentOrb.ringRadius < (currentOrb.initialRingRadius * 0.1)) && currentOrb.ringRadius > 0) {
                            this.clickable = false;
                            currentOrb.active = 'expire';
                            this.health.perfect();
                            this.hitSound.play();
                            this.stats.updatePoints(1000)
                            this.stats.updatePerfect(1)
                            //perfect points
                        }
                        else if ((currentOrb.ringRadius < (currentOrb.initialRingRadius * 0.2))) {
                            this.clickable = false;
                            currentOrb.active = 'expire';
                            this.health.good();
                            this.hitSound.play();
                            this.stats.updatePoints(300)
                            this.stats.updateGood(1)
                            //Good points
                        }
                        else if ((currentOrb.ringRadius < (currentOrb.initialRingRadius * 0.4))) {
                            this.clickable = false;
                            currentOrb.active = 'expire';
                            this.health.poor();
                            this.hitSound.play();
                            this.stats.updatePoints(100)
                            this.stats.updatePoor(1)
                            //Poor points
                        }
                        else if ((currentOrb.ringRadius < (currentOrb.initialRingRadius * 1.6))) {
                            this.clickable = false;
                            this.missSound.play();
                            //No points
                        }
                        else {
                        }
                    }
                }
                break;
            default:
                break;
        }
    }

    bindEventListener() {
        this.canvas.addEventListener('mousemove', (event) => {
            this.mousePosX = event.clientX;
            this.mousePosY = event.clientY;
        })
        window.addEventListener("keydown", this.handleGameInput)
        //touchscreens
        window.addEventListener("touchstart", (event) => {
            if (this.objects[0] instanceof Orb) {
                if (Math.sqrt((event.touches[0].clientX-this.objects[0].centerX)*(event.touches[0].clientX-this.objects[0].centerX) + (event.touches[0].clientY-this.objects[0].centerY)*(event.touches[0].clientY-this.objects[0].centerY)) < this.objects[0].circleRadius) {
                    if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.1)) && this.clickable) {
                        this.clickable = false;
                        this.objects[0].active = 'expire';
                        this.health.perfect();
                        this.hitSound.play();
                        this.stats.updatePoints(1000)
                        this.stats.updatePerfect(1)
                        //perfect points
                    }
                    else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.2)) && this.clickable) {
                        this.clickable = false;
                        this.objects[0].active = 'expire';
                        this.health.good();
                        this.hitSound.play();
                        this.stats.updatePoints(300)
                        this.stats.updateGood(1)
                        //Good points
                    }
                    else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.4)) && this.clickable) {
                        this.clickable = false;
                        this.objects[0].active = 'expire';
                        this.health.poor();
                        this.hitSound.play();
                        this.stats.updatePoints(100)
                        this.stats.updatePoor(1)
                        //Poor points
                    }
                    else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 1.6)) && this.clickable) {
                        this.clickable = false;
                        this.missSound.play();
                        this.stats.updateMiss(1)
                        //No points
                    }
                    else {
                    }
                }
            }
        })
        
        
    }

    update (ctx, dt) {

    }

    draw (ctx, dt) {
        //Draw health
        this.health.draw(ctx);
        // particle1.update(ctx);
        const renderedObjects = this.objects.concat(this.dyingObjects)
        renderedObjects.forEach((object) => {
            console.log(renderedObjects)
            console.log(object)
            object.draw(ctx, dt);
        })

        //Draw line between groups of orbs
        if (this.objects[1]) {
            ctx.beginPath();

            let angle = Math.random() * 360;
            let angleDlt = 60;
            let step = 1;

            let grd = ctx.createLinearGradient(0, 0, 500, 0);
            grd.addColorStop(0, "hsl(" + (angle % 360) + ",100%, 50%)");
            grd.addColorStop(0.5, "hsl(" + ((angle + (angleDlt/2)) % 360) + ",100%, 50%)");
            grd.addColorStop(1, "hsl(" + ((angle + angleDlt) % 360) + ",100%, 50%)");

            ctx.moveTo(this.objects[0].centerX, this.objects[0].centerY);
            ctx.lineTo(this.objects[1].centerX, this.objects[1].centerY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = grd;
            ctx.setLineDash([2, 5]);
            ctx.stroke();
            angle+= step;
            ctx.closePath();
            ctx.setLineDash([]);
        }

        //Draw Points AND ADD POINTS
        this.stats.draw(this.ctx)
        //Draw Time
        ctx.beginPath();
        ctx.font = "120px Teko";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.fillText(`${Math.floor(this.playTime)}s`, 25, this.canvas.height-25);
        ctx.closePath();

        //Draw Test
        const ellipse = new Path2D();
        ellipse.ellipse(500, 500, 40, 60, Math.PI * .25, 0, 2 * Math.PI);
        ctx.lineWidth = 25;
        ctx.strokeStyle = 'red';
        ctx.fill(ellipse);
        ctx.stroke(ellipse);

        if (ctx.isPointInStroke(ellipse, this.mousePosX, this.mousePosY)) {
            ctx.strokeStyle = 'green';
        }
        else {
        ctx.strokeStyle = 'red';
        }
        ctx.fill(ellipse);
        ctx.stroke(ellipse);

    }




}