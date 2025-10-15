import { keys } from '../input';
import { PLAYER_BASE_WIDTH, PLAYER_BASE_HEIGHT } from '../constants';
import { Character } from './Character';

export type Player = {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  speed: number;
  maxHp: number;
  hp: number;
  character: Character;
};

export function createPlayer(canvasWidth: number, canvasHeight: number, character: Character): Player {
  return {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
    w: PLAYER_BASE_WIDTH,
    h: PLAYER_BASE_HEIGHT,
    color: character.color,
    speed: character.baseSpeed,
    maxHp: character.baseHp,
    hp: character.baseHp,
    character,
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
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
}
