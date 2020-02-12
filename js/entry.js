import * as CONSTANT from './constants';
import Orb from './orbs';
import GameView from './game_view.js';
import Game from './game';

// Create the canvas
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = 'destination-over'
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    // document.body.appendChild(canvas);
    const game = new GameView(canvas,ctx);
    const welcomeSplash = document.getElementById('welcome-splash')
    const playButton = document.getElementById('play-button')
    const countdown = new Audio();
    countdown.src = "assets/music/smash_countdown.mp3";
    playButton.addEventListener('click', () => {
        welcomeSplash.classList.add("hide");
        countdown.play();
        setTimeout(() => game.start(), 5000)
        setTimeout(() => countdown.pause(), 4500)
    })
    
})

// addEventListener('mousedown', e => console.log(e))
// addEventListener('mousemove', e => console.log(e))
// addEventListener('mousedown', e => console.log(e))

