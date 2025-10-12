import { Player, createPlayer, updatePlayer } from '../entities/Player';
import { enemies, spawnEnemy, updateEnemies } from '../entities/Enemy';
import { isColliding } from '../utils/collision';
import { ENEMY_SPAWN_INTERVAL } from '../constants';

export class Game {
  canvas: HTMLCanvasElement;
  player: Player;
  gameRunning = true;
  timeSinceLastSpawn = 0;
  gameTime = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.player = createPlayer(canvas.width, canvas.height);
  }

  update(delta: number) {
    if (!this.gameRunning) return;

    updatePlayer(this.player, delta, this.canvas.width, this.canvas.height);

    this.timeSinceLastSpawn += delta;
    if (this.timeSinceLastSpawn >= ENEMY_SPAWN_INTERVAL) {
      spawnEnemy(this.canvas.width, this.canvas.height);
      this.timeSinceLastSpawn = 0;
    }

    updateEnemies(enemies, this.player, delta);

    for (const enemy of enemies) {
      if (isColliding(this.player, enemy)) {
        this.player.hp -= 1;
        if (this.player.hp <= 0) {
          this.endGame();
          return;
        }
      }
    }

    this.gameTime += delta;
  }

  endGame() {
    this.gameRunning = false;
    alert('You lost, start again!');
    window.location.reload();
  }
}
