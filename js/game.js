import Orb from './orbs';
import Particle from './particle'
import * as CONSTANT from './constants';

export default class Game {
    constructor(canvas, ctx) {
        //Game board
        this.canvas = canvas;
        this.ctx = ctx;
        this.playTime = 0;
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
        //Objects
        this.objects = [];
        //Function
        this.bindEventListener = this.bindEventListener.bind(this);
        this.draw = this.draw.bind(this);
        this.increasePlayTime = this.increasePlayTime.bind(this);
        this.removeObject = this.removeObject.bind(this);
        this.generateOrb = this.generateOrb.bind(this);
        
    }

    increasePlayTime (dt) {
        // console.log(dt)
        this.playTime += dt
    }

    removeObject () {
        this.objects.shift();
    }

    generateManyOrbs () {
        //Select random color
        const randomColorIndex = Math.floor(Math.random()*CONSTANT.COLORS_ARRAY.length);
        const randomColor = CONSTANT.COLORS_ARRAY[randomColorIndex];
        //Select random of numbers to display
        const randomRange = Math.floor(Math.random()*7) + 1;
        let timer = 0.5;
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
        const orb = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, color , number, 150, timer, this, callback)
        setTimeout(() => this.objects.push(orb), (number-1) * (timer * 1000))
        
    }

    bindEventListener() {
        this.canvas.addEventListener('mousemove', (event) => {
            this.mousePosX = event.clientX;
            this.mousePosY = event.clientY;
        })
        window.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 88:
                    if (this.objects[0] instanceof Orb) {
                        if (Math.sqrt((this.mousePosX-this.objects[0].centerX)*(this.mousePosX-this.objects[0].centerX) + (this.mousePosY-this.objects[0].centerY)*(this.mousePosY-this.objects[0].centerY)) < this.objects[0].circleRadius) {
                            this.objects[0].active = 'expire';
                        }
                    }
                    // alert(`${this.mousePosX} is x, ${this.mousePosY} is y`)
                    break;
                case 82:
                    this.generateOrb();
                    console.log('testtop')
                    console.log(`${this.playTime}`)
                    console.log('testbottom')
                default:
                    break;
            }
        })
        
        
    }

    draw (ctx, dt) {
        // let particle1 = new Particle(this.mousePosX, this.mousePosY, 5, 'yellow')
        // particle1.update(ctx);
        this.objects.forEach((object) => {
            object.draw(ctx, dt);
        })

    }
}