import Orb from './orbs';
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
    }

    removeObject () {
        this.objects.shift();
    }

    generateOrb () {
        const randomColorIndex = Math.floor(Math.random()*CONSTANT.COLORS_ARRAY.length);
        const randomColor = CONSTANT.COLORS_ARRAY[randomColorIndex];
        const orb1 = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, randomColor , 1, 150, 3, this)
        this.objects.push(orb1)
    }

    bindEventListener(canvas) {
        canvas.addEventListener('mousemove', (event) => {
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
                    console.log(`${this.objects}`)
                    console.log('testbottom')
                default:
                    break;
            }
        })
    }

    draw (ctx, dt) {
        this.objects.forEach((object) => {
            object.draw(ctx, dt);
        })
    }
}