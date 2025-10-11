import { Player } from '../entities/Player';
import { UI_PLAYER_HP_BAR_WIDTH, UI_PLAYER_HP_BAR_HEIGHT, UI_PLAYER_HP_COLOR, BG_COLOR } from '../constants';

export function drawUI(ctx: CanvasRenderingContext2D, player: Player) {
  const x = 20;
  const y = 20;

  ctx.fillStyle = 'white';
  ctx.fillRect(x, y, UI_PLAYER_HP_BAR_WIDTH, UI_PLAYER_HP_BAR_HEIGHT);

  const hpWidth = (player.hp / player.maxHp) * UI_PLAYER_HP_BAR_WIDTH;
  ctx.fillStyle = UI_PLAYER_HP_COLOR;
  ctx.fillRect(x, y, hpWidth, UI_PLAYER_HP_BAR_HEIGHT);

  ctx.fillStyle = 'white';
  ctx.font = '14px sans-serif';
  ctx.fillText(`HP: ${player.hp}`, x, y + UI_PLAYER_HP_BAR_HEIGHT + 15);
}
