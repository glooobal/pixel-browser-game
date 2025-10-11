import { Player } from '../entities/Player';
import { addHealthBar } from './healthBar';

export function addUI(ctx: CanvasRenderingContext2D, player: Player) {
  addHealthBar(ctx, player);
}
