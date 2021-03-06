export default class Stats {
    constructor(gameInstance, gameView){
        this.gameInstance = gameInstance;
        this.gameView = gameView;
        this.numPerfect = 0;
        this.numGood = 0;
        this.numPoor = 0;
        this.numMiss = 0;
        this.points = 0;
        //Functions
        this.updateHitPercentage = this.updateHitPercentage.bind(this);
        this.updatePoints = this.updatePoints.bind(this)
        this.updatePerfect = this.updatePerfect.bind(this);
        this.updateGood = this.updateGood.bind(this);
        this.updatePoor = this.updatePoor.bind(this);
        this.updateMiss = this.updateMiss.bind(this);
        this.outlinePoints = this.outlinePoints.bind(this);
        this.outlineStats = this.outlineStats.bind(this);
        this.outlineHitPercentage = this.outlineHitPercentage.bind(this);
        this.draw = this.draw.bind(this);
    }

    updateHitPercentage () {
        const hitPercentage = 100*((this.numPerfect + this.numGood + this.numPoor + 0)/(this.numPerfect + this.numGood + this.numPoor + this.numMiss + 0))
        const rounded = Math.floor((hitPercentage*100))/100
        return rounded;
    }

    updatePoints (points) {
        this.points += points;
    }

    updatePerfect(number) {
        this.numPerfect += number;
    }

    updateGood(number) {
        this.numGood += number;
    }

    updatePoor(number) {
        this.numPoor += number;
    }

    updateMiss(number) {
        this.numMiss += number;
    }

    outlinePoints (ctx) {
        ctx.beginPath();
        ctx.font = "120px Teko";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'right';
        ctx.fillText(`000${this.points}`, this.gameInstance.canvas.width, 75);
        ctx.closePath();
    }

    outlineStats (ctx) {
        ctx.beginPath();
        ctx.font = "90px Open Sans";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(`${this.numPerfects} Perfects`, this.gameInstance.canvas.width-200, 0);
        ctx.closePath();
    }

    outlineHitPercentage (ctx) {
        ctx.beginPath();
        ctx.font = "50px Teko";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'right';
        const accuracy = this.updateHitPercentage() >= 0 ? this.updateHitPercentage() : 0;
        ctx.fillText(`${accuracy}%`, this.gameInstance.canvas.width, 135);
        // ctx.fillText(`Perfect: ${this.numPerfect}`, this.gameInstance.canvas.width, 205);
        // ctx.fillText(`Good: ${this.numGood}`, this.gameInstance.canvas.width, 255);
        // ctx.fillText(`Poor: ${this.numPoor}`, this.gameInstance.canvas.width, 305);
        // ctx.fillText(`Miss: ${this.numMiss}`, this.gameInstance.canvas.width, 355);
        ctx.closePath();
    }

    draw (ctx) {
        this.updatePoints(1);
        this.outlinePoints(ctx);
        this.outlineHitPercentage(ctx);
    }
}