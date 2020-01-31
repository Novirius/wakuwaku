import Orb from './orbs';


export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.orbs = {};
    }

    addOrb(ctx, centerX, centerY, circleRadius, color, label, ringRadius, timer) {
        this.orbs.push(new Orb (ctx, centerX, centerY, circleRadius, color, label, ringRadius, timer))
    }

}

//CHECK SHAREX FOR ARC HIT DETECTION IMAGE


//Create Arc?
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var img = new Image();var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 100;
var startAngle =   Math.PI;
var endAngle =2* Math.PI;
var counterClockwise = false;
var outX= x
var outY= y  
var vari1 =.1;
var endAngle = startAngle+ vari1* Math.PI;
context.beginPath();
context.arc(outX , outY, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 25; 
context.strokeStyle = '#FA603D';  
context.stroke();
context.closePath();