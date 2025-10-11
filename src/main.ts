import { createPlayer, updatePlayer, drawPlayer, Player } from './entities/Player';
import { enemies, spawnEnemy, updateEnemies, drawEnemies } from './entities/Enemy';
import { BG_COLOR, ENEMY_SPAWN_INTERVAL, FRAME_TIME } from './constants';

const canvas = document.querySelector('canvas')!;
const ctx = canvas.getContext('2d')!;

let timeSinceLastSpawn = 0;
let lastTime = 0;
let accumulator = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.style.overflow = 'hidden';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const player: Player = createPlayer(canvas.width, canvas.height);

function update(delta: number) {
  updatePlayer(player, delta, canvas.width, canvas.height);

  timeSinceLastSpawn += delta;
  if (timeSinceLastSpawn >= ENEMY_SPAWN_INTERVAL) {
    spawnEnemy(canvas.width, canvas.height);
    timeSinceLastSpawn = 0;
  }

  updateEnemies(enemies, player, delta);
}

function draw() {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPlayer(ctx, player);
  drawEnemies(ctx, enemies);
}

function loop(time: number) {
  const delta = time - lastTime;
  lastTime = time;

  accumulator += delta;

  while (accumulator >= FRAME_TIME) {
    update(FRAME_TIME);
    
    timeSinceLastSpawn += FRAME_TIME;
    if (timeSinceLastSpawn >= ENEMY_SPAWN_INTERVAL) {
      spawnEnemy(canvas.width, canvas.height);
      timeSinceLastSpawn = 0;
    }

    accumulator -= FRAME_TIME;
  }

  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
