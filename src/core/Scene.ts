import { BG_COLOR } from '../constants';
import { addPlayer } from '../entities/Player';
import { addEnemies } from '../entities/Enemy';
import { addHealthBar } from '../ui/HealthBar';
import { addGameTimer } from '../ui/GameTimer';
import { enemies } from '../entities/Enemy';
import { Game } from './Game';

export function renderScene(ctx: CanvasRenderingContext2D, game: Game) {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);

  addPlayer(ctx, game.player);
  addEnemies(ctx, enemies);
  addHealthBar(ctx, game.player);
  addGameTimer(ctx, game.gameTime, game.canvas.width);
}
