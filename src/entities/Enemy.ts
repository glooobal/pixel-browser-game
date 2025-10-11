import { Player } from './Player';
import { ENEMY_COLOR, ENEMY_SIZE, ENEMY_SPAWN_INTERVAL, ENEMY_SPEED_MAX, ENEMY_SPEED_MIN } from '../constants';

export type Enemy = {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
};

export const enemies: Enemy[] = [];

export function spawnEnemy(canvasWidth: number, canvasHeight: number) {
  const enemy: Enemy = {
    x: Math.random() * (canvasWidth - ENEMY_SIZE),
    y: Math.random() * (canvasHeight - ENEMY_SIZE),
    w: ENEMY_SIZE,
    h: ENEMY_SIZE,
    speed: ENEMY_SPEED_MIN + Math.random() * (ENEMY_SPEED_MAX - ENEMY_SPEED_MIN)
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
    ctx.fillStyle = ENEMY_COLOR;
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  }
}
