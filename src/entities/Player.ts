import { keys } from '../input';
import {
  PLAYER_BASE_WIDTH,
  PLAYER_BASE_HEIGHT,
  PLAYER_BASE_SPEED,
  PLAYER_BASE_MAX_HP,
  PLAYER_COLOR,
} from '../constants';

export type Player = {
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
  hp: number;
  maxHp: number;
};

export function createPlayer(canvasWidth: number, canvasHeight: number): Player {
  return {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    w: PLAYER_BASE_WIDTH,
    h: PLAYER_BASE_HEIGHT,
    speed: PLAYER_BASE_SPEED,
    hp: PLAYER_BASE_MAX_HP,
    maxHp: PLAYER_BASE_MAX_HP,
  };
}

export function updatePlayer(player: Player, delta: number, canvasWidth: number, canvasHeight: number) {
  if (keys['ArrowUp'] || keys['w'] || keys['W']) player.y -= player.speed * delta;
  if (keys['ArrowDown'] || keys['s'] || keys['S']) player.y += player.speed * delta;
  if (keys['ArrowLeft'] || keys['a'] || keys['A']) player.x -= player.speed * delta;
  if (keys['ArrowRight'] || keys['d'] || keys['D']) player.x += player.speed * delta;

  player.x = Math.max(0, Math.min(canvasWidth - player.w, player.x));
  player.y = Math.max(0, Math.min(canvasHeight - player.h, player.y));
}

export function addPlayer(ctx: CanvasRenderingContext2D, player: Player) {
  ctx.fillStyle = PLAYER_COLOR;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
