import { Character } from '../Character';
import { Player } from '../Player';

export class Warrior extends Character {
  constructor() {
    super('Warrior', 120, 0.07, 5, '#0000FF');
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
