import { keys } from '../input';
import { PLAYER_COLOR, PLAYER_HEIGHT, PLAYER_SPEED, PLAYER_WIDTH } from '../constants';

export type Player = {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
};

export function createPlayer(canvasWidth: number, canvasHeight: number): Player {
  return {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    w: PLAYER_WIDTH,
    h: PLAYER_HEIGHT,
    speed: PLAYER_SPEED
  };
}

export function updatePlayer(player: Player, delta: number, canvasWidth: number, canvasHeight: number) {
  if (keys['ArrowUp']) player.y -= player.speed * delta;
  if (keys['ArrowDown']) player.y += player.speed * delta;
  if (keys['ArrowLeft']) player.x -= player.speed * delta;
  if (keys['ArrowRight']) player.x += player.speed * delta;

  player.x = Math.max(0, Math.min(canvasWidth - player.w, player.x));
  player.y = Math.max(0, Math.min(canvasHeight - player.h, player.y));
}

export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player) {
  ctx.fillStyle = PLAYER_COLOR;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
