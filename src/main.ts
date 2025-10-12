import { Game } from './core/Game';
import { startGameLoop } from './core/Loop';

const canvas = document.querySelector('canvas')!;
const ctx = canvas.getContext('2d')!;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.style.overflow = 'hidden';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const game = new Game(canvas);
startGameLoop(ctx, game);
