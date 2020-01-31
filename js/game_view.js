import Orb from './orbs';
import * as CONSTANT from './constants';

export default class GameView {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.game = new Game(ctx, canvas);
        this.lastTime = new Date();
        this.maxWidth = this.canvas.width - 300;
        this.minWidth = 300
        this.maxHeight = this.canvas.height - 300
        this.minHeight = 300
        this.safeWidth = (Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth;
        this.safeHeight = (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight;
        // this.orb = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 1, 150, 0.20);
        this.orb = new Orb(200, 200, 50, CONSTANT.BLUE , 1, 150, 0.20);
        this.orb2 = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 2, 150, 0.2);
        this.orb3 = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 3, 150, 0.2);
        this.frame = 0;
    }

    start () {
        // this.game.bindEventListener(this.canvas);
        requestAnimationFrame(this.animate.bind(this));
    }

  animate () {
    let currentTime = Date.now();
    let delta = (currentTime - this.lastTime)/1000;
    let fps = (1/60);
    // console.log(delta)
    this.ctx.clearRect(0,0,5000, 5000);
    this.orb.draw(this.ctx, fps, this.canvas);
    this.frame += 1;
    // if (this.frame > 20) {
    //   this.orb2.draw(this.ctx, delta)
    // }
    // if (this.frame > 40) {
    //   this.orb3.draw(this.ctx, delta)
    // }
    // this.game.step(delta);
    // this.game.draw(this.ctx);
    this.lastTime = currentTime;
    requestAnimationFrame(this.animate.bind(this));
  }
}