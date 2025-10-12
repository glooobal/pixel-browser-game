import { Player, addPlayer, createPlayer, updatePlayer } from './entities/Player';
import { enemies, addEnemies, spawnEnemy, updateEnemies } from './entities/Enemy';

import { addGameTimer } from './ui/gameTimer';
import { addHealthBar } from './ui/healthBar';

import { isColliding } from './utils/collision';

import { BG_COLOR, ENEMY_SPAWN_INTERVAL, FRAME_TIME } from './constants';

const canvas = document.querySelector('canvas')!;
const ctx = canvas.getContext('2d')!;

let gameRunning = true;
let timeSinceLastSpawn = 0;
let lastTime = 0;
let accumulator = 0;
let gameTime = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.style.overflow = 'hidden';
}

function gameOver() {
  gameRunning = false;
  alert('You lost, start again!');
  window.location.reload();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const player: Player = createPlayer(canvas.width, canvas.height);

function updateGame(delta: number) {
  updatePlayer(player, delta, canvas.width, canvas.height);

  timeSinceLastSpawn += delta;
  if (timeSinceLastSpawn >= ENEMY_SPAWN_INTERVAL) {
    spawnEnemy(canvas.width, canvas.height);
    timeSinceLastSpawn = 0;
  }

  updateEnemies(enemies, player, delta);

  for (const enemy of enemies) {
    if (isColliding(player, enemy)) {
      player.hp -= 1;

      if (player.hp <= 0) {
        gameOver();
        return;
      }
    }
  }

  gameTime += delta;
}

function createScene() {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  addPlayer(ctx, player);
  addEnemies(ctx, enemies);
  addHealthBar(ctx, player);
  addGameTimer(ctx, gameTime, canvas.width);
}

function loop(time: number) {
  if (!gameRunning) return;

  const delta = time - lastTime;
  lastTime = time;

  accumulator += delta;

  while (accumulator >= FRAME_TIME) {
    updateGame(FRAME_TIME);

    timeSinceLastSpawn += FRAME_TIME;
    if (timeSinceLastSpawn >= ENEMY_SPAWN_INTERVAL) {
      spawnEnemy(canvas.width, canvas.height);
      timeSinceLastSpawn = 0;
    }

    accumulator -= FRAME_TIME;
  }

  createScene();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
