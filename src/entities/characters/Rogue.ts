import { Character } from '../Character';
import { Player } from '../Player';

export class Rogue extends Character {
  constructor() {
    super('Rogue', 90, 0.12, 6, '#FFFF00');
  }

  // TO DO
  weaponAttack(player: Player): void {
    console.log('to do');
  }

  // TO DO
  applyPassive(player: Player): void {
    console.log('to do');
  }
}
