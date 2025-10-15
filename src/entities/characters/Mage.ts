import { Character } from '../Character';
import { Player } from '../Player';

export class Mage extends Character {
  constructor() {
    super('Mage', 80, 0.1, 8, '#800080');
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
