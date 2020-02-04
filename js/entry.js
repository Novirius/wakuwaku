import * as CONSTANT from './constants';
import Orb from './orbs';
import GameView from './game_view.js';
import Game from './game';

// Create the canvas
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = 'destination-over'
    canvas.width = window.innerWidth * 0.99;
    canvas.height = window.innerHeight * 0.98;
    document.body.appendChild(canvas);
    const game = new GameView(canvas,ctx);
    // game.start();
    const welcomeSplash = document.getElementById('welcome-splash')
    const playButton = document.getElementById('play-button')
    playButton.addEventListener('click', () => {
        welcomeSplash.classList.add("hide");
        setTimeout(() => game.start(), 3000)
    })
    
})

// addEventListener('mousedown', e => console.log(e))
// addEventListener('mousemove', e => console.log(e))
// addEventListener('mousedown', e => console.log(e))

