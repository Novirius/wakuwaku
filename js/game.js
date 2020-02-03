import Orb from './orbs';
import Particle from './particle'
import * as CONSTANT from './constants';
import Health from './health';
import anime from 'animejs/lib/anime.es.js';


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
        this.clickable = true;
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
        this.health = new Health(1/20, 5, this, this.gameView)
        this.objects = [];
        //Points
        this.points = 0;
        //Music
        this.bgm = new Audio();
        this.gameOverSFX = new Audio ();
        //Function
        this.bindEventListener = this.bindEventListener.bind(this);
        this.draw = this.draw.bind(this);
        this.increasePlayTime = this.increasePlayTime.bind(this);
        this.removeObject = this.removeObject.bind(this);
        this.generateOrb = this.generateOrb.bind(this);
        this.makeClickable = this.makeClickable.bind(this);
        this.expireOrbPointsReduction = this.expireOrbPointsReduction.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.stopMusic = this.stopMusic.bind(this);
    }

    playMusic() {
        this.bgm.src = "assets/music/bgm2.mp3";
        this.bgm.loop = false;
        this.bgm.play();

        this.gameOverSFX.src = "assets/music/gameoversfx.wav";
        this.gameOverSFX.loop = false;
    }

    stopMusic() {
        this.bgm.pause();
        setTimeout(()=>this.gameOverSFX.play(), 1000)
        
    }

    increasePlayTime (dt) {
        // console.log(dt)
        this.playTime += dt
        if (this.playTime > 137) {
            this.gameView.stop();
        }
    }

    makeClickable () {
        this.clickable = true;
    }

    removeObject () {
        this.objects.shift();
        this.makeClickable();
    }


    generateManyOrbs () {
        //Select random color
        const randomColorIndex = Math.floor(Math.random()*CONSTANT.COLORS_ARRAY.length);
        const randomColor = CONSTANT.COLORS_ARRAY[randomColorIndex];
        //Select random of numbers to display
        const randomRange = Math.floor(Math.random()*7) + 1;

        let timer = 1;
        if (this.playTime < 40) {
            timer = 1.2
        }
        else if ((this.playTime > 39) && (this.playTime < 60)) {
            timer = 1
        }
        else if ((this.playTime > 59) && (this.playTime < 80)) {
            timer = 0.8
        }
        else if ((this.playTime > 79) && (this.playTime < 110)) {
            timer = 1.2
        }
        else {
            timer = 1
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
    }

    bindEventListener() {
        this.canvas.addEventListener('mousemove', (event) => {
            this.mousePosX = event.clientX;
            this.mousePosY = event.clientY;
        })
        window.addEventListener("keydown", (event) => {
            let hitSound = new Audio();
            hitSound.src = "assets/music/taiko.wav";
            hitSound.loop = false;
            let missSound = new Audio();
            missSound.src = "assets/music/whoosh.mp3";
            missSound.loop = false;
            switch(event.keyCode) {
                case 88:
                    if (this.objects[0] instanceof Orb) {
                        if (Math.sqrt((this.mousePosX-this.objects[0].centerX)*(this.mousePosX-this.objects[0].centerX) + (this.mousePosY-this.objects[0].centerY)*(this.mousePosY-this.objects[0].centerY)) < this.objects[0].circleRadius) {
                            if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.1)) && this.clickable) {
                                this.clickable = false;
                                this.objects[0].active = 'expire';
                                this.health.perfect();
                                hitSound.play();
                                this.points += 1000
                                //perfect points
                            }
                            else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.4)) && this.clickable) {
                                this.clickable = false;
                                this.objects[0].active = 'expire';
                                this.health.good();
                                hitSound.play();
                                this.points += 500
                                //Good points
                            }
                            else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 0.6)) && this.clickable) {
                                this.clickable = false;
                                this.objects[0].active = 'expire';
                                this.health.poor();
                                hitSound.play();
                                this.points += 100
                                //Poor points
                            }
                            else if ((this.objects[0].ringRadius < (this.objects[0].initialRingRadius * 1.6)) && this.clickable) {
                                this.clickable = false;
                                missSound.play();
                                //No points
                            }
                            else {
                            }
                        }
                    }
                    // alert(`${this.mousePosX} is x, ${this.mousePosY} is y`)
                    break;
                case 82:
                    this.generateOrb();
                    console.log('testtop')
                    // console.log(`${this.playTime}`)
                    console.log('testbottom')
                default:
                    break;
            }
        })
        
        
    }

    update (ctx, dt) {

    }

    draw (ctx, dt) {
        //Draw health
        this.health.draw(ctx);
        // particle1.update(ctx);
        this.objects.forEach((object) => {
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
        ctx.beginPath();
        this.points += 1
        ctx.font = "30px Sans-Serif";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(`Points: ${this.points}`, 100, this.canvas.height-50);
        ctx.closePath();
        //Draw Time
        ctx.beginPath();
        ctx.font = "30px Sans-Serif";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(`Time: ${Math.floor(this.playTime)}s`, 100, this.canvas.height-100);
        ctx.closePath();
        // console.log(this.playTime)

    }


}