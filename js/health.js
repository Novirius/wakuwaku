export default class Health {
    constructor(decay, gain, gameInstance, gameView){
        this.gameInstance = gameInstance;
        this.gameView = gameView;
        this.value = 100;
        this.decay = decay;
        this.gain = gain;
        //Functions
        this.miss = this.miss.bind(this);
        this.perfect = this.perfect.bind(this);
        this.good = this.good.bind(this);
        this.poor = this.poor.bind(this);
        this.update = this.update.bind(this);
        this.outlineHP = this.outlineHP.bind(this);
        this.draw = this.draw.bind(this);
    }

    miss () {
        // if (this.cooldown = true) {
        //     this.cooldown = false;
        //     let that = this;
        //     setTimeout(() => that.cooldown = true, 1)
        // }
        this.value = this.value - 9;
        // console.log(this.value)
    }

    perfect () {
        this.value = this.value + 10;
        // console.log(this.value)
    }

    good () {
        this.value = this.value + 5;
        // console.log(this.value)
    }

    poor () {
        this.value = this.value + 2;
        // console.log(this.value)
    }

    update () {
        this.value -= this.decay;
        if (this.value <= 0) {
            this.gameView.stop();
            // alert('gameover')
        }
        if (this.value > 100) {
            this.value = 100;
        }
        // console.log(this.value)
    }

    outlineHP (ctx) {
        ctx.beginPath();
        if (this.value > 100) {
            this.value = 100;
        }
        let calcCurrentHP = ((this.gameInstance.canvas.width * 0.5) * (this.value/100));
        let currentHP;
        if (calcCurrentHP <= 0) {
            currentHP = 0;
        }
        else {
            currentHP = calcCurrentHP;
        }
        ctx.rect(20, 20, currentHP, 20);
        ctx.closePath();
    }

    draw (ctx) {
        this.update();
        this.outlineHP(ctx);
        //Color the damn thing
        let grd = ctx.createLinearGradient(0, 0, (this.gameInstance.canvas.width * 0.5), 0);
        grd.addColorStop(0.000, 'rgba(238, 181, 255, 1.000)');
        grd.addColorStop(0.495, 'rgba(191, 241, 255, 1.000)');
        grd.addColorStop(1.000, 'rgba(247, 252, 184, 1.000)');

        ctx.fillStyle = grd;
        ctx.fill();
        console.log(this.value);
        // console.log('hi')
    }
}