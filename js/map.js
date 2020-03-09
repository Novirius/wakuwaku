export default class Map {
    constructor(title, songDuration) {
        //Bind functions
        this.playTime = this.playTime.bind(this);
    }

    increasePlayTime (dt) {
        this.playTime += dt
        if (this.playTime > 135) {
            this.gameView.stop();
        }
    }
    
}