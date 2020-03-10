# WakuWaku

Wakuwaku is an eye-hand coordination game. The user interactions with onscreen orbs using their mouse and the z/x key. The game tracks and displays the user's score, duration of gameplay, and accuracy. 

## How to start the game

![Image of splash page](https://i.imgur.com/ehkjykl.png)
When you first load Wakuwaku, you will be greeted with an instructional page. Pressing 'play' will initiate the game with a countdown.

## The HUD
#### Orbs
<img src="https://i.imgur.com/oNWDcyc.png" width="500" />
Orbs should be tapped once the outer ring nears the silver lining of the orb. Clicking  or pressing 'z' or 'x' while the mouse is hovered over an orb will tap the orb if the ring is within a certain distance from the perimeter of the circle. Doing so will play a taiko drum sound, replenish health, and add points to the user's score. These orbs were constructed using Canvas HTML5 as seen in the code snippet below:

```javascript
    activeOrb(ctx, dt) {
        //Timer Animation
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.timerSize(dt), 0, 2 * Math.PI);
        ctx.lineWidth = 5;
        let grd2 = ctx.createLinearGradient(50, 0, 0, 220);
        CONSTANT[this.color].timerLight(grd2);
        CONSTANT[this.color].timerDark(grd2);
        ctx.strokeStyle = grd2;
        ctx.stroke();
        ctx.closePath();
        // //Circle
        ctx.beginPath();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.arc(this.centerX, this.centerY, this.circleRadius, 0, 2 * Math.PI);
        let grd = ctx.createRadialGradient(this.centerX, this.centerY, this.circleRadius, this.centerX, this.centerY, 20);
        CONSTANT[this.color].circleLight(grd, this.alpha);
        CONSTANT[this.color].circleDark(grd, this.alpha);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.lineWidth = 10;
        ctx.strokeStyle = CONSTANT[this.color].circleEdge;
        ctx.stroke();
        ctx.save();
        ctx.closePath();
        //Text font, color, and positioning
        ctx.font = "30px Sans-Serif";
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(this.label, this.centerX, this.centerY);
    }
  ```


#### Health Bar, Score, and Accuracy
<img src="https://i.imgur.com/f4nrhYL.png" width="500" />
To the left is the user's health bar. Over time, it decreases whenever someone misses an orb and overtime. It increases when a user taps an orb at the correct time. To the right, the user's score appears along with accuracy. Accuracy depends on whether you tap the orb at a valid time -- regardless of how well timed the tap was.



#### Gameover
<img src="https://i.imgur.com/O1yWG13.png" width="500" />
When the user's health reaches zero or they reach the end of the song, a gameover screen appears that allows them to replay the game.

