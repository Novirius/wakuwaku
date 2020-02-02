import * as CONSTANT from './constants';
import Orb from './orbs';
import GameView from './game_view.js';
import Game from './game';

// Create the canvas
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = 'destination-over'
    canvas.width = window.innerWidth * 0.85;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    // let orb1 = new Orb(200, 200, 50, CONSTANT.ORANGE , 3, 30, 3);
    // orb1.draw(ctx, 0.2);
    let game1 = new GameView(canvas,ctx);
    game1.start();
    
})

// addEventListener('mousedown', e => console.log(e))
// addEventListener('mousemove', e => console.log(e))
// addEventListener('mousedown', e => console.log(e))

