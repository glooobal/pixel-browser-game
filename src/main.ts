import { createPlayer, updatePlayer, drawPlayer, Player } from './entities/Player';
import { enemies, spawnEnemy, updateEnemies, drawEnemies } from './entities/Enemy';

const canvas = document.querySelector('canvas')!;
const ctx = canvas.getContext('2d')!;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.style.overflow = 'hidden';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const player: Player = createPlayer(canvas.width, canvas.height);

let timeSinceLastSpawn = 0;
const spawnInterval = 3000;

let lastTime = 0;

function update(delta: number) {
  updatePlayer(player, delta, canvas.width, canvas.height);

  timeSinceLastSpawn += delta;
  if (timeSinceLastSpawn >= spawnInterval) {
    spawnEnemy(canvas.width, canvas.height);
    timeSinceLastSpawn = 0;
  }

  updateEnemies(enemies, player, delta);
}

function draw() {
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawPlayer(ctx, player);
  drawEnemies(ctx, enemies);
}

function loop(time: number) {
  const delta = time - lastTime;
  lastTime = time;

  update(delta);
  draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
