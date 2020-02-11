import Orb from './orbs';
import Game from './game';
import * as CONSTANT from './constants';

export default class GameView {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameInstance = new Game(canvas, ctx, this);
        this.lastTime = new Date();
        this.requestId = undefined;
        this.gameOver = false;

        
        this.orb = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 1, 150, 0.20);
        // this.orb = new Orb(500, 500, 50, 'RED', 2, 150, 0.5);
        this.orb2 = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 2, 150, 0.2);
        this.orb3 = new Orb((Math.random()*(this.maxWidth - this.minWidth)) + this.minWidth, (Math.random()*(this.maxHeight - this.minHeight)) + this.minHeight, 50, CONSTANT.BLUE , 3, 150, 0.2);
        this.frame = 0;
    }

  start () {
    if (!this.requestId) {
      this.gameInstance.bindEventListener();
      // this.gameInstance.beginTimer();
      // this.gameInstance.resetScene();
      this.gameInstance.playMusic();
      this.lastTime = new Date();
      this.requestId = requestAnimationFrame(this.animate.bind(this));
      setTimeout(()=>this.gameInstance.generateManyOrbs(), 500)
      
    }
  }

  stop () {
    if (this.requestId) {
    this.gameOver = true;
    // this.gameInstance.bindEventListener(this.canvas);
    // this.gameInstance.beginTimer();
    // this.gameInstance.resetScene();
    this.gameInstance.stopMusic();
    cancelAnimationFrame(this.requestID);
    window.removeEventListener('keydown')
    return;
    }
  }

  animate () {  
    if (!this.gameOver) {
    let currentTime = Date.now();
    let dt = (currentTime - this.lastTime)/1000;
    this.lastTime = currentTime;
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    this.gameInstance.increasePlayTime(dt)
    this.gameInstance.draw(this.ctx, dt);
    requestAnimationFrame(this.animate.bind(this));
    }
  }
}