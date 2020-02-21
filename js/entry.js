import GameView from './game_view.js';


// Create the canvas
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = 'destination-over'
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
    // document.body.appendChild(canvas);
    // const game = new GameView(canvas,ctx);
    const welcomeSplash = document.getElementById('welcome-splash')
    const gameoverOverlay = document.getElementById('gameover')
    const playButton = document.getElementById('play-button')
    const retryButton = document.getElementById('retry')
    const countdown = new Audio();
    countdown.src = "assets/music/smash_countdown.mp3";
    const beginGame = () => {
        const game = new GameView(canvas,ctx);
        welcomeSplash.classList.add("hide");
        countdown.play();
        setTimeout(() => game.start(), 5000)
        setTimeout(() => countdown.pause(), 4500)  
    }
    playButton.addEventListener('click', beginGame)
    retryButton.addEventListener('click', () => {
        const game = new GameView(canvas,ctx);
        gameoverOverlay.classList.add("hide")
        countdown.play();
        setTimeout(() => game.start(), 5000)
        setTimeout(() => countdown.pause(), 4500)
    })
    
})

