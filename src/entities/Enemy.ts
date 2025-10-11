import { Player } from './Player';

export type Enemy = {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
};

export const enemies: Enemy[] = [];

export function spawnEnemy(canvasWidth: number, canvasHeight: number) {
  const size = 20;
  const enemy: Enemy = {
    x: Math.random() * (canvasWidth - size),
    y: Math.random() * (canvasHeight - size),
    w: size,
    h: size,
    speed: 0.1 + Math.random() * 0.1
  };
  enemies.push(enemy);
}

export function updateEnemies(enemies: Enemy[], player: Player, delta: number) {
  for (const enemy of enemies) {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 0) {
      enemy.x += (dx / dist) * enemy.speed * delta;
      enemy.y += (dy / dist) * enemy.speed * delta;
    }
  }
}

export function drawEnemies(ctx: CanvasRenderingContext2D, enemies: Enemy[]) {
  for (const enemy of enemies) {
    ctx.fillStyle = 'red';
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  }
}
