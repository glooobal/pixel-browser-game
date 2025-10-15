import { Character } from '../Character';
import { Player } from '../Player';

export class Ranger extends Character {
  constructor() {
    super('Ranger', 90, 0.1, 6, '#008000');
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
