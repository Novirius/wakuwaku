export default class Health {
    constructor(decay, gain, gameInstance){
        this.gameInstance = gameInstance;
        this.gameView = this.gameView;
        this.value = 100;
        this.decay = decay;
        this.gain = gain;
    }

    miss () {
        this.value = this.value - 5;
    }

    gain () {
        this.value = this.value + 5;
    }

    update () {
        this.value -= this.decay;
    }

    outline () {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.closePath();
    }

    draw (ctx) {
        this.outline();
        ctx.fillStyle = 'red';
    }
}