import { FRAME_TIME } from '../constants';
import { Game } from './Game';
import { renderScene } from './Scene';

export function startGameLoop(ctx: CanvasRenderingContext2D, game: Game) {
  let lastTime = 0;
  let accumulator = 0;

  function loop(time: number) {
    if (!game.gameRunning) return;

    const delta = time - lastTime;
    lastTime = time;

    accumulator += delta;
    while (accumulator >= FRAME_TIME) {
      game.update(FRAME_TIME);
      accumulator -= FRAME_TIME;
    }

    renderScene(ctx, game);
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}
