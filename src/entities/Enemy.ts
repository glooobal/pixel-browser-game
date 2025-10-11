import { Player } from './Player';
import { ENEMY_BASE_SIZE, ENEMY_BASE_SPEED, ENEMY_COLOR } from '../constants';

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
    x: Math.random() * (canvasWidth - ENEMY_BASE_SIZE),
    y: Math.random() * (canvasHeight - ENEMY_BASE_SIZE),
    w: ENEMY_BASE_SIZE,
    h: ENEMY_BASE_SIZE,
    speed: ENEMY_BASE_SPEED,
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

export function addEnemies(ctx: CanvasRenderingContext2D, enemies: Enemy[]) {
  for (const enemy of enemies) {
    ctx.fillStyle = ENEMY_COLOR;
    ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  }
}
